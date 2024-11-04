export const sortAsc = (unsortedValue) => {
    return unsortedValue.sort((a, b) => a - b)
}
export const stringToNumberArray = (input) => {
    return input.split(",").map((elem) => spaceContainToNumbers(elem))
}
const spaceContainToNumbers = (value) => {
    if (value.trim() === value) {
        return parseInt(value)
    }
    return null
}
export const stringToNumber = (input) => {
    return spaceContainToNumbers(input)
}