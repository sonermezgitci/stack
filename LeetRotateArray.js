

var rotate = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.splice(nums.length - 1, 1)[0])
    }
    return nums;
};
