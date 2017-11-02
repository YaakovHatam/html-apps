// Caching

var cache = {};
cache.clearCache = function(cssSelector) {
    delete cache[cssSelector];
}

function getElements(cssSelector) {
    let elements;
    
    if (cache[cssSelector]) {
        console.log('from cache');
        elements = cache[cssSelector];
    }
    else {
        console.log('from DOM');
        elements = document.querySelectorAll(cssSelector);
        cache[cssSelector] = elements;
    }
    
  return elements;
}


console.log(getElements('.item')); // 208

let d = document.createElement('div');
d.className = 'item';
document.body.appendChild(d);
console.log('div added');
console.log(getElements('.item')); // 209 expected

cache.clearCache('.item');

console.log(getElements('.item'));
