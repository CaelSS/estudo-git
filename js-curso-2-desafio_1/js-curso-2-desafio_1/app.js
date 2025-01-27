let titulo = document.querySelector("h1");
titulo.innerHTML = ("hora do desafio, Aléqui");


function clickConsole(){
    console.log("botao apertado");
}

function clickAlert(){
    alert("i <3 JS");
}

function clickPrompt(){
    let cidade = prompt("digite nome da cidade");
    alert(`Estive em ${cidade} e lembrei de tu`);
    
}

function clickSoma(){
    let a = Number(prompt("digite um numero"));
    let b = Number(prompt("digite outro"));
    let soma = a + b;
    alert(`A soma é de ${soma}`);

}