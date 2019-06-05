
function numToArray(num) {
var  hundreds = Math.floor(num/100)
var  tens = Math.floor((num/10)-hundreds*10)
var  units = num -((hundreds*100)+(tens*10))
  var arr = {"units":units,
  "tens":tens,
  "hundreds":hundreds}
  print(arr)

}
numToArray(759)
