/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function (numRows) {
    let final = [];
    for (let i = 0; i < numRows; i++) {
        final[i] = [];
        final[i][0] = final[i][i] = 1;
        for (let j = 1; j < i; j++) {
            final[i][j] = final[i - 1][j] + final[i - 1][j - 1];
        }
    }
    return final;
};