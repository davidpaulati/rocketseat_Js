//Manipulando Arrays

//Criar array com construtor

let myArray = new Array('a', 'b', 'c');
console.log(myArray);

//Contar elementos de um array
console.log([
    "a",
    {type: "array"},
    function(){return "alo"},
].length)

//Transformar uma cadeia de caracteres em elementos de um array
let word = "manipulação";
console.log(Array.from(word))