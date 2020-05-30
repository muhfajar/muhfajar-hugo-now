+++
categories = ["journal"]
date = "2020-05-16T23:30:23+07:00"
draft = false
slug = "kisah-id-dan-blog"
tags = ["journal", "freebies", "template"]
title = "Kisah .id dan .blog"
type = ["post", "posts"]
toc = false

cover = "kisah-id-dan-blog.jpg"
coverCredit = "https://www.wallpaperup.com/611537/BLOG_blogger_computer_internet_typography_text_media_blogging_social.html"

[author]
  name = "Muhamad Fajar"

+++

Mungkin untuk beberapa orang yang pernah mengunjungi situs web pribadi saya sebelumnya akan merasa pangling saat melihat tema dari halaman utamanya karena sebelumnya halaman utama situs web saya merupakan halaman indeks dari [CMS Hugo][hugo] saja. Karena pada awalnya niat saya hanya untuk membuat situs web pribadi sebagai halaman blog saja. Namun setelah saya melihat situs web pribadi dari [Cody Ogden][cody] (orang dibalik situs web [Killed by Google][graveyard]) saya tertarik untuk mengikuti apa yang dia lakukan untuk halaman blognya. Jika dilihat di situs web pribadi dia, dia memisahkan domain untuk halaman web utamanya dengan halaman untuk blog. Ini cukup menarik bagi saya, terlebih sekarang sudah ada TLD [.blog][blog] yang menurut saya ini keren!

Langsunglah saya memesan domain tersebut, tidak lama setelah itu saya langsung daftarkan domain itu ke akun Cloudflare saya.

Dan kemudian bingung, saya sudah punya domain [.id][id] yang berisikan blog pribadi, jika saya pindahkan blog itu ke domain *muhfajar.blog* maka apa yang saya harus isi untuk di domain yang sudah lama saya punya itu? terlebih kemampuan saya untuk mendisain halaman web sudah banyak berkurang karena hampir 4 tahun terakhir saya selalu berkecimpung dalam dunia *backend*.

{{< giphy src="ZVik7pBtu9dNS" >}}

Setelah membiarkan situs web pribadi saya dengan domain .id kosong untuk beberapa hari, akhirnya saya menemukan sesuatu yang menurut saya cocok untuk saya pakai di domain .id itu. Waktu itu saya teringat akan situs web yang memberikan *template* HTML secara gratis, mungkin beberapa dari kalian sudah pernah mendengarnya atau bahkan menggunakan *template* dari situs web tersebut, nama dari situs web tersebut adalah [HTML5 UP][html5up].

Jadilah kombinasi dua situs web pribadi saya, satu menggunakan *template* gratis dari HTML5 UP dan satunya menggunakan *static* web *generator* Hugo.

Untuk *template* HTML itu saya tidak banyak merubah kode yang sudah ada, hanya merubah warna palet dari keseluruhan tema dan juga menambahkan sedikit *script* untuk mengambil *feed RSS* dari halaman blog saya. Untuk mengambil *feed RSS* itu saya hanya menggunakan *script* sederhana seperti dibawah ini:

{{< gist muhfajar 837ed19b3a7a54e2eaad5f850e9de1f3 >}}

Untuk tema Hugo juga saya tidak banyak merubah kode yang sudah ada, untuk lebih lengkapnya kedua kode sumber (id dan blog) bisa dilihat di halaman [GitHub][github] saya.

[hugo]: https://gohugo.io/
[cody]: https://codyogden.com/
[graveyard]: https://killedbygoogle.com/
[blog]: https://en.wikipedia.org/wiki/.blog
[id]: https://en.wikipedia.org/wiki/.id
[html5up]: https://html5up.net/
[github]: https://github.com/muhfajar/
