/**
 * Created by apizzimenti on 9/2/16.
 */

var s = require("../../structures"),
    LinkedList = s.LinkedList;

/**
 * @author Anthony Pizzimenti
 * @desc Converts an array into a singly linked list.
 * @param {Array} a  Array to be transformed.
 * @returns {LinkedList} New linked list populated with items in the provided array.
 * @private
 */
function instantiateLinkedList (a) {
    
    var s = new LinkedList(),
        i;
    
    for (i = 0; i < a.length; i++) {
        
        if (i === 0) {
            s.push(a[i]);
        } else {
            s.push(a[i]);
        }
    }
    
    return s;
}

module.exports = instantiateLinkedList;
