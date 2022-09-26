// Find the smallest integer in the array
//Given [34, 15, 88, 2] your solution will return 2

let arr = [34, 15, 88, 2]
// const min = Math.min.apply(Math,arr)
// console.log(min)
  

const min2 = arr.reduce((a,c)=> Math.min(a,c))

// console.log(min2)

const min3= Math.min(...arr)
console.log(min3)
