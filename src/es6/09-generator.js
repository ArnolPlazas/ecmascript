function* iterate(array){
    for (let value of array){
        yield value
    }
}


const it = iterate(['Arnol', 'Camila', 'Silvana', 'Mathieu', 'Maite']);

console.log(it.next().value); // Arnol
console.log(it.next().value); // Camila
console.log(it.next().value); // Silvana
console.log(it.next().value); // Mathieu
console.log(it.next().value); // Maite
console.log(it.next().value); // undefined