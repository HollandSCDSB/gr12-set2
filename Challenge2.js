let square = [
    [1, 2, 2, 5],
    [4, 5, 4, 3],
    [7, 3, 4, 2],
    [6, 2, 1, 7]
]

let n = square.length // n represents the square's length/width

// if (x == 1 || x == 2) {
//     console.log("x is either 1 or 2")
// }

let top = square[0]
let topSum = 0
let left = 0
let right = 0
let bottom = square[n-1]
let bottomSum = 0
let topLeft = top[0]
let topRight = top[n-1]
let bottomLeft = bottom[0]
let bottomRight = bottom[n-1]

for (let i = 0; i < n; i++){
    topSum += top[i]
    bottomSum += bottom[i]
    left += square[i][0]
    right += square[i][n-1]
}

let perimeter = top + left + right + bottom - topLeft - topRight - bottomLeft - bottomRight

// console.log(perimeter)

console.log(topSum)
console.log(bottomSum)
console.log(left)
console.log(right)
console.log(topLeft)
console.log()

// let square = [
// 	[1, 2, 7],
// 	[4, 5, 1],
// 	[7, 1, 2]
// ]

// let n = square.length
// let result = true

// for (let row = 0; row < n; row++) {
// 	let total = 0
// 	for (let col = 0; col < n; col++) {
// 		total += square[row][col]
// 	}
// 	console.log(`Row ${row+1} adds to ${total}.`)
// 	if (total != 10)
// 		result = false
// }

// if (result == true) {
// 	console.log("All rows add to 10.")
// }
// else {
// 	console.log("All rows do not add to 10.")
// }
