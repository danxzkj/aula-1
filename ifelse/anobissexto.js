let ano = 2080;
if(ano % 400 == 0){
    console.log("Mané o ano é bissexto");
} else if (ano % 200 == 0){
    console.log("Mané não é ano bissexto não");
} else if (ano % 4 == 0){
    console.log("Mané o ano é bissexto");
} else {
    console.log("O ano não é bissexto");
}