// let arr = [10, 5, 2, 7, 1, -10]
let arr = [-5, 8, -14, 2, 4, 12]
let k = -5
//[-5, 8, -14, 2, 4] 

function longestSubarray(arr, k) {
    let sum = 0
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum == k) {
            let newArray = arr.splice(0, i + 1)
            return newArray
        }
    }

}

const result = longestSubarray(arr, k)
console.log(result)