const resultDiv = document.getElementById('result');
function createLiElement(content, styleClasses) {
    let nuovoLi = document.createElement('li');
    nuovoLi.classList.add('list-group-item', ...styleClasses);
    nuovoLi.textContent = content;
    return nuovoLi;
};

for (let index = 1; index <= 100; index = index + 1) {
    // Parto dal caso più specifico
    if (index % 3 === 0 && index % 5 === 0) {
        console.log("FizzBuzz");
        resultDiv.appendChild(createLiElement('FizzBuzz', ['list-group-item-danger']));
    } else if (index % 3 === 0) {
        console.log("Fizz");
        resultDiv.appendChild(createLiElement('Fizz', ['list-group-item-success']));
    } else if (index % 5 === 0) {
        console.log("Buzz");
        resultDiv.appendChild(createLiElement('Buzz', ['list-group-item-info']));
    } else {
        // Fino al caso più generico
        console.log(index);
        resultDiv.appendChild(createLiElement(`${index}`, ['list-group-item-primary']));
    }
}