// Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// a. 1 <= nums.length <= 10^4
// b. -2^31 <= nums[i] <= 2^31 - 1

function movezero(arr) {
  let end = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[end] = arr[i];
      end++;
    }
}
    for (let j = end; j < arr.length; j++) {
      arr[j] = 0;
    }
  
  return arr;
}
// Example 1:
let nums1 = [0, 1, 0, 3, 12];
console.log(movezero(nums1));
// Example 2:
let nums2 = [0];
console.log(movezero(nums2));
