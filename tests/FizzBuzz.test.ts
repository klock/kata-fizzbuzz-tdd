import { FizzBuzz } from '../src/FizzBuzz';

function expectResultToBeEqualToInput(input: number) {
    expect(FizzBuzz.compute(input)).toBe(input.toString());
}

function expectResultToBe(input: number, expected: string) {
    expect(FizzBuzz.compute(input)).toBe(expected);
}

describe('FizzBuzz', () => {

    const equivalentNumbers: number[] = [ 1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19, 22, 23, 26, 28, 29, 31, 32, 34];
    const fizzNumbers: number[] = [ 3, 6, 9, 12, 18, 21, 24, 27, 33, 36 ];
    const buzzNumbers: number[] = [ 5, 10, 20, 25, 35 ];
    const fizzBuzzNumbers: number[] = [ 15, 30 ];

    for (let input of equivalentNumbers) {
        it('compute ' + input, () => {
            expectResultToBeEqualToInput(input);
        });
    }

    for (let input of fizzNumbers) {
        it('compute ' + input, () => {
            expectResultToBe(input, 'Fizz');
        });
    }

    for (let input of buzzNumbers) {
        it('compute ' + input, () => {
            expectResultToBe(input, 'Buzz');
        });
    }

    for (let input of fizzBuzzNumbers) {
        it('compute ' + input, () => {
            expectResultToBe(input, 'FizzBuzz');
        });
    }
});
