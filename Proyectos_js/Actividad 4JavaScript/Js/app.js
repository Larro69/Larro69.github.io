var p,e,imc;

p=parseFloat(prompt(" Porfavor ponga su peso en Kg  "));

e=parseFloat(prompt(" Porfavor ponga su estatura  M "));


imc=p/(e*e);

if (imc<18.5) {

    document.write(" Bajo de peso  <img src='img/bajo_peso.png' height='50px' width='50px'> <br><br> ");

    document.write(" -Causas- <br><br> ")   

    document.write(" Tienes bajo peso porque no comes lo necesario para tener un peso conciderable  <br><br> ")

    document.write(" -Recomendaciones- <br><br> ")

    document.write(" Come con más frecuencia Si tienes bajo peso, puedes sentirte satisfecho más rápido. Consume de cinco a seis comidas más pequeñas durante el día en lugar de dos o tres comidas grandes. ")

    
    
} else  if (imc>=18.5 && imc<=24.9 ){
     
    document.write("  Peso normal   <img src='img/peso_normal.png' height='50px' width='50px'> <br><br>" );  //<img src='img/fiebre.png' height='30px'>"

    document.write(" -Causas- <br><br> ")

    document.write(" Tienes un peso normal bien debes mantenerte en este peso  <br><br> ")

    document.write(" -Recomendaciones- <br><br> ")

    document.write(" Puedes comer un poco mas de proteinas para tener mucho mejor tu salud.   ")
    
}
 else  if (imc>=25 && imc<=29.9 ){
    
    document.write(" Sobre Peso   <img src='img/sobre_peso.png' height='50px' width='50px'> <br><br>  ");

    document.write(" -Causas- <br><br> ")

    document.write(" La causa fundamental del sobrepeso es un desequilibrio energético entre calorías consumidas y gastadas. A nivel mundial ha ocurrido lo siguiente:  un aumento en la ingesta de alimentos de alto contenido calórico que son ricos en grasa y un descenso en la actividad física debido a la naturaleza cada vez más sedentaria de muchas formas de trabajo, los nuevos modos de transporte y la creciente urbanización  <br><br> ");

    document.write(" -Recomendaciones- <br><br> ")

    document.write(" Limitar el consumo de alimentos que sean ricos en azúcares y grasas. Puedes comprobarlo mirando la etiqueta de los productos que comes. Por ejemplo, algunos cereales son ricos en fibra, pero también en azúcares.  ")
    
}
else  if (imc>=30 && imc<=34.9 ){
    
    document.write(" Obesidad I  <img src='img/obesidad1.png' height='50px' width='50px'> <br><br>");

    document.write(" -Causas- <br><br> ")

    document.write(" obesidad tipo 1 cuando el índice de masa corporal (IMC) se sitúa entre 30 y 34,9. Esto supone que su proporción de masa corporal respecto a la altura es un 30-35% superior al punto medio. Se trata del grado más bajo de obesidad, pero no eso no significa que esté exento de riesgos <br><br> ");

    document.write(" -Recomendaciones- <br><br> ")

    document.write(" Realizar actividad física frecuente: unos 60 minutos por día para los jóvenes y 150 minutos semanales para los adultos. En el caso de que haya un alto grado de obesidad, se recomienda comenzar por caminar 30 minutos al día a paso ligero.   ")
    
}
 else  if (imc>=35 && imc<=39.9 ){
    
    document.write(" Obsidad II <img src='img/obesidad_dos.png' height='50px' width='50px'> <br><br> ");

    document.write(" -Causas- <br><br> ")

    document.write(" la obesidad grado 2 no se asocia con un riesgo aumentado de cáncer de próstata en hombres de mediana edad. Sin embargo, se necesitan más investigaciones para saber si la obesidad de grado 2 sí está asociada con enfermedad de alto grado, es decir, con el estadío más avanzado del cáncer. <br><br> ");

    document.write(" -Recomendaciones- <br><br> ")

    document.write(" Comer varias veces al día fruta y verdura, así como legumbres, cereales integrales y frutos secos.")
    
}
 else  if (imc>=40 && imc<=49.9 ){
    
    document.write("  Obesidad III  <img src='img/obesidad3.png' height='50px' width='50px'> <br><br> ");

    document.write(" -Causas- <br><br> ")

    document.write(" La ingesta de productos con alto valor calórico, asociado a un estilo de vida sedentario y poco sano suele ser el principal culpable del cambio en el peso de la persona. <br><br> ");

    document.write(" -Recomendaciones- <br><br> ")

    document.write(" Comer varias veces al día fruta y verdura, así como legumbres, cereales integrales y frutos secos.")

    
    
}

 else  if (imc>=50 ){
    
    document.write(" Obesidad IV  <img src='img/obesidad_IV.png' height='50px' width='50px'> <br><br> ");

    document.write(" -Causas- <br><br> ")

    document.write(" Obesidad grado 4 (obesidad extrema): Si el IMC es igual o mayor a 50. El cuarto grado de obesidad no está incluido en todas las clasificaciones, sino que muchas lo engloban en la obesidad mórbida. <br><br> ");

    document.write(" -Recomendaciones- <br><br> ")

    document.write(" Es posible que necesites trabajar con un equipo de profesionales de la salud, incluido un dietista, un consejero de comportamiento o un especialista en obesidad, para ayudarte a entender y hacer cambios en tus hábitos alimenticios y de actividad.")
    
} else{

    document.write("Porfavor digite bien sus pesos ")

}




