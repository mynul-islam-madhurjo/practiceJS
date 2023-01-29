function calculate(){
    let x = parseInt(document.querySelector('#fvalue').value);
    let y = parseInt(document.querySelector('#lvalue').value);
    let z = document.querySelector('#option').value;
    let result;
    
    if (z == 'add'){
        result = x + y;
    }else if(z == 'sub'){
        result = x - y;
    }else if (z == 'div'){
        result = x / y;
    }else if(z == 'mul'){
        result = x * y;
    }
    document.querySelector('#result').innerHTML = result;
}

