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
