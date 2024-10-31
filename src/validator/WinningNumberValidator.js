class WinningNumberValidator {
    checkWinningNumberIsDuplicated(winningNumber) {
        const uniqueNumber = new Set(winningNumber);
        if (uniqueNumber.size !== winningNumber.length) {
            throw new Error("[ERROR] 당첨 번호는 중복될 수 없습니다.");
        }
    }

    checkWinningNumberIsNumber(winningNumber) {
        if (isNaN(winningNumber)) {
            throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
        }
    }

    checkWinningNumberLength(winningNumber) {
        if (winningNumber.length !== 6) {
            throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
        }
    }

    checkWinningNumberRange(winningNumber) {
        winningNumber.forEach(number => {
            if (number < 1 || number > 45) {
                throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
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
