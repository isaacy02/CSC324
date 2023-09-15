//Isaac Young
//Chapter 4

//Sum and Range
function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
    } else {
      for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
  }
  
  function sum(array) {
    let tot = 0;
    for (let value of array) {
      tot += value;
    }
    return tot;
  }
  
  console.log(range(1, 10))
  console.log(range(5, 2, -1));
  console.log(sum(range(1, 10)));


//Reversing an array
function revArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function revArray2(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(revArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
revArray2(arrayValue);
console.log(arrayValue);