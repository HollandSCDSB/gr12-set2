let square = [
    [1, 2, 2, 5],
    [4, 5, 4, 3],
    [7, 3, 4, 2],
    [6, 2, 1, 7]
]

let n = square.length // n represents the square's length/width

// ***I didn't see the answer since I was gone for the first half of the class. This was almost fully complete Thursday I just had to tweak a couple things and properly sync the changes.

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
let perimeter = 0

for (let i = 0; i < n; i++){
    topSum += top[i]
    bottomSum += bottom[i]
    left += square[i][0]
    right += square[i][n-1]
}

perimeter += topSum + left + right + bottomSum - topLeft - topRight - bottomLeft - bottomRight

// console.log(perimeter)

console.log(topSum)
console.log(bottomSum)
console.log(left)
console.log(right)
console.log(topLeft)
console.log(topRight)
console.log(bottomLeft)
console.log(bottomRight)
console.log(`The sum of the perimeter is ${perimeter}`)