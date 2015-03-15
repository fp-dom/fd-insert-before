# fd-insert-before

[![Build Status](https://travis-ci.org/fp-dom/fd-insert-before.svg)](https://travis-ci.org/fp-dom/fd-insert-before) [![npm version](https://badge.fury.io/js/fd-insert-before.svg)](http://badge.fury.io/js/fd-insert-before)
> insert-before DOM element in a functional way.


## Installation

`npm install fd-insert-before --save`

## Usage

Let the DOM be like:

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>```


```js
let insertBefore = require('fd-insert-before');

let sp1 = elem("span","meow")
,sp2 = document.getElementById("childElement")
,parentDiv = sp2.parentNode

insertBefore(parentDiv, sp1, sp2);

selectOne('#parentElement').children[0].innerText; // => 'meow'
```

## API

```
insert-before :: parent -> newChild -> refChild
```

A curried function that takes in:

* parent The parent of the newly inserted node.

* newChild The node to insert.

* refChild The node before which newChild is inserted.



