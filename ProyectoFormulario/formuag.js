window. addEventListener('load', ()=> {
    //const form = document.getElementById('formulario')
    const form = document.querySelector('#formulario')
    const usuario = document.getElementById('usuario')
    const email = document.getElementById('email')
    const coment = document.getElementById('coment')
    const phone = document.getElementById('phone')

    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()

    })

    //VALIDACION CAMPO
    const validaCampos = ()=> {
        //capturar los valores ingresados por el usuario
        const usuarioValor = usuario.value.trim() // El trim lo que hace es eliminar los espacios en blanco
        const emailValor = email.value.trim()
        const comentValor = coment.value.trim()
        const phoneValor = phone.value.trim()

    //VALIDACION USUARIO
        if(!usuarioValor){
            console.log('CAMPO VACIO')
            validaFalla(usuario, 'Campo vacio')
        }else{
            validaOk(usuario)
        }   
        
    //VALIDACION CAMPO EMAIL
        if(!emailValor){
            validaFalla(email, 'Campo vacio')
        }else if(!validaEmail (emailValor)){
            validaFalla(email, 'El e-mail no es valido')
        }else{
            validaOk(email)
        }

    //VALIDACION CAMPO COMENTARIO
        
    
        if(!comentValor){
            validaFalla(coment, 'Campo vacio')
        } else if(comentValor.length > 200){
            validaFalla(coment, 'Debe tener  caracteres como minimo')
        } else{
            validaOk(coment)
        }
    
    //VALIDACION CAMPO TELEFONO
        
        if(!phoneValor){
            validaFalla(phone, 'campo vacio')
        } else if(phoneValor.length < 9){
            validaFalla(phone, 'Debe tener 9 digitos como minimo.')
        } else if(!validaPhone (phoneValor)){
            validaFalla(phone, 'Debe contener solo números')
        }else{
            validaOk(phone)
        }
    
       
}
        
    
         /*definicion de variables validaFalla y validaOk  valida phone*/
    const validaFalla = (input, msje) => {
        const formControl = input.parentElement /*La propiedad parent element devuelve el elemento padre del elemento especificado*/
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        /*Añadiremos una clase para pintar de color rojo el input si esta incorrecto y de
        color verde si esta correcto*/

            formControl.className = 'form-control falla'

    }

    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'

    }  

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    const validaPhone = (phone) => {
        return /^[0-9]+$/.test(phone);
    }

    const ingresoUsuario = document.getElementById('usuario');
    document.getElementById('btnEnviar').onclick = function(){
    alert('Hola ' + ingresoUsuario.value +', tu solicitud fue enviada');
}
    

})

 
           
     
       

            
            
        


      
        


