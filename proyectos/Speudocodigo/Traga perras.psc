Proceso sin_titulo
	Definir a,b,c,billetera Como Entero
	a <- azar(1)+1
	b <- azar(1)+1
	c <- azar(1)+1
	billetera <- 0
	jugada <- 15
	Escribir ' Numero 1: ',a,;
	Escribir ' Numero 2: ',b,;
	Escribir ' Numero 3: ',c,;
	Si a=b Y b=c Entonces
		Escribir 'Acabas de ganar 20 '
		billetera <- billetera+20
		Escribir billetera
	SiNo
		Si a=c Entonces
			Escribir ' Acabas de ganar 10 monedas '
			billetera <- billetera+10
			Escribir billetera
		SiNo
			Si b=c Entonces
				Escribir ' Acabas de ganar 10 monedas '
				billetera <- billetera+10
				Escribir billetera
			SiNo
				Si a=b Entonces
					Escribir ' Acabas de ganar 10 monedas '
					billetera <- billetera+10
					Escribir billetera
				SiNo
					Escribir ' PERDISTES!!! '
					billetera <- billetera-jugada
					Escribir billetera
				FinSi
			FinSi
		FinSi
	FinSi
FinProceso
