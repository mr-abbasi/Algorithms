function palindrome1(str) {
    const reversed = reverse(str);

    return reversed === str;
 }

function reverse(str) {
    return Array.from(str).reduce((ac, cu) => cu + ac, '');
}

function palindrome2(str) {
    return Array.from(str).every((ch, idx, array) => ch === array[array.length - idx - 1]);
}
