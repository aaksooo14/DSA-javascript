
let nums1 = [4, 9, 5]
let nums2 = [9, 4, 9, 8, 4]

//output should be [2,2]

var intersect = function (nums1, nums2) {
    let map = {};
    let result = [];


    for (let num of nums1) {
        map[num] = (map[num] || 0) + 1;
    }


    for (let num of nums2) {
        if (map[num] > 0) {
            result.push(num);
            map[num]--;
        }
    }

    return result;


};

console.log(intersect(nums1, nums2))