let square = [
	[1, 2, 7],
	[4, 5, 4],
	[7, 1, 2]
]
dw
let n = square.length

function rows() {
for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
        for (let i = 0; i < n ; i++)
        let row1 = square.row[i]
        console.log(row1)
    }}}

rows()