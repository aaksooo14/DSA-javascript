let nums = [1, 2, 3]

function containDuplicate() {
    let set = new Set() //{1,2,3}
    for (let num of nums) {
        if (set.has(num)) {
            return true
        }
        else {
            set.add(num)
        }
    }
    return false

}

console.log(containDuplicate(nums))

//Time complexity =>O(n)


//step1-->create a set {}
//step2-->loop
//step3-->check set have num if yes return true
//step else return false
