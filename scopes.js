//Scopes basically means where we can use variables.

//Global Scope as it is declared at the root can use it from anywehre
var number = 10;

function calc(){
    // will return 10 as number is global
    return number;
}
//can only be used inside the function 
function calcl(){
    // Local Scope
    var newNumber = 20;
    return newNumber;
}


document.body.innerHTML= newNumber;