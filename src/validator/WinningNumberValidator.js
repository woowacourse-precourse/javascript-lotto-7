import ErrorMessages from "../constant/ErrorMessage.js";

class WinningNumberValidator {
    checkWinningNumberIsDuplicated(winningNumber) {
        const uniqueNumber = new Set(winningNumber);
        if (uniqueNumber.size !== winningNumber.length) {
            throw new Error(ErrorMessages.WINNING_NUMBER_DUPLICATE);
        }
    }

    checkWinningNumberIsNumber(winningNumber) {
        if (isNaN(winningNumber)) {
            throw new Error(ErrorMessages.WINNING_NUMBER_RANGE);
        }
    }

    checkWinningNumberLength(winningNumber) {
        if (winningNumber.length !== 6) {
            throw new Error(ErrorMessages.WINNING_NUMBER_COUNT);
        }
    }

    checkWinningNumberRange(winningNumber) {
        winningNumber.forEach(number => {
            if (number < 1 || number > 45) {
                throw new Error(ErrorMessages.WINNING_NUMBER_RANGE);
            }
        });
    }

    parsingWinningNumber(winningNumberString) {
        return winningNumberString.split(",").map(number => {
            const parsedNumber = Number(number.trim());
            this.checkWinningNumberIsNumber(parsedNumber);
            return parsedNumber;
        });
    }


    validateWinningNumber(winningNumberString) {
        const winningNumber = this.parsingWinningNumber(winningNumberString);
        this.checkWinningNumberLength(winningNumber);
        this.checkWinningNumberRange(winningNumber);
        this.checkWinningNumberIsDuplicated(winningNumber);
        return winningNumber;
    }
}

export default WinningNumberValidator;
