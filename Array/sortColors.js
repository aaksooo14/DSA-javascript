
let nums = [2, 0, 2, 1, 1, 0]
//Output-->[0,0,1,1,2,2]

var sortColors = function (nums) {
    let left = 0;
    let right = nums.length - 1
    let index = 0;
    while (index <= right) {
        if (nums[index] == 2) {
            [nums[index], nums[right]] = [nums[right], nums[index]]
            right--;
        } else if (nums[index] == 0) {
            [nums[index], nums[left]] = [nums[left], nums[index]]
            index++;
            left++
        } else {
            index++
        }
    }
    return nums


};

console.log(sortColors(nums))

//other approach .sort()