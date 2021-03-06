/**
 * Created by apizzimenti on 11/12/16.
 */

/**
 * @author Anthony Pizzimenti
 * @desc Tests equality between two comparable objects with weak or strong typechecking. Mostly to be used
 * internally.
 * @param {*} val_1 First value.
 * @param {*} val_2 Second value.
 * @param {boolean} check Strong or weak typechecking?
 * @returns {boolean} Are these values equal?
 * @memberof methods
 */
function equalWithCheck (val_1, val_2, check) {
    
    if (!check) {
        return val_1 == val_2;
    } else {
        return val_1 === val_2;
    }
}

module.exports = equalWithCheck;
