function findMax(numbers){
  var max = 0;
  for (x = 0; x < numbers.length; x++){
    if(numbers[x] > max){
      max = numbers[x];
    }
  }
}