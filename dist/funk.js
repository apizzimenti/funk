"use strict";

/**
 * Created by apizzimenti on 9/1/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Parent object for all funk methods. Each time a method is run, funk keeps a reference to the last array it was
 * fed before it was modified. Constructing <code>f</code> (i.e. <code>new f()</code>) is not required. You can simply
 * use f.&lt;method&gt; without instantiation.
 *
 * @property lastArray {Array} Reference to the last array modified.
 * @property throwError {function} Typechecks parameters.
 *
 * @static
 * @class f
 * @type {{}}
 */

var f = {
    lastArray: [],
    throwError: function throwError(a) {
        if (!Array.isArray(a)) {
            throw new Error("First parameter is not of type Array.");
        }
    }
};

"use strict";

/**
 * Created by apizzimenti on 9/2/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Intakes the provided array, sorts it, and checks its end indices for blank, undefined, or null members.
 *
 * @param a {Array} Array to be searched.
 *
 * @returns {boolean} Does the array contain any blank, undefined, or null members?
 *
 * @this f
 */

f.containsBlank = function (a) {

    this.throwError(a);
    this.lastArray = a.slice();

    var blank = false;

    if (a.length < 23) {
        a.sort();
    } else {
        a = quicksort(a, 0, a.length - 1);
    }

    if (a[0] === "" || a[a.length - 1] === null || a[a.length - 1] === undefined) {
        blank = true;
    }

    return blank;
};

"use strict";

/**
 * Created by apizzimenti on 9/3/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Transforms the provided array to a doubly linked list.
 *
 * @param a {Array} Array to be transformed.
 *
 * @this f
 *
 * @returns {dList}
 */

f.dList = function (a) {

    var d = new dList();

    for (var i = 0; i < a.length; i++) {

        if (i === 0) {
            d.addToHead(a[i]);
        } else {
            d.addToTail(a[i]);
        }
    }

    return d;
};

"use strict";

/**
 * Created by apizzimenti on 5/8/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Groups the values of the array in place by step; groups array values into groups of size step.
 *
 * @param a {Array} Array to be grouped.
 * @param step {Number} Group size.
 *
 * @returns {Array}
 *
 *
 *
 * @this f
 *
 * @example
 * var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * f.groupByStep(a, 3)
 * // [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10] ]
 *
 * var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 *     c = f.groupByStep(b, 2)
 * // [ [1, 2], [3, 4], [5, 6], [7, 8], [9, 10] ]
 */

f.groupBy = function (a, step) {

    this.throwError(a);
    this.lastArray = a.slice();

    var right = a.length % step,
        last_length = a.length - right;

    var step_array = [],
        last_array = [],
        index = 0;

    for (var i = 0; i < last_length; i++) {

        step_array.push(a[i]);
        index = Math.floor((i + 1) / step) - 1;

        if ((i + 1) % step === 0) {

            a[index] = step_array;
            step_array = [];
        }
    }

    for (var j = last_length; j < a.length; j++) {
        last_array.push(a[j]);
        delete a[j];
    }

    a.length = last_length;

    for (var k = last_length - last_array.length; k < last_length; k++) {
        delete a[k];
    }

    a.length = a.length / step;

    if (last_array.length < 0) {
        a.push(last_array);
    }

    return a;
};

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * Created by apizzimenti on 9/2/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Returns truthy if the provided array has a member with the specified type.
 *
 * @param a {Array} Array to be searched.
 * @param type {String} Typestring.
 * @param [recursive=false] {boolean} Do you want to search this list recursively?
 *
 * @this f
 *
 * @returns {boolean}
 *
 *
 */

f.hasType = function (a, type, recursive) {

    this.throwError(a);
    this.lastArray = a.splice();
    type = type.toLowerCase();

    if (recursive === undefined) {
        recursive = false;
    }

    var contains = false;

    for (var i = 0; i < a.length; i++) {

        if (_typeof(a[i]) === type && !Array.isArray(a[i])) {
            contains = true;
            break;
        }

        if (Array.isArray(a[i]) && recursive) {
            contains = this.hasType(a[i], type, recursive);

            if (contains) {
                break;
            }
        } else if (Array.isArray(a[i]) && !recursive && type.toLowerCase() === "array") {
            contains = true;
            break;
        }
    }

    return contains;
};

"use strict";

