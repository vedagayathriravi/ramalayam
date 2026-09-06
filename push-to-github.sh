#!/bin/bash
# Push site updates to GitHub (works when Terminal git shows Xcode errors)
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
echo "Done → https://vedagayathriravi.github.io/ramalayam/"
