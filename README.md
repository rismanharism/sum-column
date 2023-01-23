# sum-column
Sum Column

[INSTRUCTION]
program sumRow adalah program yang dapat menjumlahkan angka per column
pada array multidimensi. masing - masing row bisa memiliki jumlah row yang
berbeda

[EXAMPLE]
input: 
[
     [5],
     [2,  5, 12, 8],
     [4, 56,  3]
]
cara menjumlahkannya, jumlahkan angka - angka tersebut dengan column yang sama.
maka yang di jumlahkan adalah
column 1 => 5 + 2 + 4 = 11
column 2 => 5 + 56 = 61
column 3 => 12 + 3 = 15
column 4 => 8 = 8
hasil masing - masing penjumlahan disetiap column di masukkan kedalam 1 array

output :

    [11, 61, 15, 8 ]
contoh test case

console.log(sumColumn(
    [
     [5],
     [2,  5, 12, 8],
     [4, 56,  3]
    ]
)) // [11, 61, 15, 8 ]
console.log(sumColumn(
   [
    [3,5,12,6],
    [1,7,4,3,8,4,9],
    [8,5,8],
    [4,7,8,2,8,3]
   ]
)) 
// [16, 24, 32, 11, 16, 7, 9]