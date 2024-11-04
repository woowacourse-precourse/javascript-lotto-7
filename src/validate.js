import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "./message.js"


export const validatePurchaseAmount = {
    validation: (purchaseAmount) => {
        const amount = Number(purchaseAmount);
        return(
            validatePurchaseAmount.checkDivisibleByThousand(amount) &&
            validatePurchaseAmount.checkIsNumber(amount) &&
            validatePurchaseAmount.checkIsPositive(amount)
        );
    },

    checkDivisibleByThousand(value){
        if((value % 1000) !== 0){
            Console.print(ERROR_MESSAGE.PURCHASE_AMOUNT_NOT_DIVISIBLE_THOUSAND);
            return false;
        }
        return true;
    },
    checkIsNumber(value){
        if(isNaN(value)){
            Console.print(ERROR_MESSAGE.NOT_NUMBER);
            return false;
        }
        return true;
    },
    checkIsPositive(value){
        if(value <= 0) {
            Console.print(ERROR_MESSAGE.NOT_POSITIVE);
            return false;
        }
        return true;
    }

};

export const validateWinnigNum = {
    validation: (inputNum) => {
        const numbers = inputNum.split(',').map(Number);
        return(
            validateWinnigNum.checkIsNumber(numbers) &&
            validateWinnigNum.checkRange(numbers) &&
            validateWinnigNum.checkIsSixElements(numbers) &&
            validateWinnigNum.checkDuplication(numbers)
        );
    },

    checkIsNumber(value){
        if(value.some(isNaN)){
            Console.print(ERROR_MESSAGE.NOT_NUMBER);
            return false;
        }
        return true;
    },
    checkRange(value){
        const isValid = value.every(num => num >= 1 && num <= 45);

        if(!isValid){
            Console.print(ERROR_MESSAGE.NOT_RANGE);
            return false;
        }
        return true;
    },
    checkIsSixElements(value){
        if(value.length !== 6){
            Console.print(ERROR_MESSAGE.NOT_SIX_ELEMENTS);
            return false;
        }
        return true;
    },
    checkDuplication(value){
        const isValid = new Set(value).size === value.length;

        if(!isValid){
            Console.print(ERROR_MESSAGE.DUPLICATION);
            return false;
        }
        return true;
    }
};

export const validateBonusNum = {
    validation: (bonusNum, winningNum) => {
        const num = Number(bonusNum);
        return(
            validateBonusNum.checkIsNum(num) &&
            validateBonusNum.checkRange(num) &&
            validateBonusNum.checkNotInWinnigNum(num, winningNum)
        );
    },

    checkIsNum(value){
        if(isNaN(value)){
            Console.print(ERROR_MESSAGE.NOT_NUMBER);
            return false;
        }
        return true;
    },
    checkRange(value){
        if(value < 1 || value > 45){
            Console.print(ERROR_MESSAGE.NOT_RANGE);
            return false;
        }
        return true;
    },
    checkNotInWinnigNum(value, winningNum){
        if(winningNum.includes(value)){
            Console.print(ERROR_MESSAGE.BONUS_IN_WINNING_NUM);
            return false;
        }
        return true;
    }
};