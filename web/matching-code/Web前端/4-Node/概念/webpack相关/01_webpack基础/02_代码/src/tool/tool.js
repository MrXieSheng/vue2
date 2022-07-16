export const getArraySum = arr => arr.reduce((sum, val) => {
    sum = sum + val;
    return sum;
}, 0)