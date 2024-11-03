export const validationCheck = {
    isPositiveNumber(number) {
        return /^[1-9]\d*$/.test(number.toString().trim())
    },
    isInRange(number, minValue = 1, maxValue = Number.MAX_SAFE_INTEGER) {
        return Number(number) <= maxValue && Number(number) >= minValue
    },
    isDividedNumberByValue(number, value) {
        return Number(number) % Number(value) === 0
    },
    hasDuplicates(numbers) {
        return new Set(numbers).size !== numbers.length;
    },
    isCorrectSize(number, size) {
        return number.length === size;
    },
}
