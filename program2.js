/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

        const inputValues = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
    
        let result = 0;
    
        for (let i = 0; i < s.length; i++) {
            const presentValue = inputValues[s[i]];
            const nextValue = inputValues[s[i + 1]];
    
            if (nextValue > presentValue) {
                result += nextValue - presentValue;
                i++; 
            } else {
                result += presentValue;
            }
        }
    
        return result;
    
}
    console.log(romanToInt("III")); 
    console.log(romanToInt("LVIII")); 
    console.log(romanToInt("MCMXCIV")); 


module.exports={romanToInt}