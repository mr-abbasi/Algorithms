// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


function reverseInt(n) {
    const sign = Math.sign(n);

    return sign * parseInt(reverse(n.toString()));
}

function reverse(st) {
    return Array.from(st).reverse().join('');
}
