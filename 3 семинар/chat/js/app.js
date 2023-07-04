var name = prompt("Как вас зовут?")
alert("Привет" + name)
// console.log("Привет" + name)  сообщение выводиттся в консоли
my_name = 'Bob'
age = 5
message = `Меня зовут $(my_name) и мне $(age) лет` 

function app() {
    let age = document.getElementById("ageElement").value
    document.getElementById("result").innerText = "Вам " + age + " лет";
    document.getElementById("ageElement").value = '';
}
