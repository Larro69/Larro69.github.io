var ing,gan;

ing=parseInt(prompt("Escriba el valor de sus ingresos: "));

gan=parseInt (prompt("Escriba el valor de sus gancias "))

if (ing>gan) {

    document.write(" Sus gasto de ganancia   <img src='img/ingresos.png' height='25px'> "   );
    
} else {

    document.write(" Sus gasto es perdida  <img src='img/disminucion' height='25px'> "   );

    
}