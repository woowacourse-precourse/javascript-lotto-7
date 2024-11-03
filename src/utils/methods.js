export const sortAsc = (unsortedValue) => {
    return unsortedValue.sort((a, b) => a - b)
}
export const stringToNumberArray = (input) => {
    return input.split(",").map((elem) => Number(elem))
}

export const amountToNumber = (input) => {
    return Number(input) / 1000
}

export const stringToNumber = (input) => {
    return Number(input)
}