const sumar =  (num1,num2)=>{
    return parseInt(num1)+parseInt(num2);
}
const restar =  (num1,num2)=>{
    return parseInt(num1)-parseInt(num2);
}
const dividir =  (num1,num2)=>{
    return parseInt(num1)/parseInt(num2);
}
const multiplicar =  (num1,num2)=>{
    return parseInt(num1)*parseInt(num2);
}
alert("¿Qué operacion deseas realizar?");
operacion = prompt("1.Suma 2.Restar 3.Division 4.Producto");
if(operacion==1){
    let numero1=prompt("Primer numero para sumar.");
    let numero2 =prompt("Segundo numero para sumar.");
    resultado =sumar(numero1,numero2);
    alert("Tu resultado es: "+resultado);
}
else if(operacion==2){
    let numero1=prompt("Primer numero para sumar.");
    let numero2 =prompt("Segundo numero para sumar.");
    resultado =restar(numero1,numero2);
    alert("Tu resultado es: "+resultado);
}
else if(operacion==3){
    let numero1=prompt("Primer numero para sumar.");
    let numero2 =prompt("Segundo numero para sumar.");
    resultado =dividir(numero1,numero2);
    alert("Tu resultado es: "+resultado);
}
else if(operacion==4){
    let numero1=prompt("Primer numero para sumar.");
    let numero2 =prompt("Segundo numero para sumar.");
    resultado =multiplicar(numero1,numero2);
    alert("Tu resultado es: "+resultado);
}
else{
    alert("Opacion incorrecta");
}
