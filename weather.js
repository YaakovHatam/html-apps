/// Returns weather object to callback function
function getWheater(location, key, callback) {
    
    let apiUri;
    
    switch(typeof location) {
        case 'string':
            apiUri = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=imperial`;
            break;
        case 'object':
             apiUri = `http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${key}&units=imperial`;
    }
    
    
    function reqListener () {
        if (typeof callback === 'function')
            callback(JSON.parse(this.responseText));
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", apiUri);
    oReq.send();
}



/*
/// Returns weather object to callback function
function getWheater(city, key, callback) {    
    const apiUri = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;
    function reqListener () {
        if (typeof callback === 'function')
            callback(JSON.parse(this.responseText));
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", apiUri);
    oReq.send();
}
*/