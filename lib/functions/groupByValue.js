/**
 * Created by apizzimenti on 9/3/16.
 */

f.groupByValue = function (a, check) {
    
    if (check === undefined) {
        check = false;
    }
    
    this.throwError(a);
    
    if (a.length > 23) {
        a = quicksort(a, 0, a.length - 1);
    } else {
        a = a.sort();
    }
    
    var refArray = [],
        lastArray = [],
        refIndex = 0;
    
    for (var i = 0; i < lastArray.length - 1; i++) {
        
        if (a[i] === a[i + 1]) {
            refArray.push(a[i]);
        } else {
            refArray.push(a[i]);
            a[refIndex] = refArray;
            refArray = [];
            refIndex++;
        }
    }
    
    a.length -= (a.length - refIndex);
    
    return a;
};
