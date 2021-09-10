# Readme documentation Guide

##### Table of Contents

[Headers](#headers)  
[Code Emphasis](#emphasis)  
[Lists](#lists)  
[Images](#images)  
[Code and Syntax Highlighting](#code)  
[Tables](#tables)  
[Blockquotes](#blockquotes)  
[Inline HTML](#html)  
[Horizontal Rule](#hr)  
[Line Breaks](#lines)  
[Embedding YouTube Videos](#videos)

<a name="headers"/>

## Headers

```no-highlight
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

# H1

## H2

### H3

#### H4

##### H5

###### H6

<a name="emphasis"/>

## Emphasis

```no-highlight

bold => **asterisks**

strike through => ~~strike.~~

```

<a name="lists"/>

## Lists

```no-highlight
1. First ordered list item
2. Another item
  * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

   Some text that should be aligned with the above item.

* Unordered list can use asterisks
- Or minuses
+ Or pluses
```

1. First ordered list item
2. Another item

- Unordered sub-list.

1. Actual numbers don't matter, just that it's a number
1. Ordered sub-list
1. And another item.

   Some text that should be aligned with the above item.

- Unordered list can use asterisks

* Or minuses

- Or pluses

<a name="links"/>

## Links

There are two ways to create links.

```no-highlight
[I'm an inline-style link](https://www.google.com)

[reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

```

[I'm an inline-style link](https://www.google.com)

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

<a name="images"/>

## Images

```no-highlight
Here's our logo (hover to see the title text):

Inline-style:
![alt text]("Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://user-images.githubusercontent.com/37651620/132839137-79592370-add0-4c18-bfba-b965bac6344d.png "Logo Title Text 2"
```

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://user-images.githubusercontent.com/37651620/132839137-79592370-add0-4c18-bfba-b965bac6344d.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://user-images.githubusercontent.com/37651620/132839137-79592370-add0-4c18-bfba-b965bac6344d.png "Logo Title Text 2"

<a name="code"/>

## Code and Syntax Highlighting

```no-highlight
Inline `code` has `back-ticks around` it.
```

<pre lang="no-highlight"><code>
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a &lt;b&gt;tag&lt;/b&gt;.
```
</code></pre>

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

<a name="tables"/>

## Tables

```no-highlight
Colons can be used to align columns.

| First        | second           | third  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | 100 |
| col 2 is      | centered      |   12 |


Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

Colons can be used to align columns.

| First    |    Second     | Third |
| -------- | :-----------: | ----: |
| col 3 is | right-aligned |   100 |
| col 2 is |   centered    |    12 |

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

<a name="blockquotes"/>

## Blockquotes

```no-highlight
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
```

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

<a name="html"/>

## Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

```no-highlight
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

<a name="hr"/>

## Horizontal Rule

```
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
```

Three or more...

---

Hyphens

---

Asterisks

---

Underscores

<a name="videos"/>

## YouTube Videos

They can't be added directly but you can add an image with a link to the video like this:

```no-highlight
<a href="http://www.youtube.com/watch?feature=player_embedded&v=dQw4w9WgXcQ" target="_blank"><img src="http://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
```

<a href="http://www.youtube.com/watch?feature=player_embedded&v=dQw4w9WgXcQ" target="_blank"><img src="http://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

Or, in pure Markdown, but losing the image sizing and border:

```no-highlight
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](http://www.youtube.com/watch?v=dQw4w9WgXcQ)
```

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](http://www.youtube.com/watch?v=dQw4w9WgXcQ)
