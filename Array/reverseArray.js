let arr = [1, 2, 3, 4, 5];

function reverseArray(arr) {

    let data = []
    for (let i = arr.length - 1; i >= 0; i--) {
        data.push(arr[i])
    }
    return data
}

const result = reverseArray(arr);
console.log(result)