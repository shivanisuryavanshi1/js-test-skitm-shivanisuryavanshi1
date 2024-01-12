/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   
        const stackOfInput = [];
        const mappingInput = { ')': '(', '}': '{', ']': '[' };
    
        for (let char of s) {
            if (char in mappingInput) {
                const topElement = stackOfInput.pop() || '#';
                if (mappingInput[char] !== topElement) {
                    return false;
                }
            } else {
                stackOfInput.push(char);
            }
        }
    
        return stackOfInput.length === 0;
    }
    
    console.log(isValid("()"));       
    console.log(isValid("()[]{}"));     
    console.log(isValid("(]"));
    


module.exports = { isValid };

          
