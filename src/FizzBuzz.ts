export class FizzBuzz {

    compute(input: number) {
        if (input === 3) {
            return 'Fizz';
        } else {
            return input.toString();
        }
    }
}