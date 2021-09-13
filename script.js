
var my_reslt = document.getElementById("res") ;
/**
 * Problem 1
 * The sum of all the multiples of 3 or 5 below 1000.
 */
function euler(){
    let _below = 1000;
     let sum = 0;
     for (let i = 1; i < _below; i++) {
        if(i%3==0 || i%5==0)
                sum += i;
      }

    return sum;
}
my_reslt.innerText = euler();



