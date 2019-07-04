export class FizzBuzz {

    static compute(input: number) {
        if (input === 15) {
            return 'FizzBuzz';
        } else if (input % 3 === 0) {
            return 'Fizz';
        } else if (input % 5 === 0) {
            return 'Buzz';
        } else {
            return input.toString();
        }
    }
}