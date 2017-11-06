console.log(this);
console.log(window);


var a = {
    key: this.name
    
}

var b = a;
console.log(b);
delete a.key;
console.log(b);

function constructorFunc(key) {
    this.key;
}

var obj1 = new constructorFunc('k');