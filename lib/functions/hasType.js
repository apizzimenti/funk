/**
 * Created by apizzimenti on 9/2/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Returns truthy if the provided array has a member with the specified type.
 *
 * @param a {*[]} Array to be searched.
 * @param type {String} Typestring.
 * @param [recursive=false] {boolean} Do you want to search this list recursively?
 *
 * @this f
 *
 * @returns {boolean}
 *
 * @memberOf f
 */

f.hasType = function (a, type, recursive) {
    
    this.throwError(a);
    this.lastArray = a.splice();
    
    if (recursive === undefined) {
        recursive = false;
    }
    
    var contains = false;
    
    for (var i = 0; i < a.length; i++) {
        
        if (typeof(a[i]) === type && !Array.isArray(a[i])) {
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
};
