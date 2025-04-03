let nota = 9;
switch(nota){
    case(nota >= 9 && nota <= 10):
    console.log("TIROU A PARABENS!!!!");
    break;
    case(nota >= 7 && nota <= 8):
    console.log("TIROU B ARRASOU");
    break;
    case(nota >= 5 && nota <= 6):
    console.log("É tirou C da pra recuperar");
    break;
    case(nota >= 3 && nota <= 4):
    console.log("Infelizmente acho que não tem salvação");
    break;
    case(nota >= 0 && nota <=2):
    console.log("Burrice mané");
    break;
    default:
        console.log("Não tem esse numero ai não")
}