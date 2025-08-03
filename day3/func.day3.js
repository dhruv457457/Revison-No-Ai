function showMessage(){
    alert('hello ');
 }
// Function starting with…

// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.
// Examples of such names:
function checkAge(age){
   return (age >18) ? true : confirm('Did parents allow you?');
}
function checkAgeOr(age){
    return age>18 || confirm('Did parents allow you?');
}

if(  checkAgeOr(20)==1){
alert("yo");
}


function calcPow(x,n){
    if(n<0){
      return 0;
    }
    let o=x;
    return calcPow(o*x,n-1)
}
alert(calcPow(3,3));

function poww(x,n){
    let z=x;
    while((n-1)!=0){
        x*=z;
        n--;
    }
    alert(x);
}
poww(1,100);

/// arrow func


let sum =(x,r)=> x+r;
alert(sum(3,4));