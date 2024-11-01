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