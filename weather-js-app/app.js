// IIFE - Immediately-invoked function expression 
(function () {
    const key = 'db023f7f7a67fff03ae6f9fb4af32223';
    const refreshIntervalInSeconds = 10;
    let userLocationObject;
    
    // ctors
    function Coordinates(lat, long) {
        this.lat = lat;
        this.long = long;
    }
    
    // Get user location
    navigator.geolocation.getCurrentPosition(function(coords) {
        userLocationObject = coords;
    });
    
    // Elements
    const selectCityElement = document.getElementById('select-city');
    const btnGetWeatherElement = document.getElementById('btn-get-weather');
    const textCityElement = document.getElementById('text-city');
    // End elements


    // Listeners
    selectCityElement.addEventListener('change', function () {
        const value = selectCityElement.value;
        if (value === 'Your location') {
            
        }
        textCityElement.value = value;
    });
    
    

    btnGetWeatherElement.addEventListener('click', function (e) {
        e.preventDefault(); // Dont go to server, thanks.
        
        let city;
        
        if (textCityElement.value === 'Your location') {
            city = new Coordinates(
                userLocationObject.coords.latitude, 
                userLocationObject.coords.longitude
            );
        } else {
            city = textCityElement.value;
        }
        setInterval(function () {
            getWheater(city, key, function (res) {
                console.log(res);

                document.getElementById('weather-title').innerHTML = res.name;
                document.getElementById('weather-fahrenheit').innerHTML = res.main.temp;
                document.getElementById('weather-celsius').innerHTML = convertToC(res.main.temp);
            });
        }, refreshIntervalInSeconds * 1000)

    });
    // End Listeners
}());
