/**
 * Created by apizzimenti on 9/2/16.
 */

var Node = require("./Node");

/**
 * @author Anthony Pizzimenti
 * @desc A singly linked list.
 * @property {Node} _head The Node object at the head of the list.
 * @property {number} _length The number of linked Node objects.
 * @constructor
 * @memberof objects
 */
function LinkedList () {
    this._head = null;
    this._length = 0;
}

/**
 * @author Anthony Pizzimenti
 * @desc Adds a new Node to the head of the current LinkedList.
 * @param {*} value Value to be assigned to the new Node.
 * @this LinkedList
 * @returns {Node} Node pushed onto the head of the list.
 */
LinkedList.prototype.push = function (value) {
    var node = new Node(value),
        currentNode = this._head;
    
    if (!currentNode) {
        this._head = node;
        this._length++;
        return node;
        
    }
    
    currentNode = this.pop(this._length - 1);
    currentNode.next = node;
    
    this._length++;
    return node;
};

/**
 * @author Anthony Pizzimenti
 * @desc Adds a new Node to the tail of the current LinkedList.
 * @param {*} value Value to be assigned to the new Node.
 * @this LinkedList
 * @returns {Node} Node pushed onto the tail of the list.
 */
LinkedList.prototype.unshift = function (value) {
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
 * @desc Adds a new Node at the provided position.
 * @param {*} value Value to be assigned to the new Node.
 * @param {number} position Position in the linked list.
 * @this LinkedList
 * @returns {Node} Node inserted into the list.
 */
LinkedList.prototype.insert = function (value, position) {
    
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
    
    this._length++;
    
    lastNode.next = node;
    node.next = nextNode;
    
    return node;
};

/**
 * @author Anthony Pizzimenti
 * @desc Retrieves the Node at the specified positon.
 * @param {number} [position=length] Position to retrieve Node from.
 * @throws RangeError
 * @this LinkedList
 * @returns {Node} Node removed from the list.
 */
LinkedList.prototype.pop = function (position) {
    
    if (position == undefined) {
        position = this._length;
    }
    
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
 * @desc Removes the Node at the specified position.
 * @param {number} position Position from which the Node will be removed.
 * @throws RangeError
 * @this LinkedList
 * @returns {undefined}
 */
LinkedList.prototype.remove = function (position) {
    var currentNode = this._head,
        lastNode,
        nextNode;
    
    if (position > this._length) {
        throw new RangeError("Provided position is not within the bounds of the list.");
    }
    
    if (position > 0 && position < this._length - 1) {
    
        lastNode = this.pop(position - 1);
        nextNode = this.pop(position + 1);

        lastNode.next = nextNode;
        
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
 * @desc Transforms the linked list into an array.
 * @this LinkedList
 * @returns {Array} Array representation of the linked list.
 */
LinkedList.prototype.toArray = function () {
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

module.exports = LinkedList;
