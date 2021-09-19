var result = document.getElementById("res") ;
/**
 * Problem 6
 * 
 *   Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.  
 */
let limit = 100;
function euler(){
    let res = squqres_of_the_sum() - sum_of_the_squares() ;

    return res;
}

result.innerText = euler();

function sum_of_the_squares(){
    let sum = 0;
    for(let i=1; i <= limit ; i++)
            sum = sum + Math.pow(i, 2);
    return sum;
}

function squqres_of_the_sum(){
    let sum = 0;
    for(let i=1; i <= limit ; i++)
            sum = sum + i;
    return Math.pow(sum, 2);
}

