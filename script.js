var result = document.getElementById("res") ;
/**
 * Problem 9
 * 
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc. 
 * 
*/

const limit = 1000;

function euler(){
    let res = 0;
    for (let a = 1; a < limit; a++) {
        for (let b = a; b < limit; b++) {
            for (let c = b; c < limit; c++) {
                if( isPythagorean(a, b, c) )
                    if(a+b+c == 1000){
                        // one Pythagorean triplet for which a + b + c = 1000.
                        res = a*b*c;
                    }
            }
        }
    }
    return res;
}

result.innerText = euler();


function isPythagorean(a, b, c){
    return
         (Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2) )? true : false;
}