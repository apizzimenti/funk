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

function Node (value) {
    this.value = value;
    this.previous = null;
    this.next = null;
}

