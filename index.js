#!/usr/bin/env node

/**
 * Created by apizzimenti on 4/2/16.
 */

var //chalk = require('chalk'),
    console = require('console');

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
    var indices = [],
        init_index = this.indexOf(value);

    for (var item in this) {
        if (this[item] === 2) {
            indices.push(parseInt(item));
        }
    }

    if (init_index === -1) {

        try {
            throw new Error();
        } catch (e) {
            var stack = e.stack.split('\n'),
                currStack = stack[2].replace(new RegExp('    '), '');

            console.log('ReferenceError: Specified value does not exist\n\t' + currStack);
        }

    } else {

        var amount_gone = 0;

        for (var i = 0; i < indices.length; i++) {
            var index = indices[i] - amount_gone,
                length = this.length;

            for (var j = index; j < length; j++) {
                this[j] = this[j + 1];
            }

            delete this[length - 1];
            this.length = length - 1;
            amount_gone++;
        }
    }
};

module.exports = {
    removeIndex: Array.prototype.removeIndex,
    removeValue: Array.prototype.removeValue
};