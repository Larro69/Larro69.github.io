function validaCampos() {
    //valida el campo de usuario

    var formulario;

    formulario = document.formUser

    if (formulario.user.value == "") {
        //valida si el campo esta vacio
        document.getElementById("validaUser").innerHTML = "Porfavor escribe el usario";
        //Se psiciona en el campo user
        formulario.user.focus();
        return false;

    } else {
        document.getElementById("validaUser").innerHTML = ""
        
    }

    if (formulario.email.value == "") {

        document.getElementById("validaEmail").innerHTML = "Porfavor escribir su correo bien";
    
        formulario.email.focus();
        
        return false;  
       
    
    } else {
    
        document.getElementById("validaEmail").innerHTML = ""
    
        
    
    }

    if (formulario.password.value == "") {

        document.getElementById("validaPassword").innerHTML = "Porfavor escribir su contraseña";
    
        formulario.password.focus();
        
        return false;  
       
    
    } else {
    
        document.getElementById("validaPassword").innerHTML = ""
    
        
    
    }

    if (formulario.passwordc.value == "") {

        document.getElementById("validaPasswordc").innerHTML = "Porfavor escribir bien su contraseña";
    
        formulario.passwordc.focus();
        
        return false;  
       
    
    } else {
    
        document.getElementById("validaPasswordc").innerHTML = ""
    
        
    
    }
    
    
    
    formulario.submit();

}