/**
 * Created by apizzimenti on 5/8/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Deletes value(s) from the specified index or list of indices in place.
 *
 * @param a {Array} Array to have index removed.
 * @param index {Number | Number[]} index or list of indices to be deleted
 *
 * @throws RangeError
 * @returns {Array}
 *
 *
 *
 * @this f
 *
 * @example
 * var a = [1, 2, 3, 4, 5];
 * f.removeIndex(a, 2)
 * // [ 1, 2, 4, 5 ]
 *
 * var b = [1, 2, 3, 4, 5];
 * f.removeIndex(b, [0, 1, 2]);
 * // [ 4, 5 ]
 *
 *
 * var c = [1, 2, 3, 4, 5],
 *     d = f.removeIndex(c, 2);
 * // [ 1, 2, 4, 5 ]
 */

f.removeIndex = function (a, index) {

    this.throwError(a);
    this.lastArray = a.slice();

    var indices = Array.isArray(index) ? index : [index],
        greatest_val = quicksort(indices, 0, indices.length - 1)[indices.length - 1];

    if (indices.length > a.length || greatest_val > a.length - 1) {

        throw new RangeError();
    } else {

        var amount_gone = 0;

        for (var i = 0; i < indices.length; i++) {
            var curr_index = indices[i] - amount_gone,
                length = a.length;

            for (var k = curr_index; k < length - 1; k++) {
                a[k] = a[k + 1];
            }

            delete a[length - 1];
            a.length = length - 1;
            amount_gone++;
        }
    }

    return a;
};

"use strict";

/**
 * Created by apizzimenti on 5/8/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Deletes all specified value(s) in an array.
 *
 * @param a {Array} Array to have value removed.
 * @param value {Number | Array} value or list of values to be deleted
 *
 * @throws ReferenceError
 *
 * @returns {Array}
 *
 *
 *
 * @this f
 *
 * @example
 * var a = [1, 2, 3, 4, 5];
 * f.removeValue(a, 3);
 * // [ 1, 2, 4, 5 ]
 *
 * var b = [1, 2, 3, 4, 5];
 * f.removeValue(b, [2, 3, 5]);
 * // [ 1, 4 ]
 *
 * var c = [1, 2, 3, 4, 5],
 *     d = f.removeValue(c, 3);
 * // [ 1, 2, 4, 5 ]
 *
 */

f.removeValue = function (a, value) {

    this.throwError(a);
    this.lastArray = a.slice();

    var vals = Array.isArray(value) ? value : [value],
        indices = [];

    for (var i = 0; i < vals.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (vals[i] === a[j]) {
                indices.push(j);
            }
        }
    }

    if (indices.length === 0) {

        throw new ReferenceError();
    } else {

        var amount_gone = 0;

        for (var k = 0; k < indices.length; k++) {
            var index = indices[k] - amount_gone,
                length = a.length;

            for (var l = index; l < length; l++) {
                a[l] = a[l + 1];
            }

            delete a[length - 1];
            a.length = length - 1;
            amount_gone++;
        }
    }

    return a;
};

"use strict";

/**
 * Created by apizzimenti on 9/2/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Converts an array into a singly linked list.
 *
 * @param a {Array} Array to be converted into a singly linked list.
 *
 * @this f
 *
 * @returns {sList}
 */

f.sList = function (a) {

    var s = new sList();

    for (var i = 0; i < a.length; i++) {

        if (i === 0) {
            s.addToHead(a[i]);
        } else {
            s.addToTail(a[i]);
        }
    }

    return s;
};

"use strict";

/**
 * Created by apizzimenti on 9/2/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @param value {*} Value of any type to be attributed to the node.
 *
 * @property value {*} Value of this Node.
 * @property [previous=null] {Node} In a doubly linked list, this points to the previous node in the list.
 * @property [next=null] {Node} In both doubly and singly linked lists, this points to the next node in the list.
 * @constructor
 */

function Node(value) {
  this.value = value;
  this.previous = null;
  this.next = null;
}

"use strict";

/**
 * Created by apizzimenti on 9/2/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc A doubly linked list.
 *
 * @property _head {Node} The Node object at the head of the list.
 * @property _length {Number} The number of linked Node objects.
 *
 * @class {Object} Doubly linked list.
 * @this dList
 * @constructor
 */

function dList() {
    this._head = null;
    this._length = 0;
}

/**
 * @author Anthony Pizzimenti
 *
 * @desc Adds a new Node to the head of the dList.
 *
 * @param value {*} Value to be assigned to the new Node.
 *
 * @this dList
 *
 * @returns {Node}
 */

