function cookieModule() {
    
    function setCookie(key, value) {
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 1000*60;
        now.setTime(expireTime);
        
        // format:  'Wed, 31 Oct 2012 08:50:17 GMT';
        document.cookie = key+'='+value+';expires='+now.toGMTString()+';path=/';
    }
    
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }
    
    return {
        setCookie: setCookie,
        getCookie: getCookie
    }
}

var c = cookieModule();
