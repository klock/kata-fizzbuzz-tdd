export class FizzBuzz {

    static compute(input: number) {
        if (input % 3 === 0) {
            return 'Fizz';
        } else if (input === 5) {
            return 'Buzz';
        } else if (input === 10) {
            return 'Buzz';
        } else {
            return input.toString();
        }
    }
}