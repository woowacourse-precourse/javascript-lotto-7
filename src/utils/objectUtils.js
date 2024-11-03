export const findKeyToIncrease = (matchCnt) => {
    switch (matchCnt) {
        case 3:
            return "three"
        case 4:
            return "four"
        case 5:
            return "five"
        case 6:
            return "six"
        default:
            return null
    }
}

export const toObjectValueArr = (obj) => {
    return Object.values(obj)
}

export const calculateAmount = (array) => {
    return array.reduce((acc, cur) => {
        return acc + cur.cnt * cur.money
    }, 0)
}

