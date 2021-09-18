var result = document.getElementById("res") ;
/**
 * Problem 5
 * 
 *  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? 
 */
var limit = 20;

function euler(){
    let res = 1;

    while( ! divided( res ) ){
        res++;
    }    
    return res;
}

result.innerText = euler();

function divided(nb){
    // nb  is evenly divisible by all of the numbers from 1 to limit
    let valid = false;
    for(let i=2; i < limit; i++){
        if( nb % i != 0)
                return false;
    }
    return true;
}

