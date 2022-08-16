function eighthEx(month = prompt('Введи число от 1 до 12')) {
if (month == 1 || month == 2 || month == 12) {
    alert('Зима');
} else if (month >= 3 && month <= 5) {
    alert('Весна');
} else if (month >= 6 && month <= 8) {
    alert('Лето');
} else if (month >= 9 &&  month <= 11) {
    alert('Осень');
} else {
    alert('Бро, не то число');}
}


let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
function whichFruits(fruits) {
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);
    let firstFruit = prompt('Какой фрукт был первым?');
    let lastFruit = prompt('Какой фрукт был последним?');
    if (firstFruit === fruits[0] && lastFruit === fruits[6]) {
        alert('Поздравляю, ты угадал оба фрукта!');
    } else if (firstFruit != fruits[0] && lastFruit === fruits[6] || firstFruit === fruits[0] && lastFruit != fruits[6]) {
        alert('Ты был близок к победе!');
    } else {
        alert('Совсем мимо, попробуй еще раз');
    }
}


const puzzle = () => {
    const state = {
        riddle: "Отгадайте загадку: Висит груша, нельзя скушать. Есть 3 попытки.",
        answer: 'Лампочка',
        prompt: ['Подсказка: Горит на потолке', 'Подсказка: Стеклянная'],
    }
    let userAnswer = prompt(state.riddle);
    let count = 0;
    for(let i = 0; i < 2; i++) {
        if (userAnswer === state.answer) {
            alert("Все верно");
            break; 
        } else {
            alert('Ошибка, попробуй еще раз');
            userAnswer = prompt(state.prompt[count]);
            count ++;
        }
        if(count === 2) {
            alert("Попыток больше нет"); 
        }
    }
}
