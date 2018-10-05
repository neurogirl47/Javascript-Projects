//simple function that reverses a string

var reverseSentence = function(sentence) {
  var sentenceArr = sentence.split("")
  sentenceArr.reverse()
  var sentenceRev = sentenceArr.join("")

  return sentenceRev
}

reverseSentence('This is an awesome sentence!')
