var calculateTip = function(total, percent){

  var tip = total * (percent/100)

  return tip.toFixed(2)
}

calculateTip(44.25, 18)
