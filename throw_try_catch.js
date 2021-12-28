//throw = lançar

function sayMyName(name = ''){
    if(name === ''){
        throw "Nome é necessário"
    }
    
}

//try = tentar ... catch = pegar

try {
    sayMyName()
} catch(e) {
    console.log(e)
}
console.log('Após try catch')