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
            validateWinnigNum.checkIsSixElements(numbers)
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
        const isVaild = value.every(num => num >= 1 && num <= 45);

        if(!isVaild){
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
    }
}