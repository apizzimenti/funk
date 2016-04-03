### array-functions
-----

This package is a collection of useful array functions not provided in the current version of javascript.

#### installation
`[sudo] npm install array-functions -g`


#### usage
    require('array-functions');

    var a = [1, 2, 3, 4];
    a.removeIndex(2);
    console.log(a);
    
    // [ 1, 2, 4 ]

    var b = [1, 2, 3, 4];
    b.removeValue(3);
    console.log(b);

    // [ 1, 2, 4 ]
