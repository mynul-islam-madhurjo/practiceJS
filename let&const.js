// function scope and block scope

//Function scope is curly braces around the function and block scope is curly braces around the variable.

// function scope
function scope () {
    var x = 10;
    return x;
}

// Block scope
{ var y = 20}

// Block scope of if statement 
if (true) {
    // Block scope of if statement same for else and loop
    
}
// Note we can acces block scope declared variable but can not acces function scope.
