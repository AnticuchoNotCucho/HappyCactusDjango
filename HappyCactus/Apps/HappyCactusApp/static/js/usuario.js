window.addEventListener('load', () => {
    nombre = document.getElementById('nombre')
    nombre.innerHTML = '<h1>' + localStorage.getItem('nombre') + " " +localStorage.getItem('apellido')+'</h1>'
})