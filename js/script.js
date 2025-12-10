const resultDiv = document.getElementById('result');


for (let index = 1; index <= 100; index = index + 1) {
    // Parto dal caso più specifico
    if (index % 3 === 0 && index % 5 === 0) {
        console.log("FizzBuzz");
        let nuovoLi = document.createElement('li');
        nuovoLi.classList.add('fizzbuzz-item', 'list-group-item');
        nuovoLi.innerHTML = `<div class="alert alert-danger" role="alert">
            FizzBuzz
        </div>`;
        resultDiv.appendChild(nuovoLi);
    } else if (index % 3 === 0) {
        console.log("Fizz");
        let nuovoLi = document.createElement('li');
        nuovoLi.classList.add('fizzbuzz-item', 'list-group-item');
        nuovoLi.innerHTML = `<div class="alert alert-success" role="alert">
            Fizz
        </div>`;
        resultDiv.appendChild(nuovoLi);
    } else if (index % 5 === 0) {
        console.log("Buzz");
        let nuovoLi = document.createElement('li');
        nuovoLi.classList.add('fizzbuzz-item', 'list-group-item');
        nuovoLi.innerHTML = `<div class="alert alert-info" role="alert">
            Buzz
        </div>`;
        resultDiv.appendChild(nuovoLi);
    } else {
        // Fino al caso più generico
        console.log(index);
        let nuovoLi = document.createElement('li');
        nuovoLi.classList.add('fizzbuzz-item', 'list-group-item');
        nuovoLi.innerHTML = `<div class="alert alert-primary" role="alert">
            ${index}
        </div>`;
        resultDiv.appendChild(nuovoLi);
    }
}