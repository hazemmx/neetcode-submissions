class Solution {
    /**
     * @param {string} s
     * @return {number}


// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 lengthOfLongestSubstring = function (s) {
  let string = "";
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < s.length) {
    if (string.indexOf(s[right]) === -1) {
      string += s[right];
      right++;
      max = Math.max(max, string.length);
    } else {
      string = string.slice(string.indexOf(s[right]) + 1);
      left = right;
    }
  }
  return max;
};
// @lc code=end

}
