
window.addEventListener('load', () => {
    
    const form = document.getElementById('formulario') 
    const nombre = document.getElementById('nombreUsuario')
    const apellido = document.getElementById('apUsuario')
    const usuario = document.getElementById('usuario')
    const email = document.getElementById('email')
    const pass = document.getElementById('pass')
    const passConfirma = document.getElementById('passConfirma')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (validaCampos()) {
        console.log(validaCampos())
        localStorage.clear()
        localStorage.setItem('nombre', nombre.value)
        localStorage.setItem('apellido', apellido.value)
        localStorage.setItem('usuario', usuario.value)
        localStorage.setItem('email', email.value)
        localStorage.setItem('pass', SHA1(pass.value))
        localStorage.setItem('passConfirma', SHA1(passConfirma.value))
        form.submit();
        window.location.href = 'login.html'
    }
    else {
        console.log(validaCampos())

        console.log(localStorage.getItem('nombre'))
        console.log(localStorage.getItem('apellido'))
        console.log(localStorage.getItem('usuario'))
        console.log(localStorage.getItem('email'))
        console.log(localStorage.getItem('pass'))
        console.log(localStorage.getItem('passConfirma'))
        console.log('no paso')
    }
 })
    const validaCampos = () => { 
        
        const nombreValor = nombre.value.trim()
        const apellidoValor = apellido.value.trim()
        const usuarioValor = usuario.value.trim()
        const emailValor = email.value.trim()
        const passValor = pass.value
        const passConfirmaValor = passConfirma.value;
    //validar nombre

    if (!nombreValor) {
        validaFalla(nombre, 'El nombre no debe estar en blanco')
    }
    
    else if (nombreValor.length < 3) {
        validaFalla(nombre, 'El nombre debe contener al menos 3 caracteres')
    }
    else if (!validaNombre(nombreValor)) {
        validaFalla(nombre, 'El nombre solo debe contener letras')
    }
    else {
        validaOk(nombre)
    }

    //validar apellido
    if (!apellidoValor) {
        validaFalla(apellido, 'El apellido no debe estar en blanco')
    }
    else if (apellidoValor.length < 3) {
        validaFalla(apellido, 'El apellido debe contener al menos 3 caracteres')
    }

    else if (!validaAp(apellidoValor)) {
        validaFalla(apellido, 'El apellido solo debe contener letras')
    }
    else {
        validaOk(apellido)
    }

    //validar usuario
    if(!usuarioValor){
        validaFalla(usuario,'El usuario esta vacio')
    }
    else if(usuarioValor.length < 6){
        validaFalla(usuario,'El usuario debe contener al menos 6 caracteres')
    }
    else if(!validarUsuario(usuarioValor)){
        validaFalla(usuario,'El usuario solo debe contener letras y numeros')
    }
    else{
        validaOk(usuario)
    }

    //validar email
    if(!emailValor){
        validaFalla(email, 'El email esta vacio')
    }else if(!validarEmail(emailValor)){
        validaFalla(email, 'El email no es valido')
    }
    else{
        validaOk(email)
    }
    //validdar pass
    if(!passValor){
        validaFalla(pass, 'La contraseña esta vacia')
    }
    else if(!validarEspacio(passValor)){
        validaFalla(pass, 'La contraseña no debe contener espacios')
    }
    else if(passValor.length < 8){
        validaFalla(pass, 'La contraseña debe tener al menos 8 caracteres')

    }
    else if(!validarPass(passValor)){
        validaFalla(pass, 'La contraseña debe tener al menos una letra mayuscula, una minuscula y un numero')
    }
    
    else{
        validaOk(pass)
    }
    //confirmar pass
    if(!passConfirmaValor){
        validaFalla(passConfirma, 'La confirmacion de contraseña esta vacia')
    }else if(passValor !== passConfirmaValor){
        validaFalla(passConfirma, 'Las contraseñas no coinciden')
    }else{
        validaOk(passConfirma)
    }

    if (nombre.parentElement.classList.contains('falla') || apellido.parentElement.classList.contains('falla') || usuario.parentElement.classList.contains('falla') || email.parentElement.classList.contains('falla') || pass.parentElement.classList.contains('falla') || passConfirma.parentElement.classList.contains('falla')) {
        return false
    }
    else {
        return true
    }
}
// ingresar mensaje si falla
const validaFalla = (input, mensaje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = mensaje

    formControl.className = 'form-control falla'

}
// ingresar mensaje si ok
const validaOk = (input) => {
    const formControl = input.parentElement
    formControl.className = 'form-control ok'
}

const validarEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}
const validarPass = (pass) => {
    const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]/
    return re.test(pass)
}
const validarEspacio = (pass) => {
    const re = /^\S*$/
    return re.test(pass)
}
const validaNombre = (nombre) => {
    const re = /^[a-zA-Z]{3,}$/
    return re.test(nombre)
}
const validaAp = (apellido) => {
    const re = /^[a-zA-Z]{3,}$/
    return re.test(apellido)
}
const validarUsuario = (usuario) => {
    const re = /^[a-zA-Z0-9]{3,}$/
    return re.test(usuario)
}

})



function SHA1(msg) {
    function rotate_left(n,s) {
      var t4 = ( n<<s ) | (n>>>(32-s));
      return t4;
    };
    function lsb_hex(val) {
      var str="";
      var i;
      var vh;
      var vl;
      for( i=0; i<=6; i+=2 ) {
        vh = (val>>>(i*4+4))&0x0f;
        vl = (val>>>(i*4))&0x0f;
        str += vh.toString(16) + vl.toString(16);
      }
      return str;
    };
    function cvt_hex(val) {
      var str="";
      var i;
      var v;
      for( i=7; i>=0; i-- ) {
        v = (val>>>(i*4))&0x0f;
        str += v.toString(16);
      }
      return str;
    };
    function Utf8Encode(string) {
      string = string.replace(/\r\n/g,"\n");
      var utftext = "";
      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
          utftext += String.fromCharCode(c);
        }
        else if((c > 127) && (c < 2048)) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }
      }
      return utftext;
    };
    var blockstart;
    var i, j;
    var W = new Array(80);
    var H0 = 0x67452301;
    var H1 = 0xEFCDAB89;
    var H2 = 0x98BADCFE;
    var H3 = 0x10325476;
    var H4 = 0xC3D2E1F0;
    var A, B, C, D, E;
    var temp;
    msg = Utf8Encode(msg);
    var msg_len = msg.length;
    var word_array = new Array();
    for( i=0; i<msg_len-3; i+=4 ) {
      j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
      msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
      word_array.push( j );
    }
    switch( msg_len % 4 ) {
      case 0:
        i = 0x080000000;
      break;
      case 1:
        i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;
      break;
      case 2:
        i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;
      break;
      case 3:
        i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8  | 0x80;
      break;
    }
    word_array.push( i );
    while( (word_array.length % 16) != 14 ) word_array.push( 0 );
    word_array.push( msg_len>>>29 );
    word_array.push( (msg_len<<3)&0x0ffffffff );
    for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {
      for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
      for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
      A = H0;
      B = H1;
      C = H2;
      D = H3;
      E = H4;
      for( i= 0; i<=19; i++ ) {
        temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
        E = D;
        D = C;
        C = rotate_left(B,30);
        B = A;
        A = temp;
      }
      for( i=20; i<=39; i++ ) {
        temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
        E = D;
        D = C;
        C = rotate_left(B,30);
        B = A;
        A = temp;
      }
      for( i=40; i<=59; i++ ) {
        temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
        E = D;
        D = C;
        C = rotate_left(B,30);
        B = A;
        A = temp;
      }
      for( i=60; i<=79; i++ ) {
        temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
        E = D;
        D = C;
        C = rotate_left(B,30);
        B = A;
        A = temp;
      }
      H0 = (H0 + A) & 0x0ffffffff;
      H1 = (H1 + B) & 0x0ffffffff;
      H2 = (H2 + C) & 0x0ffffffff;
      H3 = (H3 + D) & 0x0ffffffff;
      H4 = (H4 + E) & 0x0ffffffff;
    }
    var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
  
    return temp.toLowerCase();
  }
