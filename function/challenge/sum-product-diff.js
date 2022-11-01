function sumProductDiff(num1, num2) {
    const sum = num1 + num2;
    const multiply = num1 * num2;
    const diff = num1-num2;
    return {
        sum, multiply, diff
    }
}

console.log(sumProductDiff(10, 5));
