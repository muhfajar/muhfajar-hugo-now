+++
categories = ["journal"]
date = "2020-09-24T07:43:09+0700"
draft = false
slug = "django-the-side-project-best-friend"
tags = ["python", "django", "tech", "journal"]
title = "Django: The Side Project Best Friend"
type = ["post", "posts"]
toc = false

cover = "django-the-side-project-best-friend.jpg"
coverCredit = "https://rookie6.github.io/%E6%8A%80%E6%9C%AF/django%E6%95%99%E7%A8%8B%E4%B9%8B%E5%85%A5%E9%97%A8/"

[author]
  name = "Muhamad Fajar"

+++

Ever you heard about Django before? If not, you are like me in early 2016, the year when I first found this gem. I was wondering about a Django since the website says "The web framework for perfectionists with deadlines." ([djangoproject.com][djangoproject]). Me as a person who knows nothing about Django when first read that is like, "really? I must learn this to find out this framework is really for perfectionists with deadlines or just a gimmick".

Long short story, I had read the documentation and try the [project tutorial][django_tut] and surprisingly, what the motto says I think is all true. I only need to write a model and register to the admin view, and voila, create, update, read, and delete for the related a model complete with the dashboard, and the login page is ready to use. Oh, with the migration file as well. Quite promising isn't it.

In my journey to dig deeper with Django, I'm contributing the open-source project to find out how the others using this framework.

## The First Django Project

One day my friend comes to me and tells he has a freelance project. The project is creating API for mobile application with a tight deadline. I thought of using Laravel instead of Django because I'm more familiar with that and from my portfolio, I have pretty much project using Laravel.

When kick-off meeting, I try to breakdown all requirement and all possibilities if I'm using Laravel but when the timeline came in, I thought this would nearly impossible if I'm creating API and the dashboard at the same time. For only one month of working. As you know, at the moment I still work at a software house company, this means I have a limited time to working.

So, I decide to use Django instead of Laravel, even I never use it in production level. That will be my first project using Django.

#### \*fingers crossed*

All good until the requirement and the other has changed time by time, and I still can follow the timeline, In other words, Django works well with a tight deadline, but not with the project requirement. I think how sophisticated a framework if the project timeline, and the requirements from the beginning are not clear enough, that all will not be getting done on time.

The other project is an internal tool for the attendance system. The attendance system itself using RFID technology, and I'm using Django as a bridge from Raspberry to the existing attendance system. [This project][sshub] only spends two days working from scratch.

After quite a lot of projects using Django, I'm more confident using it. Because from the one-month timeline, using Django can cut up to one week, it's something right?

{{< giphy src="JQQwgVUMDIyAM" >}}

And the last thing, fun fact when using this framework, I'm using Django for my assignment test when joining Loket. I have one week to complete the test, but I can finish it for less than a day.

[djangoproject]: https://www.djangoproject.com
[django_tut]: https://docs.djangoproject.com/en/3.1/intro/tutorial01/
[sshub]: https://github.com/muhfajar/sshub-middleware
