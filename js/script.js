const resultDiv = document.getElementById('result');

for (let index = 1; index <= 100; index = index + 1) {
    // Parto dal caso più specifico
    if (index % 3 === 0 && index % 5 === 0) {
        console.log("FizzBuzz");
        let nuovoLi = document.createElement('li');
        nuovoLi.classList.add('list-group-item', 'list-group-item-danger');
        nuovoLi.innerHTML = `FizzBuzz`;
        resultDiv.appendChild(nuovoLi);
    } else if (index % 3 === 0) {
        console.log("Fizz");
        let nuovoLi = document.createElement('li');
        nuovoLi.classList.add('list-group-item', 'list-group-item-success');
        nuovoLi.innerHTML = `Fizz`;
        resultDiv.appendChild(nuovoLi);
    } else if (index % 5 === 0) {
        console.log("Buzz");
        let nuovoLi = document.createElement('li');
        nuovoLi.classList.add('list-group-item', 'list-group-item-info');
        nuovoLi.innerHTML = `Buzz`;
        resultDiv.appendChild(nuovoLi);
    } else {
        // Fino al caso più generico
        console.log(index);
        let nuovoLi = document.createElement('li');
        nuovoLi.classList.add('list-group-item', 'list-group-item-primary');
        nuovoLi.innerHTML = `${index}`;
        resultDiv.appendChild(nuovoLi);
    }
}