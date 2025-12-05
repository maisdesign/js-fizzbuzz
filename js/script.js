for (let index = 0; index <100; index = index + 1) {
    // Parto dal caso più specifico
    if (index % 3 === 0 && index % 5 === 0) {
        console.log("FizzBuzz");
    } else if (index % 3 === 0) {
        console.log("Fizz");
    } else if (index % 5 === 0) {
        console.log("Buzz");
    } else {
        // Fino al caso più generico
        console.log(index);
    }   
}