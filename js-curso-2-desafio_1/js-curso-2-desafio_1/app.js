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

function clickSomaa(){
    let x = Number(prompt("Fala um numero ai, meu patrão"));
    let y = Number(prompt("digite outro, meu brother"));
    let soma = x + y;
    alert(`A soma é de ${soma}. Ta pobre`);

} 