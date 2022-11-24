Proceso Promedio_descuentos
	
	Definir prom Como Real;
	
	Escribir ".......................";
	Escribir "        Promedio        ";
	Escribir ".......................";
	Escribir "Digite el promedio del estudiante ";
	
	Leer prom;
	
	Si prom = 1 y prom > 3  Entonces
		
		Escribir "Este estudiante no tiene descuento :c ";
		
	SiNo
		Si prom >= 3 y prom <4 Entonces
			
			Escribir "Este estudiente tiene un 5% de descuento por su promedio";
		SiNo
			Si prom >= 4 y prom < 5 Entonces
				
				
				Escribir "Este estudiante tiene un 10% de descuento por su promedio "
			SiNo
				Si prom== 5 Entonces
					
					
					Escribir "Este estudiante tiene un 20% "
				SiNo
					Escribir "Porfavor digite el promedio del chico "
				Fin Si
			Fin Si
		Fin Si
	Fin Si
	
FinProceso
