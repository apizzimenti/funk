/**
 * @namespace methods
 */

var c = require("./clean"),
    cb = require("./containsBlank"),
    e = require("./equalWithCheck"),
    g = require("./group"),
    gbv = require("./groupByValue"),
    h = require("./hasType"),
    ri = require("./removeIndex"),
    rv = require("./removeValue");

module.exports = {
    clean: c,
    containsBlank: cb,
    equalWithCheck: e,
    group: g,
    groupByValue: gbv,
    hasType: h,
    removeIndex: ri,
    removeValue: rv
};
