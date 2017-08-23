/**
 * Created by apizzimenti on 9/2/16.
 */

var _throwError = require("./throwError");

/**
 * @author Anthony Pizzimenti
 * @desc Returns truthy if the provided rray has a member with the specified type.
 * @param {Array} a Array to be searched.
 * @param {string} type Typestring.
 * @param {boolean} [recursive=false] Do you want to search this array recursively?
 * @returns {boolean} Does this array contain the specified member?
 * @memberof methods
 */
function hasType (a, type, recursive) {
    
    _throwError(a);
    this.lastArray = a.splice();
    type = type.toLowerCase();
    
    if (recursive === undefined) {
        recursive = false;
    }
    
    var contains = false,
        i;
    
    for (i = 0; i < a.length; i++) {
        
        if (typeof a[i] === type && !Array.isArray(a[i])) {
            contains = true;
            break;
        }
        
        if (Array.isArray(a[i]) && recursive) {
            contains = this.hasType(a[i], type, recursive);
            
            if (contains) {
                break;
            }
            
        } else if (Array.isArray(a[i]) && !recursive && type.toLowerCase() === "array") {
            contains = true;
            break;
        }
        
    }
    
    return contains;
}

module.exports = hasType;
