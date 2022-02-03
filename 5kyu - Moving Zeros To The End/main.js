// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
  let result = [];
  let zeroes = 0;
  arr.map((each) => {
    if (each !== 0) {
      result.push(each);
    } else zeroes++;
  });
  for (var i = 0; i < zeroes; i++) {
    result.push(0);
  }
  return result;
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
