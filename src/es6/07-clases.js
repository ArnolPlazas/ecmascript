// declarando
//class user {};

// instancia de una clase
//const newUser = new user();

class User{
    //constructor
    constructor(){
        console.log('New User!');
    }

    //metodos
    greeting(){
        return 'Hello!'
    }
}

const arnol = new User()
console.log(arnol.greeting());

const camila = new User()
console.log(camila.greeting());

// this
class User2{
    //constructor
    constructor(name){
        this.name = name;
    }

    //metodos
    speak(){
        return 'Hello';
    }
    
    
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new User2('Ana');
console.log(ana.greeting());


class User3 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

   //metodos
    speak(){
    return 'Hello';
    }

    greeting(){
    return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }

    set uAge(n){
        this.age = n;
    }
}

const mathieu = new User3('Mathieu', 2);
console.log(mathieu.uAge);
console.log(mathieu.uAge = 3);
