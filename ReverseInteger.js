/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x <= 0) return 0
    const reversed = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x + 1)

    return reversed


};
