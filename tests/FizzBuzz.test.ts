import { FizzBuzz } from '../src/FizzBuzz';

describe('FizzBuzz', () => {
    it('compute 1', () => {
        const result = new FizzBuzz().compute(1);
        expect(result).toBe('1');
    });
});