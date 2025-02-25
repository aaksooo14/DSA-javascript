var productExceptSelf = function (nums) {
    const left = []
    const right = []
    const result = []
    left[0] = 1;
    right[nums.length - 1] = 1;
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1]
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1]
    }

    for (let i = 0; i < nums.length; i++) {
        let answer = left[i] * right[i]
        result.push(answer)
    }
    return result
};

console.log(productExceptSelf([1, 2, 3, 4]))
//-->
// [1 2 3 4]
// left=[1,_,_,_,_]