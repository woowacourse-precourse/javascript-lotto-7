import { FIVE_BONUS_PRIZE, FIVE_PRIZE, FOUR_PRIZE, SIX_PRIZE, THREE_PRIZE } from "./Prize.js"

export function resultToStr(result){
    switch(result){
        case 3:
            return "three"
        case 4:
            return "four"
        case 5:
            return "five"
        case 6:
            return "six"
    }
}

export function resultToPrize(str){
    switch(str){
        case "three" :
            return THREE_PRIZE
        case "four" :
            return FOUR_PRIZE
        case "five":
            return FIVE_PRIZE
        case "bonus":
            return FIVE_BONUS_PRIZE
        case "six":
            return SIX_PRIZE
    }
}