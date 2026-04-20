function reverseSpeech(sentence) {
  let reverse = "";
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    reverse = char + reverse;
  }

  return reverse;
}

let speech = "Hello, Where are u going?";

let reversedSpeech = reverseSpeech(speech);
console.log(reversedSpeech)




/*

Assignment Problems
1. Feet to Mile conversion -- feetToMile
2. Calculate the need of wood to make chair, table and bed ---- woodCalculator
3. per feet 1000 bricks needed. How much brick needed for 40th floor where first 10 are 15 feet, second 20 are 12 feet, third 10 are 10feet --- brickCalculator 
4. find the small name --- tinyFriend

*/