dList.prototype.addToHead = function (value) {

    var node = new Node(value),
        currentNode = this._head,
        lastNode;

    if (!currentNode) {
        this._head = node;
        this._length++;
        return node;
    }

    node.next = currentNode;
    this._head = node;
    currentNode.previous = node;

    this._length++;

    return node;
};

/**
 * @author Anthony Pizzimenti
 *
 * @desc Adds a new Node to the tail of the dList.
 *
 * @param value {*} Value to be assigned to the new Node.
 *
 * @this dList
 *
 * @returns {Node}
 */

dList.prototype.addToTail = function (value) {

    var node = new Node(value),
        refNode = this.retrieve(this._length - 1);

    if (!refNode) {
        this._head = node;
        this._length++;
        return node;
    }

    refNode.next = node;
    node.previous = refNode;

    this._length++;

    return node;
};

/**
 * @author Anthony Pizzimenti
 *
 * @desc Adds a new Node at the specified position.
 *
 * @param value {*} Value to be assigned to the new Node.
 * @param position {Number} Position in the linked list.
 *
 * @this dList
 *
 * @returns {Node}
 */

dList.prototype.add = function (value, position) {

    if (position > this._length) {
        throw new Error("Index out of range.");
    } else if (position === 0) {
        return this.addToHead(value);
    } else if (position === this._length - 1) {
        return this.addToTail(value);
    }

    var node = new Node(value),
        lastNode = this.retrieve(position - 1),
        nextNode = this.retrieve(position + 1);

    lastNode.next = node;
    nextNode.previous = node;

    node.previous = lastNode;
    node.next = nextNode;

    this._length++;

    return node;
};

/**
 * @author Anthony Pizzimenti
 *
 * @desc Removes the Node at the specified position.
 *
 * @param position {Number} Position from which the Node will be removed.
 *
 * @this dList
 */

dList.prototype.remove = function (position) {

    var currentNode = this._head,
        remNode,
        lastNode,
        nextNode;

    if (position > this._length - 1) {
        throw new Error("Index out of range.");
    }

    if (position > 0 && position < this._length - 1) {

        lastNode = this.retrieve(position - 1);
        nextNode = this.retrieve(position + 1);

        remNode = null;
        lastNode.next = nextNode;
        nextNode.previous = lastNode;
    } else if (position === 0) {

        this._head = currentNode.next;
        currentNode = null;
    } else if (position === this._length - 1) {

        currentNode = this.retrieve(position - 1);
        currentNode.next = null;
    }

    this._length--;
};

/**
 * @author Anthony Pizzimenti
 *
 * @desc Retrieves the Node at the specified position.
 *
 * @param position {Number} Position to retrieve the Node from.
 *
 * @this dList
 *
 * @returns Node
 */

dList.prototype.retrieve = function (position) {

    var currentNode = this._head,
        i = 0;

    if (position > this._length || position < 0) {
        throw new Error("Index out of range.");
    }

    while (i < position) {
        currentNode = currentNode.next;
        i++;
    }

    return currentNode;
};

/**
 * @author Anthony Pizzimenti
 *
 * @desc Transforms linked list into an array.
 * @returns {Array}
 */

dList.prototype.toArray = function () {

    var a = [],
        node = this._head,
        i = 0;

    while (i < this._length) {
        a.push(node.value);
        node = node.next;
        i++;
    }

    return a;
};

"use strict";

/**
 * Created by apizzimenti on 4/4/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc compartmentalized swap method for _quicksort
 *
 * @param array {Array} array to have values swapped
 * @param first {Number} index of lower value
 * @param second {Number} index of higher value
 */

