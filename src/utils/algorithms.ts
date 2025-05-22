/**
 * Given a 1-indexed sorted array of integers, find two distinct numbers such that they add up
 * to a specific target number. Return their indices (1-based) in an array. Only constant extra 
 * space must be used, and each input is guaranteed to have exactly one solution.
 *
 * The algorithm uses a two-pointer approach:
 * - One pointer starts at the beginning (left), and the other at the end (right) of the array.
 * - On each iteration, the sum of numbers at both pointers is compared with the target.
 *   - If the sum is equal to the target, return the indices (+1 for 1-indexing).
 *   - If the sum is less than the target, move the left pointer to the right to increase the sum.
 *   - If the sum is greater than the target, move the right pointer to the left to decrease the sum.
 *
 * Time Complexity: O(n) - At most one full pass through the array.
 * Space Complexity: O(1) - Only two pointers are used, no extra space dependent on input size.
 *
 * @param {number[]} numbers - A sorted array of integers (1-indexed problem).
 * @param {number} target - The specific target sum to find.
 * @return {number[]} - An array containing the 1-indexed positions of the two numbers that sum to the target.
 */
export const twoSum = (numbers: number[], target: number): number[] => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return []; // Fallback: theoretically unreachable as problem guarantees a solution.
};

export const runTwoSumTests = () => {
  const testCases = [
    { input: [4, 11, 17, 25], target: 21, expected: [1, 3] },
    { input: [0, 1, 2, 2, 3, 5], target: 4, expected: [2, 4] },
    { input: [-1, 0], target: -1, expected: [1, 2] },
    { input: [1, 2, 3, 4, 5], target: 9, expected: [4, 5] },
    { input: [2, 7, 11, 15], target: 9, expected: [1, 2] },
    { input: [2, 2, 11, 15], target: 4, expected: [1, 2] },
    { input: [2, 3, 4], target: 6, expected: [1, 3] },
  ];

  return testCases.map(testCase => {
    const output = twoSum(testCase.input, testCase.target);
    const isCorrect = JSON.stringify(output) === JSON.stringify(testCase.expected);

    return {
      input: testCase.input,
      target: testCase.target,
      expected: testCase.expected,
      output,
      isCorrect,
    };
  });
};

//  TestCases console log
console.log(runTwoSumTests());
