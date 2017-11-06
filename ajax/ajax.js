function reqListener() {
    bringData(function(jsonData) {
        for (let i=0; i < 3; i++) {
            var d = document.createElement('div');
            d.innerHTML = this.responseText;
            document.getElementById('cars').appendChild(d);
        }
    })
}

var oReq = new XMLHttpRequest();

oReq.addEventListener("load", reqListener);

oReq.open("GET", "templates/car.html");

oReq.send();


function bringData(callback) {
    function reqListenerData() {
        callback(JSON.parse(this.responseText));
    }


    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListenerData);
    oReq.open("GET", "data/data.json");
    oReq.send();

}

