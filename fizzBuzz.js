var output = [];
var count = 1;

function fizzBuzz() {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz"); //This will print FizzBuzz instead of multiples of 3 & 5
    }
    else if (count % 3 === 0) {
        output.push("Fizz"); //This will print Fizz instead of multiples of 3
    } else if (count % 5 === 0) {
        output.push("Buzz"); //This will print Buzz instead of multiples of 5
    }
    else {
        output.push(count);
    }

    count++;

    console.log(output);
}
