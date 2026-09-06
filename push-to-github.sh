#!/bin/bash
# Push site updates to GitHub → Netlify auto-deploys from main
set -e
GIT=/Library/Developer/CommandLineTools/usr/bin/git
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

MSG="${1:-Update Ramalayam website}"
$GIT add -A
if $GIT diff --cached --quiet; then
  echo "Nothing to commit."
  exit 0
fi
$GIT commit -m "$MSG"
$GIT push origin main
echo "Pushed to GitHub — Netlify will deploy in ~1 minute."
echo "Live site: https://srikodandaramaswami.netlify.app/ (after Netlify is connected)"
