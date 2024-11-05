import {validateLottoNumberOutOfBounds, 
    validateLottoNumberDecimal} from './validate.js'

export const lottoNumberValidatePipe = (winningNumbers) => {
    validateLottoNumberOutOfBounds(winningNumbers);
    validateLottoNumberDecimal(winningNumbers);
}