function squareSum(numbers){
    let sum = 0;
    let squared_array = numbers.map(function(num){
      return num*num;
    })
    // console.log(squared_array);
    for (let i = 0; i < squared_array.length;i++)
      {
        sum = sum + squared_array[i];
      }
    return sum;
}

// console.log(squareSum([1, 2, 3]));
