import { FizzBuzz } from '../src/FizzBuzz';

describe('FizzBuzz', () => {
    it('compute 1', () => {
        const result = FizzBuzz.compute(1);
        expect(result).toBe('1');
    });

    it('compute 2', () => {
        const result = FizzBuzz.compute(2);
        expect(result).toBe('2');
    });

    it('compute 3', () => {
        const result = FizzBuzz.compute(3);
        expect(result).toBe('Fizz');
    });

    it('compute 4', () => {
        const result = FizzBuzz.compute(4);
        expect(result).toBe('4');
    });

    it('compute 5', () => {
        const result = FizzBuzz.compute(5);
        expect(result).toBe('Buzz');
    });

    it('compute 6', () => {
        const result = FizzBuzz.compute(6);
        expect(result).toBe('Fizz');
    });
});