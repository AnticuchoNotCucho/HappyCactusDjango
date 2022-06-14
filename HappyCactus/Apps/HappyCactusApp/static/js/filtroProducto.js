const productos = [['Img/catalogo/bonsai.jpg', 'paginaBonsai.html', 'Bonsai', 'Plantas', 'Indoor', 4990,1], 
                    ['Img/catalogo/Suculenta.jpg','paginaSuculenta.html', 'Suculenta', 'Plantas', 'Mixto', 10990,2],
                    ['Img/catalogo/enredadera.jpg','paginaEnredadera.html', 'Enredadera', 'Plantas', 'Mixto', 7990,3],
                    ['Img/catalogo/eucaliptus.jpg','paginaEucaliptus.html', 'Eucaliptus Rosa', 'Plantas', 'Indoor', 10990,4],
                    ['Img/catalogo/ficus.jpg','paginaFicus.html', 'Ficus', 'Plantas', 'Indoor', 8890,5],
                    ['Img/catalogo/helecho.jpg','paginaHelecho.html', 'Helecho', 'Plantas', 'Outdoor', 7990,6],
                    ['Img/catalogo/lavanda.jpg','paginaLavanda.html', 'Lavanda', 'Plantas', 'Mixto', 5590,7],
                    ['Img/catalogo/orquidea.jpg','paginaOrquidea.html', 'Orquidea', 'Plantas', 'Mixto', 10990,8],
                    ['Img/catalogo/palmera.jpg','paginaPalmera', 'Palmera', 'Plantas', 'Mixto', 12990,9]];

                    
filtro = document.getElementById('filters')
filtro.addEventListener('click', (target) => {
    if (target.target.id === 'formCheck-5') {
        console.log(target.target.id,target.target)
        productos.forEach(producto => {
            if (producto[4] === 'Indoor') {
                document.getElementById(producto[6]).style.display = 'block'
                
            }
            else {
                document.getElementById(producto[6]).style.display = 'none'
            }
        })
    }
    else if (target.target.id === 'formCheck-6') {
        productos.forEach(producto => {
            if (producto[4] === 'Outdoor') {
                document.getElementById(producto[6]).style.display = 'block'
                
            }
            else {
                document.getElementById(producto[6]).style.display = 'none'
            }
        })
    }
    else if (target.target.id === 'formCheck-7') {
        productos.forEach(producto => {
            if (producto[4] === 'Mixto') {
                document.getElementById(producto[6]).style.display = 'block'
                
            }
            else {
                document.getElementById(producto[6]).style.display = 'none'
            }
        })
    }
    else if (target.target.id === 'formCheck-1' || target.target.id === 'formCheck-2' || target.target.id === 'formCheck-3' || target.target.id === 'formCheck-4') {
        productos.forEach(producto => {
            if (producto[3] === 'Implementos') {
                document.getElementById(producto[6]).style.display = 'block'
                
            }
            else {
                document.getElementById(producto[6]).style.display = 'none'
            }
        })
    }
    
});