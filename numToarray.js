function numToArray(num) {
var  hundreds = Math.floor(num/100)
var  tens = Math.floor((num/10)-hundreds10)
var  units = num -((hundreds100)+(tens*10))
  var arr = {"units":units,
  "tens":tens,
  "hundreds":hundreds}
  return arr

}
console.log(numToArray(123))
