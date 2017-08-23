/**
 * @namespace objects
 */

var D = require("./DoublyLinkedList"),
    L = require("./LinkedList"),
    N = require("./Node"),
    q = require("./quicksort");

module.exports = {
    DoublyLinkedList: D,
    LinkedList: L,
    Node: N,
    quicksort: q
};
