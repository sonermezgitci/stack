/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    // var oneBit = 0;
    // var twoBit =10;
    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === 0) {
            return true
        } else if (bits[i] == 10) {
            return false
        }
    }

};