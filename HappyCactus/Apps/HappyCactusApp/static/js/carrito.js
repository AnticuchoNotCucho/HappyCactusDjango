window.addEventListener('load', () => {
    valor1 = 5990
    valor2 = 4990
    valor3 = 3990

    precio = document.getElementById('precio')
    precio1 = document.getElementById('precio1')
    precio2 = document.getElementById('precio2')

    planta1 = document.getElementById('number')
    planta2 = document.getElementById('number2')
    planta3 = document.getElementById('number3')

    total = document.getElementById('total')
    total.innerHTML = (valor1 * planta1.value) + (valor2 * planta2.value) + (valor3 * planta3.value) + 2500

    window.addEventListener('change', (target) => {
        if (target.target === planta1 || target.target === planta2 || target.target === planta3) {
            total.innerHTML = '$' + ((valor1 * planta1.value) + (valor2 * planta2.value) + (valor3 * planta3.value) + 2500)
        }

    })
})

