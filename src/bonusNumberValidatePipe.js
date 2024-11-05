import {validateBonusNumberOutOfBounds, 
    validateBonusNumberDecimal,
    validateLottoOverlap} from './validate.js'

export const bonusNumberValidatePipe = (bonusNumber) => {
    validateBonusNumberOutOfBounds(bonusNumber);
    validateBonusNumberDecimal(bonusNumber);
}