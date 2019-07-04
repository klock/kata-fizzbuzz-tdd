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

    it('compute 7', () => {
        const result = FizzBuzz.compute(7);
        expect(result).toBe('7');
    });

    it('compute 8', () => {
        const result = FizzBuzz.compute(8);
        expect(result).toBe('8');
    });

    it('compute 9', () => {
        const result = FizzBuzz.compute(9);
        expect(result).toBe('Fizz');
    });

    it('compute 10', () => {
        const result = FizzBuzz.compute(10);
        expect(result).toBe('Buzz');
    });

    it('compute 11', () => {
        const result = FizzBuzz.compute(11);
        expect(result).toBe('11');
    });

    it('compute 12', () => {
        const result = FizzBuzz.compute(12);
        expect(result).toBe('Fizz');
    });

    it('compute 13', () => {
        const result = FizzBuzz.compute(13);
        expect(result).toBe('13');
    });

    it('compute 14', () => {
        const result = FizzBuzz.compute(14);
        expect(result).toBe('14');
    });
});