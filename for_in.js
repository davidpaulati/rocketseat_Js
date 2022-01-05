//for...in

let person = {
    name: 'David',
    age: 30,
    weight: 69
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}
