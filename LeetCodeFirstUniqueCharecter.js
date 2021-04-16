var firstUniqChar = function (s) {
    var map = {};
    var result = -1

    for (char of s) {
        if (map[char] === undefined) {
            map[char] = 1; // not clear 
        } else {
            map[char]++;

        }
    }

    for (let i = 0; i < s.length; i++) {
        var char = s.charAt(i); // not clear
        if (map[char] === 1) { // not clear
            return i;
        }
    }
    return -1
};