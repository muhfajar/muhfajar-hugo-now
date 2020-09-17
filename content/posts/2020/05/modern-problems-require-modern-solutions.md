+++
categories = ["journal"]
date = "2020-05-09T15:55:14+07:00"
draft = false
slug = "modern-problems-require-modern-solutions"
tags = ["journal", "corona", "work-from-home", "open-source"]
title = "Modern Problems Require Modern Solutions"
type = ["post", "posts"]
toc = false

cover = "modern-problems-require-modern-solutions.gif"
coverCredit = "https://imgur.com/gallery/w0rIR7t"

[author]
  name = "Muhamad Fajar"

+++

Recently I posted about my experience with the longest [work from home][wfh] (posted in Bahasa) I ever had so far. The biggest challenge about work from home on the internet era is an internet connection itself. I often got a bad connection in the middle of the meeting, that not good especially I'm the host in a meeting, not only once but "daily standup meeting". Yes, you can see daily in the quoted word.

{{< giphy src="1094xSp23iiiv6" >}}

Since internet access in my apartment is not good enough to make a video call or conference call, so I decide to make my phone as a wifi modem, in the other word is wifi tethering. My mobile carrier is more reliable than apartment wifi, with a term and condition.

The term and condition are like, a good signal is not in all apartment area, that needs a lot of experiment and after multiple parameters to find a better signal, I just need to put my phone in there and don't do anything, and the other condition is, my phone need to placed directly on the floor, that's like a  natural cooling system, with the air conditioner turned on of course. Super cool and all good.

But after a few days, I am facing a new issue. Because I can't use my phone when it transforms into mobile wifi, I often miss text notification and when someone calls me, the connection goes to unstable. This one makes me need a standalone mobile wifi device.

{{< giphy src="l2Je66bykb2gkboQw" >}}

I decide to buy a wifi device from an online store, after some "research" about what the best and cheapest wifi device I found **4Gee Wifi Mini**. The journey hasn't stopped here. I face a new issue hahaha. I need to check the battery every single hour. Because I don't want to break my mobile wifi battery too soon, so I not connect it to the power adapter when the power level before reached 10%. Because I'm too lazy to open _http://192.168.1.1/_ (4Gee Wifi Mini web dashboard) every single hour to check battery level, so I make a python script to call that battery status and notify me when the battery is low or full. The result is now I know when I need to plug in the AC adapter or disconnect the AC adapter.

So far so good, all going well, my internet connection is more stable. If you want to see or have the same problem and want to use my **4Gee Wifi Mini** battery watcher script, you can download at my [GitHub repo][git].

[wfh]: https://www.muhfajar.blog/id/posts/kerja-dari-rumah/
[git]: https://github.com/muhfajar/4gee-wifi-battery-watcher
