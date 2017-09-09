// arrays are simple ordered lists of values
let arr = [ 4, 2, 6 ];
arr.push(7);
console.log(arr); // [ 4, 2, 6, 7 ]

// sets only allow one of each unique value
let set = new Set([ 5, 2, 8, 5 ]);
console.log(set); // Set { 5, 2, 8 }
set.add(3);
set.add(8);
console.log(set); // Set { 5, 2, 8, 3 }
console.log(set.size); // 4