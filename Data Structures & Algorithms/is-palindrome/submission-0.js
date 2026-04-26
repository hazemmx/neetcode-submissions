class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
        let left = 0;
        let right = s.length - 1;

       while(right > left){
        if(s[left]!=s[right]){
            return false;
        }
        left++;
        right--;
       }
       return true;
       
    }
}
