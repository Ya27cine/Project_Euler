var my_reslt = document.getElementById("res") ;
/**
 * Problem 3
 * 
 *  The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */
var limit = 600851475143;
function euler(){

  let res = 0;
  for(let i=3; i < Math.sqrt( limit ); i+=2){
    if(isPrime(i) )
        if(limit % i == 0)
                res = i;
  }

    return res;
}

my_reslt.innerText = euler();

function isPrime(p){

    if(p%2==0 || p%3==0) return false;
    for(let i=5; i <= Math.sqrt(p); i+=2){
        if(p%i==0)
             return false;
    }
    return true;
}