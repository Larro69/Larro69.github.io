Proceso raiz_cuadrada_Y_raiz_cubica
	
	
	Definir numero1,raiz_cuadrada,raiz_cubica Como Real
	
	Escribir Sin Saltar "Ingresa el valor de numero:";
    Leer numero1;
    Si numero1>=0 Entonces
        raiz_cuadrada <- RC(numero1);
        
    SiNo
        raiz_cuadrada <- RC(-numero1);
      
        Escribir "Raíces imaginarias";
    FinSi
	
    Escribir "Valor de raiz cuadrada: ", raiz_cuadrada;

	

FinProceso
