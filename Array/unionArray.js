let a = [-7, 8]
let b = [-8, -3, 8]

// -8 -7 -3 8

function unionArray(a, b) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        if (!arr.includes(a[i])) {
            arr.push(a[i])
        }
    }
    for (let j = 0; j < b.length; j++) {
        if (!arr.includes(b[j])) {
            arr.push(b[j])
        }
    }
    return arr.sort((a, b) => a - b)
}
const result = unionArray(a, b)
console.log(result)

//node unionArray