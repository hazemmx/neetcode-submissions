class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let myMap = {};
        for (let letter of s){
            if (myMap[letter] == undefined ){
                myMap[letter] =1;
            }else {
                myMap[letter]++;
            }
        }
        for (let letter of t){
           myMap[letter]--;
        }
      return Object.values(myMap).every(v => v === 0);
    }
}
