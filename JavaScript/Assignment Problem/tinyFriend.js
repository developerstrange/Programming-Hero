function tinyFriend(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < smallest.length) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let nameArr = ["Shifat", "Nafis", "Ahan", "Tanjim"];
let smallName = tinyFriend(nameArr);
console.log("Tiny name among all of them are: ", smallName);