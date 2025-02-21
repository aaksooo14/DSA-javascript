let num = "52";
//nums=52
// output="1"

function largestOddNumber(num) {


    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            return num.slice(0, i + 1)
        }
    }
    return ""

}

const result = largestOddNumber(num)
console.log(result)
