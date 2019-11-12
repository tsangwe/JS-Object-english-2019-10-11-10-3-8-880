var user = {};
user.name = "John";
user.surname = "Mike";
user.name = "Peter";
delete user.name;


////////////////////////////////////


var fruit = {
apple: 20,
pear: 20,
peach: 10
};
var totalNum = 0;
for (const property in fruit) {
  totalNum += Number(`${fruit[property]}`);
}
console.log(totalNum);
