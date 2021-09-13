var my_reslt = document.getElementById("res") ;
/**
 * Problem 2
 * he terms in the Fibonacci sequence whose values do not exceed four million, 
 * find the sum of the even-valued terms.
 */
function euler(){
    let even_val = 4 * Math.pow(10, 6) - 2  ; // 2 terme f1, f2
    let f1 = 1, f2 = 2,fn = 0;
    let res = 2;
     
    do{
        fn =  f1 + f2;
        f1 = f2;
        f2 = fn;
        if(fn%2==0){
            res += fn;
        } 
    }while( fn < even_val )

    return res;
}
my_reslt.innerText = euler();