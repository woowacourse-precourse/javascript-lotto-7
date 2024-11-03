export const stringToNumberArray = (input) => {
    return input.split(",").map((elem) => Number(elem))
}

export const amountToNumber = (input) => {
    return Number(input) / 1000
}