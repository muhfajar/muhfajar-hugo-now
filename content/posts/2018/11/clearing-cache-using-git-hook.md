+++
categories = ["tech"]
date = "2018-11-27T11:22:17+07:00"
draft = false
slug = "purge-cache-with-git-hooks"
tags = ["cloud", "tech", "git", "cloudflare"]
title = "Purge Cache with Git Hooks"
type = ["post", "posts"]
toc = false

cover = "purge-cache-with-git-hooks.jpg"
coverCredit = "https://wall.alphacoders.com/big.php?i=888391"

[author]
  name = "Muhamad Fajar"

+++

In the last post about [deploying Now with Cloudflare][deploy], I have been describing in general how to deploy a project using Now and how to integrating with [Cloudflare][cloudflare]. After success deploying, if you set Cloudflare cache to make your website faster I guess you will face issue relate with a cache.

First, if you push or make changes, your website not instantly follow the changes. From my experience that because of cache! So to handle this case we need to purge every time we make a change and Git have a handy feature to make it automatically, they call hooks.

> Git hooks are scripts that Git executes before or after events such
> as: commit, push, and receive. Git hooks are a built-in feature - no
> need to download anything. Git hooks are run locally.[[1]][git-hook]

To use this feature you only need to create a shell script and make it executable then put in hooks directory in .git on a project root. So that will be like this:

```shell
cd my_project/.git/hooks
touch pre-commit
chmod +x pre-commit
```

Inside file pre-commit, we can add shell script to call Cloudflare API like this:

```shell
#!/bin/bash

if ! [ -f ~/.cloudflare_config_muhfajar.blog ] ; then
  echo "No ~/.cloudflare_config_muhfajar.blog file found. Cloudflare clear cache SKIPPED."
  exit 0
fi

. ~/.cloudflare_config_muhfajar.blog

echo -n "Clearing Cloudflare cache of muhfajar.id ....."

CF="$(curl -s -X DELETE "https://api.cloudflare.com/client/v4/zones/$CF_ID/purge_cache" \
     -H "X-Auth-Email: $CF_EMAIL" \
     -H "X-Auth-Key: $CF_API_KEY" \
     -H "Content-Type: application/json" \
     --data '{"purge_everything":true}')"

if [ -n "$(echo $CF | grep success)" ] ; then
  echo " Success!"
else
  echo " *** FAILED ***"
  echo "Could not clear cloudflare's cache. Update will not proceed."
  # exit with 1, so the update does not proceed, so we will know
  exit 1
fi
```

As you can see, that have separated config file, to make the script work, we also need to create a configuration file in the user directory.

```shell
cd ~
touch .cloudflare_config_muhfajar.blog
```

And add detail about Cloudflare configuration

```text
CF_API_KEY=some-api-key-from-cloudflare
CF_EMAIL=your.email.registered.in.cloudflare@foo.com
CF_ID=cloudflare-zone-id
```

To generate an API key in Cloudflare, please refer to this [link][token]. After all complete, now you can deploy and also tell Cloudflare to purge your cache, so your web visitor always gets the latest data.

[deploy]: https://muhfajar.blog/posts/deploying-now-with-cloudflare/
[cloudflare]: https://www.cloudflare.com/
[git-hook]: https://githooks.com/
[token]: https://developers.cloudflare.com/api/tokens/create
