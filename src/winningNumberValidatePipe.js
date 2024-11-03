import {validateWinningNumberOutOfBounds, 
    validateWinningNumberAmount, 
    validateWinningNumberDecimal} from './validate.js'

export const winningNumberValidatePipe = (winningNumbers) => {
    validateWinningNumberOutOfBounds(winningNumbers);
    validateWinningNumberAmount(winningNumbers);
    validateWinningNumberDecimal(winningNumbers);
}