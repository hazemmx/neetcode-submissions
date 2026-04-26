class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
      return false;
  }
    var dict = {};
    var dict2 = {};
    for ( let char of s){
        if(dict[char] >= 1){
            dict[char] += 1;
        } else {
            dict[char] = 1;
        }
    }
      for ( let char of t){
        if(dict2[char] >= 1){
            dict2[char] += 1;
        } else {
            dict2[char] = 1;
        }
    }
    for ( let char in dict){
        if(dict[char] !== dict2[char])
        {
         return false;
        }
    }
       
    
    
    
    
    return true;
            
    }
}
