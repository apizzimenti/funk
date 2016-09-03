"use strict";

/**
 * Created by apizzimenti on 9/1/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Parent object for all funk methods. Each time a method is run, funk keeps a reference to the last array it was
 * fed before it was modified. Constructing <code>f</code> (i.e. <code>new f()</code>) is not required. You can simply
 * use f.&lt;method&gt; without instantiation.
 *
 * @property lastArray {Array} Reference to the last array modified.
 * @property throwError {function} Typechecks parameters.
 *
 * @static
 * @class f
 * @type {{}}
 */

var f = {
    lastArray: [],
    throwError: function throwError(a) {
        if (!Array.isArray(a)) {
            throw new Error("First parameter is not of type Array.");
        }
    }
};
