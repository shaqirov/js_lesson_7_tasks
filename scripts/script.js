// 1. Создайте цикл while, который будет выводить в консоль все нечётные числа от 1 до 30
let num = 0
while (num < 30) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    num++
}


// 2. У нас есть массив с элементами 1, 2, 115, 4, 58, 5 ,7 ,99. 
//    С помощью цикла for и оператора if нужно проверить есть ли в массиве число со значением, 
//    равным = 4. Если есть - надо вывести окошко с сообщением = 'ЕСТЬ!!!'

let elements = [1, 2, 115, 4, 58, 5 ,7 ,99]
for (i = 0; i < elements.length; i++) {
    if (elements[i] === 4) {
        alert("ЕСТЬ!!!")
    }
}


// 3. Создайте массив с числами. Перебирая элементы созданного массива с помощью 
//    цикла выведите только те элементы массива, которые больше нуля и меньше 10.

let numbers = [-1, 4, 12, 99, 2, 9, -10, 10, 5, 7]
for(i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] < 10) {
        console.log(numbers[i]);
    }
}