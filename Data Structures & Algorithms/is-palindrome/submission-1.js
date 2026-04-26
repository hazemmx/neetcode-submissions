class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let i = 0 ;
        
         
         let replacedString = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
        let j = replacedString.length-1;       
        while (i < j){
            if (replacedString[i] == replacedString[j]){
                i++;
                j--;
                console.log("true");
            } else {
                return false;
            }
        }
        return true;

    }
}
