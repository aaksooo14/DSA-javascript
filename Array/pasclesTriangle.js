var pasclesTriangle = function (numRows) {
    const triangle = []
    if (numRows == 0) return []
    let firstrow = [1]
    triangle.push(firstrow)
    if (numRows == 1) return triangle
    for (let i = 1; i < numRows; i++) {
        let prevRow = triangle[i - 1] //1
        let row = []
        row.push(1)  //for first
        for (let j = 1; j < i; j++) {
            let element = prevRow[j - 1] + prevRow[j]
            row.push(element)
        }
        row.push(1)
        triangle.push(row)
    }
    return triangle

};

console.log(pasclesTriangle(5))

// const triangle = []
//     if (numRows == 0) return []
//     const firstRow = [1]
//     triangle.push(firstRow)
//     if (numRows == 1) return triangle
//     for (let i = 1; i < numRows; i++) {
//         const prevRow = triangle[i - 1]
//         const row = []
//         row.push(1)
//         for (let j = 1; j < i; j++) {
//             const element = prevRow[j - 1] + prevRow[j]
//             row.push(element)
//         }
//         row.push(1)
//         triangle.push(row)
//     }

//     return triangle