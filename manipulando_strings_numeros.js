// Manipulando Strings e Números

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Paralelepípedo";
console.log(word.length);
let number = 1234;
console.log(String(number).length);


//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number2 = 45344545.444443322
console.log(number2.toFixed(2).replace(".",","))


//Transformar letras minúsculas em maiúsculas. Faça o contrario disso também
let word1 = "Programar é muito bacana!";

console.log(word1.toUpperCase());
console.log(word1.toLocaleLowerCase());


//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Olá meu nome é David e tenho xx anos";

let myArray = phrase.split(" ");
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)



//verificar se um texto contém uma palavra vida

let phrase1 = "Eu quero viver uma vida!"
console.log(phrase1.includes("vida"));

