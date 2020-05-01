+++
categories = ["tech"]
date = "2018-11-25T04:52:59+07:00"
draft = false
slug = "deployment-using-now-and-cloudflare"
tags = ["cloud", "tech", "now", "cloudflare"]
title = "Deployment Using Now and Cloudflare"
type = ["post", "posts"]
toc = false

cover = "deployment-using-now-and-cloudflare.png"
coverCredit = "https://assets.zeit.co/image/upload/v1581518533/repositories/now-cli/v4.png"

[author]
  name = "Muhamad Fajar"

+++

{{< small text=":: this post has been updated with the latest update from Vercel (formerly ZEIT)" >}}

I've been playing around with [Now][vercel] deployment for a few months.
First I thought about Now is magic, with only small configuration (in v2)
I can deploy a static website easily and with the latest update, now I can
deploy (with default template) any static website without any configuration.
That's amazing.

## How to Deploy

First thing, you need Vercel account, of course. Next, if you use one of
the templates from this [list][template], congratulation, you only need
execute `now` from project root, something like this.

```bash
cd my_project
now
```

That's it. For the rest let Now do the work.

After your project has been deployed, you will be provided with a link to
the Preview Deployment, this can be shared **immediately**.

## How to Use Cloudflare with Now

Actually, Vercel have internal domain management, so you can directly buy
domain inside Vercel dashboard. But if you want to set up domain setting
using [Cloudflare][cloudflare] so you can set cache or other, this also
simple. You just need register some DNS and encryption settings.

### Add DNS Records

To connecting Cloudflare with Vercel, you need add `CNAME` record
with alias of `alias.zeit.co` so its traffic proxied through Cloudflare.
Next, register domain to Vercel account using

```bash
now domains add your-domain-name.com
```

when add the domain success, you will get a verification code for
further to fill `TXT` record with name `_now`.

After all records has been created, you need to verify domain using
```bash
now domains verify your-domain-name.com
```

### Make HTTPS Works

In order to make https works you need change Cloudflare’s encryption mode
to **Full (strict)** and then create page rules to make Enforce HTTPS
for this domain:
1.  Go to page "Create Page Rule"
2.  Add new page rules with configuration like this:\
    URL: __http://\*your-domain-name.com/\*__ \
    The settings are: **Always Use HTTPS**
3.  Save and Deploy

## Make Deploy Automatically

If your project source code hosted on [GitHub][github], [GitLab][gitlab]
or [Bitbucket][bitbucket], Vercel have tools to integrating with deploymant,
so when you push code to the specific branch, Vercel will automatically
detect changes and make a deployment. For more information,jump up to
[Vercel documentation][doc].

End of word, yes, I'm using Now in my [personal website landing][fajar].

[vercel]: https://vercel.com/
[template]: https://github.com/zeit/now/tree/master/examples
[cloudflare]: https://www.cloudflare.com/
[github]: https://github.com/
[gitlab]: https://about.gitlab.com/
[bitbucket]: https://bitbucket.org/product/
[doc]: https://vercel.com/docs/v2/git-integrations
[fajar]: https://muhfajar.id/
