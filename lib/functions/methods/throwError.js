
/**
 * @author Anthony Pizzimenti
 * @description Typechecks the first parameter of a given function.
 * @param {Array} a First parameter.
 * @throws TypeError
 * @returns {undefined}
 */
function _throwError (a) {
    if (!Array.isArray(a)) {
        throw new TypeError("First parameter is not of type Array.");
    }
}

module.exports = _throwError;
