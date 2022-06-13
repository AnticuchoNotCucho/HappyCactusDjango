

const cargarApi = async () => {
    try {
        const respuestaIP = await fetch('https://api.ipdata.co/?api-key=28443de0abfe3b4df7f0493fb787176fae3d522ef24be8a59ca72bf5')
        const datosIP = await respuestaIP.json()
        console.log(datosIP)
        const latitude = datosIP.latitude
        const longitude = datosIP.longitude
        const respuestaWeather = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&lang=sp&appid=a35f3da7a2aaadf6f074eaf209a239b7&units=metric')
        const datosWeather = await respuestaWeather.json()
        console.log(datosWeather)
        const temp_planta = (document.getElementById('temp_planta').innerHTML)
        const temp_actual = (datosWeather.main.temp)
        const humedad = (datosWeather.main.humidity)
        if (temp_actual < temp_planta+5  && temp_actual > temp_planta-5) {
            document.getElementById("mensj").innerHTML = "Se recomienda cultivar este tipo de plantas en temperaturas similares a las actuales"
        }
        else if ((temp_actual > temp_planta+5)) {
            document.getElementById("mensj").innerHTML = "<span style='color: red;'> Se recomienda cultivar este tipo de plantas en temperaturas mas frias que las actuales"
        }
        else if (temp_actual < temp_planta-5) {
            document.getElementById("mensj").innerHTML = "<span style='color: red;'> Se recomienda cultivar este tipo de plantas en temperaturas mas calidas que las actuales"
        }
        const icon = 'http://openweathermap.org/img/wn/' + datosWeather.weather[0].icon + '@2x.png'
        document.getElementById("temp").innerHTML =  Math.round(temp_actual) + "°C"
        document.getElementById("descripcion").innerHTML = "Tiempo actual: " + (datosWeather.weather[0].description).toUpperCase()
        document.getElementById("icon").innerHTML = '<img src="' + icon + '">'
        document.getElementById("templanta").innerHTML =datosWeather.name
        document.getElementById("humedad").innerHTML =  humedad + "%"
        


    } catch (error) {
        console.log(error)
    }
}

cargarApi();
