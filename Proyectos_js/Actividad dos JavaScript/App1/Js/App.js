//Aplicacion para evaluar la fiebre de una persona 

var temp;

//Capturar los datos de entrada 

temp=parseFloat(prompt("Ingrese sutemparatura en grados °C "));

//proceso para evaluar fiebre

if (temp>=38) {

    document.write("La temperatura es: "+temp+ "°C Indica Fiebre <img src='img/fiebre.png' height='30px'> "   );
    
} else {

    document.write("La temperatura  "+temp+"°C Indica sin Fiebre  ")
    
}