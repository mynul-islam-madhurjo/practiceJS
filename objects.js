let person = new Object();

person.name = 'Mynul';
person.age = 20;
person.updateAge = function(){
    return ++person.age;
}

// console.log(person.age);
// person.updateAge();
// console.log(person.age);

// Alternate way to get object properties

let person2 = {
    name: 'Mynul',
    age: 20,
    updateAge : function(){
        return ++person2.age;
    }
}

// console.log(person2.age);
// person2.updateAge();
// console.log(person2.age);


////////////////////////////////////////////////////////////////

// Obect Blueprint for class constructors 

function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.updateAge = function(){
        return ++this.age;
    }
}

let newPerson = new Person('Mynul',24,'Male');

console.log(newPerson);