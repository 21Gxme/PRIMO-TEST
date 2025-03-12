import { merge } from './merge';
import { test } from '@jest/globals';

test('merges two sorted arrays', () => {
    expect(merge([1, 3, 5], [2, 4, 6], [])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([1, 3, 5], [2], [])).toEqual([1, 2, 3, 5]);
    expect(merge([], [2, 4, 6], [])).toEqual([2, 4, 6]);
    expect(merge([1, 3, 5], [], [])).toEqual([1, 3, 5]);
});
