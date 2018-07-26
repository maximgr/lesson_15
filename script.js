var name = "Как вас зовут?";
var age = "Сколько Вам лет?";
var subscr = "Вы подписаны на рассылку?";

var userName = prompt(name);
var userAge = prompt(age);


console.log(userName);
console.log(userAge);


if (userAge >= 18) {
  var userSubscr = prompt(subscr);
  console.log(userSubscr);
  if (userSubscr == "да", "Да") {
    alert("Доступ разрешен!");
    console.log("Вы допущены!");
  } else {}
} else {
  alert("Доступ запрещен!");
  console.log("Вы НЕ допущены!");
}
