// Ввод данных
let age = prompt("Сколько вам лет?");

//Логика
// Ветвление if, логический оператор И
age = parseInt(age)
if (age > 18 && age < 99) {
    console.log("Вы совершеннолетний")
} else {
    console.log("Извините, вам сюда нельзя")
}

// Вариант со switch case
switch (true) {
    case age >= 18 && age < 99:
        console.log("Вы совершеннолетний");
        break;
    case age < 18:
        console.log("Извините, вам сюда нельзя");
        break;
}

//Вывод данных
console.log(age) // вывод данных в консоль

// Калькулятор индекса массы тела
var name = prompt("Как вас зовут?")
alert(`Привет, ${name}`)

var weight = parseInt(prompt("Введите ваш вес: "))
var height = parseInt(prompt("Введите ваш рост: ")) / 100

var result = weight / height ** 2
alert(result)
if (result < 16) {
    alert("Выраженный дефицит массы")
}
if (result >= 16 && result <= 18.5) {
    alert("Недостаточная масса тела")
}
if (result >= 25 && result <= 30) {
    alert("Норма")
}
if (result > 30) {
    alert("Ожирение")
}



var name = prompt("Как вас зовут?")
alert("Привет" + name)
// console.log("Привет" + name) 
my_name = 'Bob'
age = 5
message = `Меня зовут $(my_name) и мне $(age) лет` 

function app() {
    let age = document.getElementById("ageElement").value
    document.getElementById("result").innerText = "Вам " + age + " лет";
    document.getElementById("ageElement").value = '';
}
