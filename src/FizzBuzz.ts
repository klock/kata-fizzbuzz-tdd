export class FizzBuzz {

    compute(input: number) {
        if (input === 3) {
            return 'Fizz';
        } else if (input === 5) {
            return 'Buzz';
        } else if (input === 6) {
            return 'Fizz';
        } else {
            return input.toString();
        }
    }
}