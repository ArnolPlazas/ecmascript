function newUser(name, age, country) {
    var name = name || 'Arnol';
    var age = age || 32;
    var country = country || 'CO';
    console.log({name, age, country});
}

newUser();
newUser('Fabian', 33, 'ND');



function newAdmin(name = 'Maite', age = 1, country = 'MX') {
    var name = name;
    var age = age;
    var country = country;
    console.log({name, age, country});
}

newAdmin();
newAdmin('Camila', 33, 'CO');