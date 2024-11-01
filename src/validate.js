import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "./message"


export const validatePurchaseAmount = {
    validation: (purchaseAmount) => {
        validatePurchaseAmount.checkDivisibleByThousand(purchaseAmount);
        validatePurchaseAmount.checkIsNumber(purchaseAmount);
        validatePurchaseAmount.checkIsPositive(purchaseAmount);
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