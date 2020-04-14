function reverse1(str) {
    return Array.from(str).reverse().join('');
}

function reverse2(str) {
    return Array.from(str).reduce((ac, cu) => ac = cu + ac)
}

function reverse3(str) {
    let reversed = ''
    for(let ch of str){
        reversed = ch + reversed;
    }

    return reversed;
}
