+++
categories = ["tech"]
date = "2018-01-06T12:52:59+07:00"
draft = false
series = ["Ruby"]
slug = "playing-in-ruby-mine"
tags = ["ruby", "tech", "programing-language", "rails"]
title = "Playing in Ruby Mine"
type = ["post", "posts"]
toc = false

cover = "playing-in-ruby-mine.jpg"
coverCredit = "https://hipwallpaper.com/view/IZMBfm"

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

For framework Ruby have Rails (not only Rails actually, many framework out there) and when I came to my new job, I have only 3 days to learn what Ruby is and what is Rails, so basically I am learning by doing after my quick learn from digging up Ruby and Rails documentation.

{{< giphy src="13HBDT4QSTpveU" >}}

On my first Jira task, I really struggle to find out *magic* behind Rails, a lot of class or module not implicitly import to another class, but I can use that class easily. Different with Django, you must import or define anything you plan to use. In Rails as long as your naming conventions follow documentation you can save a few lines of code (except you're using unofficial Rails Gem, you must import class using 'use' command)

## Handy Built-in Method
### try() Object

Imagine, you don't to worry about how to handle `out of index array` in Rails, I just found how to handle array with elegance (yes, as you know, I just to know Ruby about 1 week since this post was done I write), just put object `try()` after that you don't to worry about the possibility of that object being `nil` and thus raising an exception. See code snip on below:

```ruby
[].try(:[], 1) # => nil
[10].try(:[], 1) # => nil
[10, 20].try(:[], 1) # => 20
[10, 20, 30].try(:[], 1) # => 20

{}.try(:foo) # => nil
{ foo: 'bar' }.try(:foo) # => 'bar'
```

Disclaimer: `try()` object is good to implement when you not have much time to validate all return came from other object, this will prevent your code from process break, but this technique is not a replacement for good techniques like validations and default database values. 

### Rails ORM: Active Record

What is ORM? 
> Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science
> is a programming technique for converting data between incompatible type systems
> using object-oriented programming languages. This creates, in effect, a "virtual
> object database" that can be used from within the programming language. There are
> both free and commercial packages available that perform object-relational mapping,
> although some programmers opt to construct their own ORM tools.[[1]][wikipedia-orm]

In the other word, ORM modified or retrieved by writing query statements, and it lets you interact with that data as though it was a normal Ruby object.

For example from this query to fetch all data from `table`:

```mysql
SELECT * FROM table
```

Active record (ORM in Rails) will wrap that into `all()` object.

```ruby
Table.all()
```

### Array Manipulation

Rails have bunched of method to make coding more fun, for manipulate array Rails have  `select`, `each`, `map`, `reject` and `reduct`. Let's pick one sample to see what make this method so special.

Case study:\
We have dictionary of employee like this:

```ruby
employee = [
  {
    name: "Andi", 
    title: "Software Engineer",
    probation: false,
    salary: "1100" 
  },  
  {
    name: "Ipeh", 
    title: "Software Engineer", 
    probation: false,
    salary: "1200"
  },  
  {
    name: "Rojak", 
    title: "Junior Software Engineer",
    probation: true,
    salary: "800"
  }
]
```

Next we want to sum all salary if employee has pass the probation 
 
```ruby
# without each or select

e1 = employee[0][:probation]
e2 = employee[1][:probation]
e3 = employee[2][:probation]

total = 0

unless e1
    total += employee[0][:salary].to_i
end

unless e2
    total += employee[1][:salary].to_i
end

unless e3
    total += employee[2][:salary].to_i
end

puts total
``` 

Let's compare if we use some handy method to manipulating array

```ruby
# use reject, map and reduce

puts employee.reject{ |e| e[:probation] }.map{ |y| y[:salary].to_i }.reduce(:+)
```

This was my adventure using Ruby so far, that much more I guess when I start to building more complex application. See you next time!

[wikipedia-orm]: https://en.wikipedia.org/wiki/Object-relational_mapping
