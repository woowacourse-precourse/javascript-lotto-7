import {validateNotNumber, 
    validateNotThousandUnits, 
    validatePayDecimalNumber} from './validate.js'

export const purchaseValidatePipe = (purchaseAmount) => {
    validateNotNumber(purchaseAmount);
    validateNotThousandUnits(purchaseAmount);
    validatePayDecimalNumber(purchaseAmount);
}
