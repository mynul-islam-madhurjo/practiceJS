// ways to run js functions
function greetings(){
    var result = 'Hi Mynul';
    console.log(result);
}

//greetings();

function greetings(){
    var result = 'Hi Mynul';
    return result;
}
//console.log(greetings());

function greetings(name){
    var result = 'Hi ' + name;
    return result;
}
//console.log(greetings('Mynul'));

// Anonymous functions

var greetings = function(){
    var result = 'Hi Mynul';
    console.log(result);
}

//greetings();

var greetings = function(name){
    var result = 'Hi '+ name;
    return result;
}
//console.log(greetings("Mynul"));

// Immediately invoked function expression 

(function (){
    var result = 'Hi Mynul';
    console.log(result);
}());


