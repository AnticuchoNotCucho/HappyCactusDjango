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
    
})

    




productos.forEach(producto => {
    lista = document.getElementById('productos')
    lista.innerHTML += `<div class="col-12 col-md-6 col-lg-4" id="`+producto[6]+`">
        <div class="clean-product-item">
        <img class="img-fluid d-block mx-auto"
            src="`+producto[0]+`">
            <div class="image"><a href="#"></a></div>
            <div class="product-name"><a href="`+producto[1]+`" style="color:var(--bs-success);font-size: large">`+producto[2]+`</a></div>
            <div>
                <div class="product-specs">
                    <div class="text-left">
                        <h6>Tipo de producto:<p class="tipoProducto">`+producto[3]+`</p></h6>
                        <h6>Tipo de ambiente:<p class="tipoPlanta">`+producto[4]+`</p></h6>

                    </div>
                </div>
            </div>
            <div class="d-xl-flex align-items-xl-start about">
                <div class="d-inline flex-row rating">
                    <img src="img/star.svg">
                        <img src="img/star.svg">
                            <img src="img/star.svg">
                                <img src="img/star-half-empty.svg" >
                                    <img src="img/star-half-empty.svg" >
                                        <h4 style="color: rgb(50,48,60);font-weight: bold;width: 100px;">
                                        `+producto[5]+`</h4><button
                                                class="btn btn-primary text-center d-flex d-xxl-flex align-items-center align-items-xxl-center"
                                                type="button"
                                                style="background: var(--bs-white);border-color: #9b673c;color: #9b673c;font-size: 16px;width: 173.656px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                    fill="none" stroke-linecap="round" stroke-linejoin="round"
                                                    class="icon icon-tabler icon-tabler-plant"
                                                    style="height: 16px;margin: -2px;">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z">
                                                </path>
                                                <path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3"></path>
                                                <path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3">
                                                </path>
                                                <line x1="12" y1="15" x2="12" y2="9"></line>
                                            </svg>&nbsp;Añadir al carrito&nbsp;</button>
                                    </div>
                                    <div class="price"></div>
                                </div>
                            </div>
                        </div>`

});