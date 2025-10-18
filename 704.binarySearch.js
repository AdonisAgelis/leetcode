// Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums. If target exists,
// then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

const nums = [
  0, 3, 4, 5, 8, 9, 11, 14, 15, 17, 21, 23, 26, 29, 30, 33, 37, 42, 48, 50,
];
const target = 33;

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch(nums, target));

// Time complexity: O(log n)
// Space complexity: O(1)
