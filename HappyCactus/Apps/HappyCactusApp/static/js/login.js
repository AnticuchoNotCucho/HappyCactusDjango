window.addEventListener('load', () => {
    const form = document.getElementById('formulario')
    const usuario = document.getElementById('iniciousuario')
    const pass = document.getElementById('iniciopass');

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
        
        if (validaCampos()) {
                form.submit();
            }
        })
        
    const validaCampos = () => {
        const usuarioValor = usuario.value.trim()
        const passValor = pass.value


        if (!usuarioValor) {
            validaFalla(usuario, 'El usuario no debe estar en blanco')
        }
        else {
            validaOk(usuario)
        }
    
        if (!passValor) {
            validaFalla(pass, 'La contraseña no debe estar en blanco')
        }
        else {
            validaOk(pass)
        }
        if (usuarioValor && passValor) {
            return true
        }
        
    }

    const validaFalla = (input, mensaje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = mensaje   //innerText es para que se vea el texto
    formControl.className = 'form-control falla'
    }
    const validaOk = (input) => {
    const formControl = input.parentElement
    formControl.className = 'form-control ok'
    }

})
