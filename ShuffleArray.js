
var Solution = function (nums) {
    this.original = nums;
};


Solution.prototype.reset = function () {
    return this.original;
};


Solution.prototype.shuffle = function () {
    let shuffle = this.original.slice(0);

    for (let i = 0; i < this.original.length; ++i) {
        const newPos = Math.floor(Math.random() * (i + 1));
        let tmp = shuffle[i];
        shuffle[i] = shuffle[newPos];
        shuffle[newPos] = tmp;
    }

    return shuffle;
};

