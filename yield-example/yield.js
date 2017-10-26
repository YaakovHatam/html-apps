function* h(x) {
    if (x % 10 !== 0)
        yield "Not divided by 10";
    
      if (x % 8 !== 0)
        yield "Not divided by 8";
    /*
    yield 1;
    yield 2;
    */
    
    /*
    for(let i=0; i < 3; i++) {
        yield i;
    }
    */
}

var a = h(10);