# fd-insert-before

[![Build Status](https://travis-ci.org/fp-dom/fd-insert-before.svg)](https://travis-ci.org/fp-dom/fd-insert-before) [![npm version](https://badge.fury.io/js/fd-insert-before.svg)](http://badge.fury.io/js/fd-insert-before)
> insert-before DOM element in a functional way.


## Installation

`npm install fd-insert-before --save`

## Usage

```js
let insert-before = require('fd-insert-before')
    , elem = require('fd-elem')
    , insert-beforetoBody = insert-before(document.body);

let p = elem('p', 'Meow');

insert-beforetoBody(p);

assert.equal(document.body.lastChild.innerText, 'Meow'); // true.
```

## API

```
insert-before :: parent -> child
```

A curried function that takes in:

* parent -> DOM element to which the child must be insert-beforeed.

* child  -> DOM element that needs to be insert-beforeed.



