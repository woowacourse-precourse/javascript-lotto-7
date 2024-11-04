export const findKeyToIncrease = (matchCnt) => {
    switch (matchCnt) {
        case 3:
            return "THREE_MATCH"
        case 4:
            return "FOUR_MATCH"
        case 5:
            return "FIVE_MATCH"
        case 6:
            return "SIX_MATCH"
        default:
            return null
    }
}

export const objToValueArr = (obj) => {
    return Object.values(obj)
}

export const objReduce = (array) => {
    return array.reduce((acc, cur) => {
        return acc + (cur.cnt * cur.MONEY)
    }, 0)
}

