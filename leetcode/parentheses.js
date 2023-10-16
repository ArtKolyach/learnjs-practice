const s = '[]'
const set = {
    '(': ')',
    '[':']',
    '{':'}'
}
const isValid = function(s) {
    const stack = []
    for (let i of s) {
        if ((i === '{') || (i === '[') || (i === '(')) {
            stack.push(set[i])
            console.log(stack)
        }
        else if ((i === stack[stack.length - 1])) {
            stack.pop()
        } else return false
    }
    console.log(s, stack)
    return (stack.length === 0)
};
console.log(isValid(s))