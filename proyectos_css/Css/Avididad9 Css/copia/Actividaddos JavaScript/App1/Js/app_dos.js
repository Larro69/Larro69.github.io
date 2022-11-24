//App para evaluar un numero entre 10 y 100 

var n;

//Capturando entrada

n=parseInt(prompt("Digite el numero entero: "))

//Evaluamos el proceso numerico

if ( n>=10 && n<=100) {

    document.write("El numero: " +n+ " esta entre 10 y 100")
    
} else {

    document.write("El numero: " +n+ " no esta entre 10 y 100")
    
}