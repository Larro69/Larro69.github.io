var a,b;

var i;

a=parseInt(prompt("Coloque su numero donde quiere comenzar"));

b=parseInt(prompt("Colorque su numero final "));

for( i=a; i<=b; i++){

    if ( i%2==0 ) {

        document.write(i+"&nbsp;");
    
}
}