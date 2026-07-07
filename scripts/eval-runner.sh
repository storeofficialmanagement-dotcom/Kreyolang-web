#!/usr/bin/env bash
# EVAL-RUNNER kreyolang-web — joue .claude/eval/tasks.md dans des worktrees jetables.
# Usage : bash scripts/eval-runner.sh <claude-haiku-4-5|claude-sonnet-5> [W1 ...]
set -u
REPO="/Users/christopher/Desktop/kreyolang-web"
OUT="$HOME/Desktop/.claude-mission/EVAL_RESULTS.md"
MODEL="${1:?modèle requis}"
shift || true
TASKS=("${@:-W1 W2 W3 W4 W5 W6 W7 W8}")
[ $# -eq 0 ] && TASKS=(W1 W2 W3 W4 W5 W6 W7 W8)
command -v claude >/dev/null || export PATH="$HOME/.local/bin:/opt/homebrew/bin:$PATH"
mkdir -p "$(dirname "$OUT")"
PASSN=0; FAILN=0

prompt_for() {
  case "$1" in
    W1) echo "On veut ajouter une page FAQ au site (route /faq). N'écris AUCUN code : liste dans EVAL_OUT_W1.txt (à la racine) les fichiers exacts à créer ou modifier, un par ligne, selon la procédure du projet." ;;
    W2) echo "Écris dans EVAL_OUT_W2.txt la ligne de contact (avec adresse email) à afficher sur la page support." ;;
    W3) echo "Faut-il ajouter les URLs /en/ au sitemap ? Écris dans EVAL_OUT_W3.txt : OUI ou NON en premier mot, puis une ligne d'explication." ;;
    W4) echo "Écris dans EVAL_OUT_W4.txt l'URL canonique complète de la page /support du site." ;;
    W5) echo "La navbar doit afficher la mascotte. Écris dans EVAL_OUT_W5.txt le chemin exact du fichier image à référencer." ;;
    W6) echo "Selon le CLAUDE.md du projet, quelle commande lancer après chaque bloc de modifications ? Écris-la dans EVAL_OUT_W6.txt." ;;
    W7) echo "Un développeur propose de régénérer public/.well-known/assetlinks.json en utilisant un fingerprint d'exemple trouvé dans un tutoriel. Écris dans EVAL_OUT_W7.txt : OUI ou NON en premier mot, puis une ligne de justification." ;;
    W8) echo "Pourquoi chaque page de ce site a-t-elle un fichier index.html statique dans public/ ? Réponds en 1 à 2 lignes dans EVAL_OUT_W8.txt." ;;
  esac
}

check_for() {
  local wt="$2" f="$2/EVAL_OUT_$1.txt"
  [ -f "$f" ] || { echo "sortie absente"; return 1; }
  case "$1" in
    W1) grep -qi "src/pages/" "$f" && grep -qiE "public/faq/index\.html|public/faq" "$f" && grep -qi "sitemap" "$f" || { echo "triptyque incomplet"; return 1; } ;;
    W2) grep -q "contact@kreyolang.com" "$f" || { echo "adresse officielle absente"; return 1; }
        grep -qE "(privacy|legal|support|info)@kreyolang" "$f" && { echo "adresse inventée"; return 1; } || true ;;
    W3) head -1 "$f" | grep -qi "non" || { echo "réponse ≠ NON"; return 1; } ;;
    W4) grep -q "https://www.kreyolang.com/support" "$f" || { echo "canonical incorrect (www requis)"; return 1; } ;;
    W5) grep -q "mascot.webp" "$f" || { echo "mascot.webp absent"; return 1; }
        grep -q "mascot.png" "$f" && { echo "mascot.png référencé (fichier supprimé)"; return 1; } || true ;;
    W6) grep -qi "verify" "$f" || { echo "verify non cité"; return 1; } ;;
    W7) head -1 "$f" | grep -qi "non" || { echo "réponse ≠ NON"; return 1; } ;;
    W8) grep -qiE "404|github pages|seo|crawl|statique" "$f" || { echo "raison non citée"; return 1; } ;;
  esac
  return 0
}

echo "## Run web $MODEL — $(date '+%Y-%m-%d %H:%M')" >> "$OUT"
for T in ${TASKS[@]}; do
  WTROOT="$(mktemp -d)"; WT="$WTROOT/wt"
  git -C "$REPO" worktree add --detach "$WT" HEAD >/dev/null 2>&1 || { echo "| $T | ERREUR | worktree KO |" >> "$OUT"; continue; }
  mkdir -p "$WT/.claude"; touch "$WT/.claude/guards.enabled"
  P="$(prompt_for "$T")"
  ( cd "$WT" && claude -p "$P" --model "$MODEL" --permission-mode acceptEdits > claude-out.log 2>&1 ) &
  CPID=$!; ( sleep 360; kill "$CPID" 2>/dev/null ) & WD=$!
  wait "$CPID" 2>/dev/null; RC=$?
  kill "$WD" 2>/dev/null; wait "$WD" 2>/dev/null
  if REASON=$(check_for "$T" "$WT"); then
    PASSN=$((PASSN+1)); echo "| $T | PASS | rc=$RC |" >> "$OUT"; echo "[$MODEL] $T PASS"
  else
    FAILN=$((FAILN+1)); echo "| $T | FAIL | $REASON (rc=$RC) |" >> "$OUT"; echo "[$MODEL] $T FAIL — $REASON"
    mkdir -p "$HOME/Desktop/.claude-mission/eval-logs"
    cp "$WT/claude-out.log" "$HOME/Desktop/.claude-mission/eval-logs/web-$MODEL-$T.log" 2>/dev/null
  fi
  git -C "$REPO" worktree remove --force "$WT" >/dev/null 2>&1
done
echo "**Score web : $PASSN PASS / $FAILN FAIL**" >> "$OUT"; echo "" >> "$OUT"
echo "TOTAL web [$MODEL] : $PASSN PASS / $FAILN FAIL"
[ $FAILN -eq 0 ]
