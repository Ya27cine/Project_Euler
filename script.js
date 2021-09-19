var result = document.getElementById("res") ;
/**
 * Problem 6
 * 
 *   Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.  
 */
let target = 10001;
function euler(){
    let term = 2,res = 0; 
    
    for(let i = 4; true; i++ ){
        if(isPrime(i)){
            term++;
            if(term == target){
                res = i;
                break;
            }
        }
    }
    return res;
}

result.innerText = euler();

function isPrime(p){

    if(p%2==0 || p%3==0) return false;
    for(let i=5; i <= Math.sqrt(p); i+=2){
        if(p%i==0)
             return false;
    }
    return true;
}

