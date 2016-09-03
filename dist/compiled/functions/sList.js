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
