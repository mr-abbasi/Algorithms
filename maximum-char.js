// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar1(str) {
    let max_chat, max_count = 0;
    for (let char of str) {
        let count = 0;
        for (let char2 of str) {
            if (char === char2) {
                count++;
            }
        }
        if (count > max_count) {
            max_chat = char;
            max_count = count;
        }
    }

    return max_chat;
}


function maxChar2(str) {
    const charMap = {};
    for (const char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    let maximumValue = 0;
    let maximumChar;
    for (const prop in charMap) {
        if (charMap[prop] > maximumValue) {
            maximumValue = charMap[prop];
            maximumChar = prop;
        }
    }

    return maximumChar;

}

function maxChar3(str) {
    const charMap = new Map();
    for (const char of str) {
        charMap.set(char, (charMap.get(char)) + 1 || 1);
    }

    const maxValue = Math.max(...charMap.values());
    for (let key of charMap.keys()) {
        if (charMap.get(key) === maxValue) {
            return key;
        }
    }
}
