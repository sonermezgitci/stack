class Solution {
    constructor(nums) {
        this.nums = nums;
        this.random = [...nums];
    }

    reset() {
        return this.nums;
    }

    shuffle() {
        for (let i = 0; i < this.random.length; i++) {
            const randIdx = Math.floor(Math.random() * this.random.length);
            this.swap(i, randIdx);
        }
        return this.random;
    }

    swap(i, j) {
        [this.random[i], this.random[j]] = [this.random[j], this.random[i]]
    }
}
