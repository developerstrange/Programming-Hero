var student1 = {id:121, phone:12433, name:"Abir Ahmed"};
var student2 = {id:131, phone:23213, name:"Kabila Mia"};

student1.phone = 232123;
console.log(student1)
var phoneNum = "phone";
student1[phoneNum] = 213123;
console.log(student1)
student1["phone"] = 234222222;
console.log(student1)

console.log(student2.phone)