// simple object
var obj1 = {
    key1: ['value1', 'value2'],
    key2: 'value'
}

// object access properties
obj1.key1
obj1["key1"]


// for in loop - loop over object properties(keys)
for (let prop in obj1) {
    console.log(prop); //key1
    console.log(obj1[prop]); //value
    
    if (Array.isArray(obj1[prop])) { // if the value is array
        for (let i=0; i < obj1[prop].length; i++) {
            console.log(obj1[prop][i]);
        }
    }
}



var obj2 = {
    key1: ['value1', 'value2'],
    key2: 'value'
}


// define set/get property
Object.defineProperty(obj2, 'key2', {
    get: function() { 
        if (Array.isArray(this.value)) {
            return this.value.join(', ');
        }
        return this.value;
    },
    set: function(newValue) { this.value = newValue; },
});

// set: obj2.key2 = [1,2,3]
// get: console.log(obj2.key2)