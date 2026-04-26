class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Use a Map for better key handling and to avoid potential issues with plain objects.
        const map = new Map();

        for (const str of strs) {
            // Sort the string to create a unique key for each anagram group.
            const sortedStr = str.split('').sort().join('');

            // Check if the map already has a key for this sorted string.
            if (map.has(sortedStr)) {
                // If the key exists, push the original string into the existing array.
                map.get(sortedStr).push(str);
            } else {
                // If the key doesn't exist, create a new entry with the sorted string as the key and an array containing the original string as the value.
                map.set(sortedStr, [str]);
            }
        }
        
        // Return an array of all the values from the map. Each value is an array of anagrams.
        return Array.from(map.values());
    }
}