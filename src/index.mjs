//Input:[2,3,4,6], target=6
//Output: [1,3] since 2+4 =6
//O(n), using hashmap

import "./styles.css";

function twoSum(num, target) {
  let numMap = {};
  for (let i = 0; i < num.length; i++) {
    let compliment = target - num[i];
    if (compliment in numMap) {
      return [numMap[compliment] + 1, i + 1];
    }
    numMap[num[i]] = i;
  }
  return [];
}

console.log(twoSum([2, 3, 4, 6], 6));
