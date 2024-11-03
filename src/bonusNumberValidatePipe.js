import {validateBonusNumberOutOfBounds, 
    validateBonusNumberDecimal} from './validate.js'

export const bonusNumberValidatePipe = (bonusNumber) => {
    validateBonusNumberOutOfBounds(bonusNumber);
    validateBonusNumberDecimal(bonusNumber);
}