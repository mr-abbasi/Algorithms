function factorial1(n) {
    if (n === 1) {
        return 1;
    }
    
    return n * factorial1(n - 1);
}

function factorial2(n) {
    let fact = n;
    while (n > 1) {
        fact *= --n;
    }

    return fact;
}
