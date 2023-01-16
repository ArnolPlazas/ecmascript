// enahced object literals
function newUser(user, age, country, uId) {
    return{
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('arnol10', 32, 'CO', 1));