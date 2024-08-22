let x = 20;

if (x < 80) {
  sendNotification();
} else {
  console.log("your question is wrong");
}

if (x > 10) {
  console.log("accessed");
} else if (x > 3) {
  console.log("user");
} else if (x >= 7 && x <= 9) {
  console.log(admin);
} else {
  console.log("not accessed");
}

switch (x) {
  case (x = 10):
    console.log("admin");
    break;

  case (x = 15):
    console.log("user");
    break;

  default:
    console.log("not accessed");
    break;
}


let arr = [1, 2, 3, 4, 5];
let arrNames = ["m", "h", "m", "a", "b"];
let obj = {
  name: "john",
  age: 25,
};
arr.length;
for (let i = 0; i < 5; i++) {
  console.log(arr[i]);
}
console.log(arr);

let num = 10;
while (num > 0) {
  console.log(num);
  num--;
}

function add(t) {
  console.log("coming from function");
}
add();

function print() {
  console.log("print function");
  add();
}
print();
