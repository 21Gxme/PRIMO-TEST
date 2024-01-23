"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
const globals_1 = require("@jest/globals");
(0, globals_1.test)('merges two sorted arrays', () => {
    expect((0, merge_1.merge)([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect((0, merge_1.merge)([1, 3, 5], [2])).toEqual([1, 2, 3, 5]);
    expect((0, merge_1.merge)([], [2, 4, 6])).toEqual([2, 4, 6]);
    expect((0, merge_1.merge)([1, 3, 5], [])).toEqual([1, 3, 5]);
});
