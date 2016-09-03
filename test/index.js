/**
 * Created by apizzimenti on 9/2/16.
 */

function test(a) {
    document.getElementById("test").innerText = a;
}

function dump (o, t) {
    var dumped = ``;
    
    for (var p in o) {
        
        if (o.hasOwnProperty(p)) {
            
            if (o[p] != null && typeof(o[p]) === "object") {
                dumped += `${p}: { ${dump(o[p])} }, `;
            } else {
                dumped += `${p}: ${o[p]}, `;
            }
        }
    }
    
    return dumped.slice(0, dumped.length - 2);
}

var testArray = [1, 2, 3, 4, 5, 6],
    list = new dList();

console.dir(f.sList(testArray));
