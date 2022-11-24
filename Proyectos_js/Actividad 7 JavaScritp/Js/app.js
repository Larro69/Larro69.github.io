function sumar() {

var x, y, suma;

x=document.getElementById("n1").value;
y=document.getElementById("n2").value;

suma=parseInt(x)+parseInt(y);

document.getElementById("resultado_suma").innerHTML = "la suma es: " +suma

}

function restar() {

    var x, y, resta;
    
    x=document.getElementById("n1").value;
    y=document.getElementById("n2").value;
    
    resta=parseInt(x)-parseInt(y);
    
    document.getElementById("resultado_resta").innerHTML = "la resta es: " +resta
    
}

function multiplicacion() {

    var x, y, multi;
    
    x=document.getElementById("n1").value;
    y=document.getElementById("n2").value;
    
    multi=parseInt(x)*parseInt(y);
    
    document.getElementById("resultado_multiplicacion").innerHTML = "la multiplicacion es: " +multi
    
}


function divicion() {

    var x, y, divi;
    
    x=document.getElementById("n1").value;
    y=document.getElementById("n2").value;
    
    divi=parseInt(x)/parseInt(y);
    
    document.getElementById("resultado_divicion").innerHTML = "la divicion es: " +divi
    
}

// function sumar(){

//     var x,y,res;

//  x=parseInt( document.getElementById("n1").value);

//  y=parseInt( document.getElementById("n2").value);


//      res=x+y

//   document.getElementById('res').value=res;




// function restar(){

//     var x,y,res;

//  x=parseInt( document.getElementById("n1").value);

//  y=parseInt( document.getElementById("n2").value);


//      res=x-y

//   document.getElementById('res').value=res;

