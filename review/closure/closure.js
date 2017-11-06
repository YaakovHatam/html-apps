function setFontSize() {
    const unit = 'px';
    return function(size) {
        document.body.style.fontSize = size + unit;
    }
}

var fontSize = setFontSize();

document.getElementById('font14').addEventListener('click', function() {
    fontSize(14);
})

document.getElementById('font16').addEventListener('click', function() {
   fontSize(16);
})

document.getElementById('font18').addEventListener('click', function() {
   fontSize(18);
})