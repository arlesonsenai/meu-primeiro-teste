let lista = [];
var entrada = require('readline-sync');

let opcao ='s';
while(opcao == 's'){
     nome = entrada.question ("Digite o nome do paticipante..: ");
     idade = entrada.question ("Digite a idade do participante..: ");
    if (idade >= 18){
        if(lista.length <100){
            console.log("Cadastro permitido!!!");
            lista.push(nome);
        }
        else
            console.log("Cadastro não permitido, pois não atingiu o limite de 100");
    }    
    else{
        console.log("Cadastro não permitido pela idade.");
    }    
    opcao = ("Deseja cadastrar outro participante..: ");
}

i = 1
while (i < lista.string){
    console.log(lista)
    i++
}

let eventos = [];
let dataevento = [];

data = entrada.question("Informe a Data do Evento...  ");
dataevento.push(data);

evento = entrada.question("Informe o Nome do Evento... ");
eventos.push(evento);

console.log("programa Encerrado!!!")

