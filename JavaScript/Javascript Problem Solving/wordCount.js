var sentence = "Hi, I am Nafis Wadud Ansari. I am studying at Daffodil International University.";

var wordCount = 0;
for (var i = 0; i, sentence.length; i++) {
  var char = sentence[i];
  if (char === " " && sentence[i - 1] !== " ") {
    wordCount++;
  }
}

wordCount++;
console.log("Total word in the given sentence is: ", wordCount);