/**
 * Created by apizzimenti on 9/2/16.
 */

function test(a) {
    document.getElementById("test").innerText = a;
}

var testArray = [6, 2, 4, 1, 5, [2, ["3"]], 3];

test(f.hasType(testArray, "object", true));