function _swap(array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

/**
 * @author Anthony Pizzimenti
 *
 * @desc sorts partitions of inputted array
 * @param array {Array} array (or partition) to be sorted
 * @param l {Number} lower index
 * @param r {Number} upper index
 *
 * @returns {Number}
 */

function _partition(array, l, r) {

    var piv = array[Math.floor((l + r) / 2)],
        i = l,
        j = r;

    while (i <= j) {

        while (array[i] < piv) {
            i++;
        }

        while (array[j] > piv) {
            j--;
        }

        if (i <= j) {
            _swap(array, i, j);
            i++;
            j--;
        }
    }

    return i;
}

/**
 * @author Anthony Pizzimenti
 *
 * @desc an implementation of quicksort used in removeIndex() to sort the array of indices
 *
 * @see removeIndex()
 *
 * @param array {Array} array to be sorted
 * @param l {Number} leftmost index in current sort range
 * @param r {Number} rightmost index in current sort range
 *
 * @returns {Array}
 */

function quicksort(array, l, r) {

    var index;

    if (array.length > 1) {

        index = _partition(array, l, r);

        if (l < index - 1) {
            quicksort(array, l, index - 1);
        }

        if (index < r) {
            quicksort(array, index, r);
        }
    }

    return array;
}

"use strict";

/**
 * Created by apizzimenti on 9/2/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc A singly linked list.
 *
 * @property _head {Node} The Node object at the head of the list.
 * @property _length {Number} The number of linked Node objects.
 *
 * @class {object} A singly linked list.
 * @this sList
 * @constructor
 */

function sList() {

    this._head = null;
    this._length = 0;
}

/**
 * @author Anthony Pizzimenti
 *
 * @desc Adds a new Node to the head of the current sList.
 *
 * @param value {*} Value to be assigned to the new Node.
 *
 * @returns {Node}
 *
 * @this sList
 */

sList.prototype.addToTail = function (value) {

    var node = new Node(value),
        currentNode = this._head;

    if (!currentNode) {
        this._head = node;
        this._length++;
        return node;
    }

    currentNode = this.retrieve(this._length - 1);
    currentNode.next = node;

    this._length++;
    return node;
};

/**
 * @author Anthony Pizzimenti
 *
 * @desc Adds a new Node to the tail of the current sList.
 *
 * @param value {*} Value to be assigned to the new Node.
 *
 * @returns {Node}
 *
 * @this sList
 */

sList.prototype.addToHead = function (value) {

    var node = new Node(value),
        currentNode = this._head;

    if (!currentNode) {
        this._head = node;
        this._length++;
        return node;
    }

    node.next = currentNode;
    this._head = node;

    this._length++;
    return node;
};

/**
 * @author Anthony Pizzimenti
 *
 * @desc Adds a new Node at the provided position.
 *
 * @param value {*} Value to be assigned to the new Node.
 * @param position {Number} Position in the linked list.
 *
 * @returns {Node}
 *
 * @this sList
 */

sList.prototype.add = function (value, position) {

    if (position > this._length) {
        throw new Error("Index out of range.");
    } else if (position === 0) {
        return this.addToHead(value);
    } else if (position === this._length - 1) {
        return this.addToTail(value);
    }

    var node = new Node(value),
        lastNode = this.retrieve(position - 1),
        nextNode = this.retrieve(position + 1);

    this._length++;

    lastNode.next = node;
    node.next = nextNode;

    return node;
};

/**
 * @author Anthony Pizzimenti
 *
 * @desc Retrieves the Node at the specified positon.
 *
 * @param position {Number} Position to retrieve Node from.
 *
 * @this sList
 *
 * @returns Node
 */

sList.prototype.retrieve = function (position) {

    var currentNode = this._head,
        i = 0;

    if (position > this._length || position < 0) {
        throw new Error("Index out of range.");
    }

    while (i < position) {
        currentNode = currentNode.next;
        i++;
    }

    return currentNode;
};

/**
 * @author Anthony Pizzimenti
 *
 * @desc Removes the Node at the specified position.
 *
 * @param position {Number} Position from which the Node will be removed.
 *
 * @this sList
 */

sList.prototype.remove = function (position) {

    var currentNode = this._head,
        remNode,
        lastNode,
        nextNode;

    if (position > this._length) {
        throw new Error("Index out of range.");
    }

    if (position > 0 && position < this._length - 1) {

        lastNode = this.retrieve(position - 1);
        nextNode = this.retrieve(position + 1);

        remNode = null;
        lastNode.next = nextNode;
    } else if (position === 0) {

        this._head = currentNode.next;
        currentNode = null;
    } else if (position === this._length - 1) {

        currentNode = this.retrieve(position - 1);
        currentNode.next = null;
    }

    this._length--;
};

/**
 * @author Anthony Pizzimenti
 *
 * @desc Transforms the linked list into an array.
 *
 * @this sList
 *
 * @returns {Array}
 */

sList.prototype.toArray = function () {

    var a = [],
        node = this._head,
        i = 0;

    while (i < this._length) {
        a.push(node.value);
        node = node.next;
        i++;
    }

    return a;
};
