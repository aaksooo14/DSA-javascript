function rearrangeElement(nums) {  //[0->3 1->-2 2->1 3->-5 4->2 5->-4]
    let result = []
    let positive = 0
    let negative = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result[positive] = nums[i]
            positive += 2
        } else {
            result[negative] = nums[i]
            negative += 2
        }
    }
    return result

}
console.log(rearrangeElement([3, 1, -2, -5, 2, -4]))