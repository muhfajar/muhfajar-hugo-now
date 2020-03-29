+++
categories = ["tech"]
date = "2018-10-25T12:52:59+07:00"
draft = true
series = ["Ruby"]
slug = "playing-in-ruby-field"
tags = ["ruby", "tech", "programing language"]
title = "Playing in Ruby Field"
type = ["post", "posts"]

[author]
  name = "Muhamad Fajar"

+++

I started as Ruby dev in my new job, previously I worked as PHP and Python dev and I found Ruby is slightly different sometimes especially with PHP. First time I read Ruby documentation, Ruby syntax is familiar, that looks like Python with some additional word every end of a function. For example:
```python
def foo():
    print('bar')
```
```ruby
def foo
    puts 'bar'
end
```


Okay that for syntax, for framework Ruby have Rails (not only Rails, many framework out there) and when I came to my new job, I have 4 days to learn what Ruby is and what is Rails, so basically I learning by doing after my quick learn from Ruby and also Rails documentation.


On my first Jira task, I really struggling to find out *magic* behind Rails, a lot of class didn't import or extend to another class but I can use that class easily. Different with Django, you must import or define anything you plan to use. In Rails as long as your naming conventions follow documentation you can save a few lines of code (except you're using unofficial Rails Gem, you must import class using 'use' command)
```ruby
[].try(:[], 1) # => nil
[10].try(:[], 1) # => nil
[10, 20].try(:[], 1) # => 20
[10, 20, 30].try(:[], 1) # => 20

{}.try(:foo) # => nil
{ foo: 'bar' }.try(:foo) # => 'bar'
```
