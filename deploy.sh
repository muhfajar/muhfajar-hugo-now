#!/bin/sh
set -e

printf "\033[0;32mGenerating static page...\033[0m\n"

hugo --minify --cleanDestinationDir --gc

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

cd public

echo "muhfajar.blog\c" > CNAME

git add .

msg="Rebuilding site $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi
git commit -m "$msg"

git push origin master
