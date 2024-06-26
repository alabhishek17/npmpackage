function Add(a,b){
    return a+b;
}
// console.log(Add(a+b));
function Subtraction(a,b){
    return a-b;
}

function Multipication(a,b){
    return a*b;
}

function Deviation(a,b){
    return a/b;
}

function Modules(a,b){
    return a%b;
}

function BinarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const guess = arr[mid];
  
      if (guess === target) {
        return mid;
      } else if (guess < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1; // Element not found
  }

  function Sorts(arr){
    return arr.sort()
  }
// let arr1=[1,2,6,4,1,0]
// console.log(Sorts( arr1));

module.exports={Add, Multipication, Subtraction, Deviation, Modules , BinarySearch,Sorts}