## Installation
Quick and easy. Also on yarn.

`$ npm install da_funk [--save[-dev]]` or `$ yarn add da_funk`

## Functionality
`funk` does its work in-place and without dependencies. All functions are static, and there
are factory methods to create linked lists (and doubly-linked lists), so everything is operational right
out of the box - no setup required.

## Usage
```
var funk = require("da_funk"),
    a = [1, 2, 3, 4];
    
// grouping
funk.methods.group(a, 2);
// >>> a = [ [1, 2], [3, 4] ]

// linked list
var ll = funk.objects.LinkedList(a);
// >>> LinkedList {
           _head: Node {
               value: 1,
               previous: null,
               next: Node {
                   value: 2,
                   previous: null,
                   next: ... 
               }
           },
           _length: 4
       }
```