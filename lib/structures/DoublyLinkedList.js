/**
 * Created by apizzimenti on 9/2/16.
 */

var Node = require("./Node");

/**
 * @author Anthony Pizzimenti
 * @desc A doubly-linked list.
 * @property {Node} _head The Node object at the head of the list.
 * @property {number} _length The number of Node objects.
 * @constructor
 * @memberof objects
 */
function DoublyLinkedList () {
    this._head = null;
    this._length = 0;
}

/**
 * @author Anthony Pizzimenti
 * @desc Adds a new Node to the head of the DoublyLinkedList.
 * @param {*} value Value to be assigned to the new Node.
 * @this DoublyLinkedList
 * @returns {Node} Pushed Node populated with provided value.
 */
DoublyLinkedList.prototype.push = function (value) {
    
    var node = new Node(value),
        currentNode = this._head;
    
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
 * @desc Adds a new Node to the tail of the DoublyLinkedList.
 * @param {*} value Value to be assigned to the new Node.
 * @this DoublyLinkedList
 * @returns {Node} Pushed Node populated with provided value.
 */
DoublyLinkedList.prototype.unshift = function (value) {
    
    var node = new Node(value),
        refNode = this.pop(this._length - 1);
    
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
 * @desc Adds a new Node at the specified position.
 * @param {*} value Value to be assigned to the new Node.
 * @param {number} position Position in the linked list.
 * @this DoublyLinkedList
 * @returns {Node} Pushed Node populated with provided value.
 */
DoublyLinkedList.prototype.insert = function (value, position) {
    
    if (position > this._length) {
        throw new Error("Index out of range.");
    } else if (position === 0) {
        return this.push(value);
    } else if (position === this._length - 1) {
        return this.unshift(value);
    }
    
    var node = new Node(value),
        lastNode = this.pop(position - 1),
        nextNode = this.pop(position + 1);
    
    lastNode.next = node;
    nextNode.previous = node;
    
    node.previous = lastNode;
    node.next = nextNode;
    
    this._length++;
    
    return node;
};

/**
 * @author Anthony Pizzimenti
 * @desc Removes the Node at the specified position.
 * @param {number} position Position from which the Node will be removed.
 * @this DoublyLinkedList
 * @returns {undefined}
 */
DoublyLinkedList.prototype.remove = function (position) {
    
    var currentNode = this._head,
        lastNode,
        nextNode;
    
    if (position > this._length - 1) {
        throw new Error("Index out of range.");
    }
    
    if (position > 0 && position < this._length - 1) {
        lastNode = this.pop(position - 1);
        nextNode = this.pop(position + 1);

        lastNode.next = nextNode;
        nextNode.previous = lastNode;

    } else if (position === 0) {
        this._head = currentNode.next;
        currentNode = null;
    } else if (position === this._length - 1) {
        currentNode = this.pop(position - 1);
        currentNode.next = null;
    }
    
    this._length--;
};

/**
 * @author Anthony Pizzimenti
 * @desc Retrieves the Node at the specified position.
 * @param {number} position Position to retrieve the Node from.
 * @throws RangeError
 * @this DoublyLinkedList
 * @returns {Node} Popped node.
 */
DoublyLinkedList.prototype.pop = function (position) {
    
    var currentNode = this._head,
        i = 0;
    
    if (position > this._length || position < 0) {
        throw new RangeError("Provided position is not within the bounds of the list.");
    }
    
    while (i < position) {
        currentNode = currentNode.next;
        i++;
    }
    
    return currentNode;
};

/**
 * @author Anthony Pizzimenti
 * @desc Reverts linked list to an array.
 * @this DoublyLinkedList
 * @returns {Array} Array representation of the doubly-linked list.
 */
DoublyLinkedList.prototype.toArray = function () {
    
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

module.exports = DoublyLinkedList;
