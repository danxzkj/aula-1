let numero = 4
let numero2 = 9
let sinal = "*"
switch(sinal){
    case(sinal = '*'):
    console.log(numero * numero2);
    break;
    case(sinal = '-'):
    console.log(numero - numero2);
    break;
    case(sinal = '+'):
    console.log(numero + numero2);
    break;
    case(sinal = '/'):
    console.log(numero / numero2);
    break;
    default:
        console.log("Não tem esse sinal")
}