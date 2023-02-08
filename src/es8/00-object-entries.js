// devuelve una matriz de pares propios de la propiedad enumerable.
const countries = {
    MX: 'Mexico',
    CO: 'Colombia',
    CL: 'Chile',
    PE: 'Peru'
}
// Trasformar el objeto en un array de arrays
console.log(Object.entries(countries));