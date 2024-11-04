import { number, errorMessage } from "../constants.js";

export default class Validator {

    static isValidUserMoney(userInputMoney) {
        this.isEmpty(userInputMoney);
        this.isZero(userInputMoney);
        this.isNumber(userInputMoney);
        this.isDivisibleBy(userInputMoney);
    }

    static isValidBouns(winningLotto,bonus) {
        this.isEmpty(bonus);
        this.isZero(bonus);
        this.isValidInputCount(bonus, number.LIMIT_BOUNS_COUNT);
        this.isNumber(bonus);
        this.containsBonusNumber(winningLotto, bonus);
    }
    
    static isZero(input) {
        if(input[0] === `'${number.ZERO}'`)
            throw new Error(errorMessage.IS_ZEOR);

    }

    static isEmpty(input) {
        if(!input)
            throw new Error(errorMessage.IS_EMPTY);
    }

    static isNumber(num) {
        if(isNaN(Number(num)))
            throw new Error(errorMessage.IS_NOT_NUMBER);
    }

    static isDivisibleBy(num) {
        if(!(num % number.LOTTO_UNITS === number.ZERO)) 
            throw new Error(errorMessage.MONEY_NOT_DIVISIBLE);
    }

    static containsBonusNumber(winningLotto, bonus) {
        if(winningLotto.includes(bonus))
            throw new Error(errorMessage.IS_DUPLICATE_BONUS_NUMBER);
    }

    static isValidInputCount(inputNum, limitNum) {
        if(inputNum.length != limitNum)
            throw new Error(errorMessage.IS_OVER_BONUS_NUMBER_COUNT);
    }
}