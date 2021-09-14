var result = document.getElementById("res") ;
/**
 * Problem 4
 * 
 *  Find the largest palindrome made from the product of two 3-digit numbers. 
 */
var limit = 1000;
function euler(){

   let t1 =0, t2 = 0, res = 0;

   for(let i=0; i < limit; i++)
        for(let j=0; j <= i; j++)
            // ind the largest palindrome made from the product of two 3-digit numbers.
            if( isPalindrome(i*j) && (i+j > t1+t2) )
                res = i*j;                        
    return res;
}

result.innerText = euler();


function isPalindrome(nb){
    // A palindromic number reads the same both ways.
    let invr_nb = 0;
    let copy_nb = nb;

    do{
        let r   =  copy_nb % 10;
        invr_nb =  invr_nb*10 + r;
        copy_nb =  Math.floor( copy_nb/10 );

    } while( copy_nb > 0 )

    if( invr_nb == nb ) return true;
    return false;
}