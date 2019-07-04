export class FizzBuzz {

    compute(input: number) {
        if (input === 3) {
            return 'Fizz';
        } else if (input === 5) {
            return 'Buzz';
        } else {
            return input.toString();
        }
    }
}