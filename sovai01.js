var entrada = require('readline-sync');

do{
    idade = entrada.question("Informe sua idade..: ");
    if (idade >= 16){
        console.log("permitido jogar FF");
    }else{
        console.log("não permitido jogar FF");
    }
    opcao = entrada.question("Deseja Continuar..: s/n..: ");
} while(opcao == 's') 