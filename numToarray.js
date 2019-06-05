
var units = 0
var tens = 0
var hundreds = 0
function numToArray(num) {
  hundreds = Math.floor(num/100)
  tens = (num/10)-hundreds*10
  units = num -((hundreds*100)+(tens*10))
  var arr = {"units":units,"tens":tens,"hundreds":hundreds}
  print(arr)

}
numToArray(759)
