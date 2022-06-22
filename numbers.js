// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

// example-1:
// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] 
// would also be accepted.

// example-2:
// Input: nums = [0]
// Output: [0]

nums = [0]
// nums = [3,1,2,4]
evenNum = []

// for (let i = 0; i < nums.length; i++){
//     nums[i] % 2 == 0 ? evenNum.unshift(nums[i]) : evenNum.push(nums[i]);
// }


nums.filter((x) => {x % 2 == 0 ? evenNum.unshift(x) : evenNum.push(x)});
console.log(evenNum);