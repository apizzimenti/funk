/**
 * Created by apizzimenti on 9/2/16.
 */

/**
 * @author Anthony Pizzimenti
 * @desc Node object contained in doubly- and linked lists.
 * @param {*} value Value of any type to be attributed to the node.
 * @property {*} value Value of this Node.
 * @property {Node} [previous=null] In a doubly linked list, this points to the previous node in the list.
 * @property {Node} [next=null] In both doubly and singly linked lists, this points to the next node in the list.
 * @constructor
 */
function Node (value) {
    this.value = value;
    this.previous = null;
    this.next = null;
}

module.exports = Node;
