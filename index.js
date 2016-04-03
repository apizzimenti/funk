/**
 * Created by apizzimenti on 4/2/16.
 */

var chalk = require('chalk');

Array.prototype.removeIndex = function (index) {
    var length = this.length;

    if (index > length) {

        try {
            throw new Error();
        } catch (e) {
            var stack = e.stack.split('\n'),
                currStack = stack[2].replace(new RegExp('    '), '');

            console.log(chalk.red('Error: Index out of bounds\n\t' + currStack));
        }

    } else {

        for (var i = index; i < length - 1; i++) {
            this[i] = this[i + 1];
        }

        delete this[length - 1];
        this.length = length - 1;

    }
};

Array.prototype.removeValue = function (value) {
    var index = this.indexOf(value),
        length = this.length;

    if (index === -1) {

        try {
            throw new Error();
        } catch (e) {
            var stack = e.stack.split('\n'),
                currStack = stack[2].replace(new RegExp('    '), '');

            console.log(chalk.red('ReferenceError: Specified value does not exist\n\t' + currStack));
        }

    } else {

        for (var i = index; i < length - 1; i++) {
            this[i] = this[i + 1];
        }

        delete this[length - 1];
        this.length = length - 1;

    }
};

module.exports = {
    removeIndex: Array.prototype.removeIndex,
    removeValue: Array.prototype.removeValue
};