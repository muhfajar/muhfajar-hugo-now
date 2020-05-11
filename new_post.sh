#!/bin/bash
set -e

now=$(date +%Y-%m-%dT%H:%M:%S%z)
dir="content/posts/$(date +%Y)/$(date +%m)/"

echo "Creating new post with template"
echo "Title: $1"
echo "Published date: ${now}"

mkdir -p "${dir}"

cd "${dir}"

touch "$1.md"

cat <<EOT >> "$1.md"
+++
categories = ["$2"]
date = "${now}"
draft = true
slug = "$1"
tags = [""]
title = ""
type = ["post", "posts"]
toc = false

cover = ""
coverCredit = ""

[author]
  name = "Muhamad Fajar"

+++
EOT
