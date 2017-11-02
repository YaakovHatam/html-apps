function multBy(num) {
    var f = function(x) {
        return x*num;
    }
    
    return f;
}

var mult1 = multBy(7);
console.log(mult1(5));

var mult2 = multBy(10);
console.log(mult2(5));
console.log(mult2(15));


// password
function password(userPass) {
    var correctPass = md5(userPass);
    var loginTries = 3;
    
    return function(pass) {
        if (loginTries == 0) {
            return "You are blocked";
        }
        
        if (md5(pass) !== correctPass) {
            loginTries--;
            return "Wrong password";
        } else if (md5(pass) === correctPass) {
            return "correct password";
        }
    }
}