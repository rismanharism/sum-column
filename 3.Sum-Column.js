function sumColumn(arr) {
  let result = [];
  let maxLength = 0;
  let counter = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }

  for (let i = 0; i < maxLength; i++) {
    let totalCol = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][counter] !== undefined) {
        totalCol += arr[j][counter];
      }
    }
    result.push(totalCol);
    counter++;
  }

  return result;
}

// Instructor Version
// function sumColumn(arr) {
// 	// Tulis kode disini
// 	let result = [];
// 	for (let i = 0; i < arr.length; i++) {
// 	    for (let j = 0; j < arr[i].length; j++) {
// 	        if (result[j] !== undefined) {
// 	            result[j] += arr[i][j];
// 	        } else {
// 	            result[j] = arr[i][j];
// 	        }
// 	    }
// 	}
// 	return result;
// }

console.log(sumColumn(
  [
   [5],
   [2,  5, 12, 8],
   [4, 56,  3]
  ]
)) // [11, 61, 15, 8 ]