/* evento load: Definición de manejadores de eventos mediante Javascript */
/*Referenciar elementos en este caso al formulario y cada uno de los input*/
window. addEventListener('load', ()=> {
    //const form = document.getElementById('formulario')
    const form = document.querySelector('#formulario')
    const usuario = document.getElementById('usuario')
    const email = document.getElementById('email')
    const pass = document.getElementById('pass')
    const passConfirma = document.getElementById('passConfirma')

    /*capturar evento submit para nuestro formulario y prevenir el envio del formulario sin la informacion solicitada*/
    /*Prevent default: prevenimos el comportamiento por defecto que realiza la pagina una vez que desencademos el evento submit
    Lo bueno de esto es que se pueden realizar todas las validaciones y controles, enseñandolos en la pagina donde se esta trabajando, 
    hasta que se cumplan y recien ahi desencadenamos este evento */
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()

    })

    //VALIDACION CAMPO USUARIO
    const validaCampos = ()=> {
        //capturar los valores ingresados por el usuario
        const usuarioValor = usuario.value.trim() // El trim lo que hace es eliminar los espacios en blanco
        const emailValor = email.value.trim()
        const passValor = pass.value.trim()
        const passConfirmaValor = passConfirma.value.trim()

        /*Primera comprobacion: Que el usuario ingrese algun dato, que no deje espacios*/
        if(!usuarioValor){
            console.log('CAMPO VACIO')
            validaFalla(usuario, 'Campo vacio')
        }else{
            validaOk(usuario)
        } /*El simbolo de note (!) note logico, devuelve falsos y su unico operando se puede convertir a true
        de lo contrario devuelve true
        
        /**/
        
        /* OTRA MANERA DE HACERLO: if(usuarioValor === ''){
            console.log('CAMPO VACIO')
            validaFalla(usuario, 'Campo vacio') Metodo

        } el === sirve para comparar el valor de ddos objetos sin forzar la conversion automatica de tipos
        else{
            validaOk(usuario)
        } */

         /*OTRA MANERA DE HACERLO: Operador ternario

        (!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)*/    


    //VALIDACION CAMPO EMAIL
        if(!emailValor){
            validaFalla(email, 'Campo vacio')
        }else if(!validaEmail (emailValor)){
            validaFalla(email, 'El e-mail no es valido')
        }else{
            validaOk(email)
        }

    //VALIDACION CAMPO CONTRASEÑA
        const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/
    
        if(!passValor){
            validaFalla(pass, 'Campo vacio')
        } else if(passValor.length < 8){
            validaFalla(pass, 'Debe tener 8 caracteres como minimo')
        } else if(!passValor.match(er)){
            validaFalla(pass, 'Debe tener al menos una may., y una min y un num.')
        } else{
            validaOk(pass)
        }
    //El metodo match se utiliza para obtener todas las ocurrencias de una expresion regular dentro de una
     
     //VALIDACION CAMPO CONFIRMACION DE CONTRASEÑA
        if(!passConfirmaValor){
            validaFalla(passConfirma, 'Confirme su contraseña')
        } else if(passValor !== passConfirmaValor) {
            validaFalla(passConfirma, 'No coincide la contraseña')
        } else{
            validaOk(passConfirma)
        }
    }
        
    
         /*definicion de variables validaFalla y validaOk*/
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

})
           
           
       

            
            
        


      
        


