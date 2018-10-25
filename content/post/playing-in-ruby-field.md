---
title: "Playing in Ruby Field"
date: 2018-10-25T12:52:59+07:00
draft: true
---

I started as Ruby dev in my new job, previously I worked as Php and Python dev and I found Ruby is slightly different in some cases especially with Php.

```ruby
[].try(:[], 1) # => nil
[10].try(:[], 1) # => nil
[10, 20].try(:[], 1) # => 20
[10, 20, 30].try(:[], 1) # => 20

{}.try(:foo) # => nil
{ foo: 'bar' }.try(:foo) # => 'bar'
```
