export class FizzBuzz {

    static compute(input: number) {
        let result = '';

        if (input % 3 === 0) {
            result = 'Fizz';
        }

        if (input % 5 === 0) {
            result += 'Buzz';
        }

        if (result === '') {
            result = input.toString();
        }

        return result;
    }
}