/* 1 Створити масив, довжину та елементи якого задає користувач. 
Потім відсортувати масив за зростанням. Потім видалити елементи з масиву з 2 по 4 (включно). У міру змін виводити вміст масиву на сторінку. */

document.write(`<pre>1) Створити масив, довжину та елементи якого задає користувач. 
Потім відсортувати масив за зростанням. Потім видалити елементи з масиву з 2 по 4 (включно).\nУ міру змін виводити вміст масиву на сторінку.</pre>`);

let userArrayPrompt = prompt('Type some elements for your array: ');
let userArray = userArrayPrompt.split(' ');
let userArrayJoin = userArray.join(', ');

document.write(`<pre>Your array is <p>${userArrayJoin}</p>\nThe length of your array is <p>${userArray.length}</p></pre>`);
document.write(`<pre>-----------------------------------------------------------------------------------</pre>`);

let userSorted = userArray.sort( function(a, b) {
    return a - b;
}).join(', ');
let userSortedArray = userSorted.split(', ');

document.write(`<pre> Your sorted array is <p>${userSorted}</p></pre>`);
document.write(`<pre>-----------------------------------------------------------------------------------</pre>`);

let userArraySplit = userArrayPrompt.split(' ');
let sortedArraySplit = userArraySplit.sort( function(a, b) {
    return a - b;
});
let removedArraySplit = sortedArraySplit.splice(1, 3);


document.write(`<pre> Your sorted array with removed items is <p>${sortedArraySplit.join(', ')}</p></pre>`);
document.write(`<pre>-----------------------------------------------------------------------------------</pre>`);

// /* 2 Дано масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//     1. Знайти суму та кількість позитивних елементів. */

document.write(`<pre>2) Дано масив [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12,-35, 4, 47]\n1. Знайти суму та кількість позитивних елементів.</pre>`);


const givenArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let positiveElementsArray = [];
let arraySum = 0;

givenArray.forEach(element => {
    if (element > 0) {
        positiveElementsArray.push(element);
    }    
});


for (let i = 0; i < positiveElementsArray.length; i++) {
    if (positiveElementsArray[i] > 0) {
        arraySum += positiveElementsArray[i];
    }
};

document.write(`<pre>The quantity of all positive elements <p>${positiveElementsArray.length}</p>\n
Sum of all positive elements <p>${arraySum}</p></pre>`);
document.write(`<pre>-----------------------------------------------------------------------------------</pre>`);

// // 2. Знайти мінімальний елемент масиву та його порядковий номер.

document.write(`<pre>2. Знайти мінімальний елемент масиву та його порядковий номер.</pre>`);

let minArr = Math.min.apply(0, givenArray);

let indexOfMin = givenArray.findIndex(element => element == minArr);

document.write(`<pre>The smallest element of the array is <p>${minArr}</p>\n
It's index <p>${indexOfMin}</p></pre>`);
document.write(`<pre>-----------------------------------------------------------------------------------</pre>`);

// // 3. Знайти максимальний елемент масиву та його порядковий номер.

document.write(`<pre>3. Знайти максимальний елемент масиву та його порядковий номер.</pre>`);

let maxArr = Math.max.apply(null, givenArray);

let indexOfMax = givenArray.findIndex(element => element == maxArr);

document.write(`<pre>The biggest element of the array is <p>${maxArr}</p>\n
It's index <p>${indexOfMax}</p></pre>`);
document.write(`<pre>-----------------------------------------------------------------------------------</pre>`);

// 4. Визначити кількість негативних елементів.

document.write(`<pre>4. Визначити кількість негативних елементів.</pre>`);

let negativeElementsArray = [];

givenArray.forEach(element => {
    if (element < 0) {
        negativeElementsArray.push(element);
    }
});

document.write(`<pre>The quantity of all negative elements <p>${negativeElementsArray.length}</p></pre>`);
document.write(`<pre>-----------------------------------------------------------------------------------</pre>`);

// 5. Знайти кількість непарних позитивних елементів. Знайти суму непарних позитивних елементів.

document.write(`<pre>5. Знайти кількість непарних позитивних елементів.\nЗнайти суму непарних позитивних елементів.
</pre>`);

let unpairedElementsArray = [];
let unpairedElementsSum = 0;

positiveElementsArray.forEach(element => {
    if (element % 2 !== 0) {
        unpairedElementsArray.push(element);
    }
});

for (let i = 0; i < unpairedElementsArray.length; i++) {
    unpairedElementsSum += unpairedElementsArray[i];
};

document.write(`<pre>The quantity of all unpaired positive elements <p>${unpairedElementsArray.length}</p>\n
Their sum is <p>${unpairedElementsSum}</p></pre>`);
document.write(`<pre>-----------------------------------------------------------------------------------</pre>`);

// 6. Визначити кількість парних позитивних елементів. Знайти суму парних позитивних елементів.

document.write(`<pre>6. Визначити кількість парних позитивних елементів.\nЗнайти суму парних позитивних елементів.</pre>`);

let pairedElementsArray = [];
let pairedElementsSum = 0;

positiveElementsArray.forEach(element => {
    if (element % 2 === 0) {
        pairedElementsArray.push(element);
    }
});

for (let i = 0; i < pairedElementsArray.length; i++) {
    pairedElementsSum += pairedElementsArray[i];
};

document.write(`<pre>The quantity of all paired positive elements <p>${pairedElementsArray.length}</p>\n
Their sum is <p>${pairedElementsSum}</p></pre>`);
document.write(`<pre>-----------------------------------------------------------------------------------</pre>`);

// 7. Знайти добуток позитивних елементів.

document.write(`<pre>7. Знайти добуток позитивних елементів.</pre>`);

let positiveMult = positiveElementsArray.reduce((a, b) => a * b);

document.write(`<pre>Product of all positive elements is<p>${positiveMult}</p></pre>`);
document.write(`<pre>-----------------------------------------------------------------------------------</pre>`);

// 8. Знайти найбільший серед елементів масиву, решту занулити.

document.write(`<pre>8. Знайти найбільший серед елементів масиву, решту занулити.</pre>`);

let newGivenArray = givenArray.slice();
let maxArrayNumber = Math.max.apply(null, newGivenArray);
console.log(maxArrayNumber);

let indexMaxArrayNumber = newGivenArray.indexOf(maxArrayNumber);
console.log(indexMaxArrayNumber);

for (let i = 0; i < maxArrayNumber; i++) {
    if (newGivenArray[i] < maxArrayNumber) {
        newGivenArray[i] = 0;
    }
}

document.write(`<pre>Only the biggest element is shown, the rest are 0<p>${newGivenArray.join(', ')}</p></pre>`)