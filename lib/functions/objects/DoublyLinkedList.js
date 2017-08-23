/**
 * Created by apizzimenti on 9/3/16.
 */

var s = require("../../structures"),
    DoublyLinkedList = s.DoublyLinkedList;

/**
 * @author Anthony Pizzimenti
 * @desc Transforms the provided array to a doubly linked list.
 * @param {Array} a Array to be transformed.
 * @returns {DoublyLinkedList} New doubly-linked list populated with items in the provided array.\
 * @private
 */
function instantiateDoublyLinkedList (a) {
    
    var d = new DoublyLinkedList(),
        i;
    
    for (i = 0; i < a.length; i++) {
        
        if (i === 0) {
            d.push(a[i]);
        } else {
            d.unshift(a[i]);
        }
    }
    
    return d;
}

module.exports = instantiateDoublyLinkedList;
