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
        return false;
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
