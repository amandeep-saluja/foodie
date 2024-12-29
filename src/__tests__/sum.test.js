import { sum } from '../components/sum';

test('Sum function should calculate the sum of two numbers', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
});
