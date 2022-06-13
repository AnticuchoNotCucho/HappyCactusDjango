window.addEventListener('load', () => {
    const form = document.getElementById('formulario')
    const nombre = document.getElementById('Nombre')
    const precio = document.getElementById('precio')
    const cantidad = document.getElementById('stock')
    const descripcion = document.getElementById('descripcion')
    const imagen = document.getElementById('imagen')
    const tipoProducto = document.getElementById('tipoProducto')
    const tipoPlanta = document.getElementById('tipoPlanta')
    const fecha = document.getElementById('fecha')
    const temperatura = document.getElementById('Temperatura')


    tipoProducto.addEventListener('change', (e) => {
        if (e.target.value === '5') {
            tipoPlanta.parentElement.style.display = 'block'
            temperatura.parentElement.style.display = 'block'
        }
        else {
            tipoPlanta.parentElement.style.display = 'none'
            temperatura.parentElement.style.display = 'none'
        }
    })
    
    imagen.addEventListener('change', (e) => {
        if (e.target.files[0].size > 2000000) {
            alert('La imagen debe ser menor a 2MB')
            e.target.value = ''
        }
        else if(e.target.files[0].type !== 'image/jpeg' && e.target.files[0].type !== 'image/png'){
            alert('La imagen debe ser una imagen jpeg o png')
            e.target.value = ''
        }
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    const validaCampos = () => {
        const nombreValor = nombre.value.trim()
        const descripcionValor = descripcion.value.trim()
        const fecha_Actual = new Date()
        const fechaIngresada = new Date(fecha.value)
        const temperaturaValor = temperatura.value.trim()

    if (!nombreValor) {
        validaFalla(nombre, 'El nombre no debe estar en blanco')
    }
    else {
        validaOk(nombre)
    }
    if (!precio.value) {
        validaFalla(precio, 'El precio no debe estar en blanco')
    }
    else if (precio.value < 1 || precio.value > 1000000) {
        validaFalla(precio, 'El precio no debe ser menor a 1 ni mayor a 1.000.000')
    }
    else if (isNaN(precio.value)) {
        validaFalla(precio, 'El precio debe ser un numero')
    }
    else {
        validaOk(precio)

    }
    if (!cantidad.value) {
        validaFalla(cantidad, 'La cantidad no debe estar en blanco')
    }
    else if (cantidad.value < 1 || cantidad.value > 100) {
        validaFalla(cantidad, 'La cantidad no debe ser menor a 1 ni mayor a 100')
    }
    else if (isNaN(cantidad.value)) {
        validaFalla(cantidad, 'La cantidad debe ser un numero')
    }
    else {
        validaOk(cantidad)
    }
    if (!descripcionValor) {
        validaFalla(descripcion, 'La descripcion no debe estar en blanco')
    }
    else if (descripcionValor.length <= 4) {
        validaFalla(descripcion, 'La descripcion debe ser mayor a 4 caracteres')
    }
    else {
        validaOk(descripcion)
    }

    if (!imagen.value) {
        validaFalla(imagen, 'Debe ingresar imagen')
    }
    else {
        validaOk(imagen)
    }
    if (tipoProducto.value === "0") {
        validaFalla(tipoProducto, 'Debe seleccionar un tipo de producto')
    }
    else {
        validaOk(tipoProducto)
    }
    if (tipoPlanta.value === "0") {
        validaFalla(tipoPlanta, 'Debe seleccionar un tipo de planta')
    }
    else {
        validaOk(tipoPlanta)
    }
    if (!fecha.value) {
        validaFalla(fecha, 'Debe ingresar una fecha')
    }
    else if (fechaIngresada.getTime() > fecha_Actual.getTime()) {
        validaFalla(fecha, 'La fecha no debe ser mayor a la fecha actual')
    }
    else {
        validaOk(fecha)
    }
    if (!temperatura.value) {
        validaFalla(temperatura, 'Debe ingresar una temperatura')
    }
    else if (temperaturaValor < 1 || temperaturaValor > 100) {
        validaFalla(temperatura, 'La temperatura debe ser mayor a 1 y menor a 100')
    }
    else if (isNaN(temperaturaValor)) {
        validaFalla(temperatura, 'La temperatura debe ser un numero')
    }
    else {
        validaOk(temperatura)
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


//    const validaTipo = () => {
//    const tipoProducto = document.getElementById('tipoProducto')
//    if (tipoProducto.value === "5") {
//        document.getElementById('tipoPlanta').style.display = 'block'
//    }
 //   else {
 //       document.getElementById('tipoPlanta').style.display = 'none'
 //   }
//}