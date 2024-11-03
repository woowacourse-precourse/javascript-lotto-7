class InputValidator {
    // 구입금액 유효성 검사
    validateAmount(purchaseAmount) {
        if (purchaseAmount == null || purchaseAmount === "") {
            throw new Error("[ERROR] 구입 금액은 입력해야 합니다.");
        }
        console.log(purchaseAmount);
        
        purchaseAmount = Number(purchaseAmount);
        console.log(purchaseAmount);
        console.log(isNaN(purchaseAmount));
        
        if (isNaN(purchaseAmount)) {
            throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
        }
        
        if (purchaseAmount % 1000 !== 0) {
            throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
        }
        if (purchaseAmount < 1000) {
            throw new Error("[ERROR] 구입 금액은 1,000원 이상이여야 합니다.");
        }
        
        return true; 
    }
    
    // 당첨번호 유효성 검사
    validateWinningNumbers(winningNumbers) {
        if (!winningNumbers || !Array.isArray(winningNumbers) || winningNumbers.length === 0) {
            throw new Error("[ERROR] 당첨 번호는 입력해야 하며, 배열 형식이어야 합니다.");
        }
        if (winningNumbers.length !== 6) {
            throw new Error("[ERROR] 당첨번호는 6개를 입력하셔야 합니다.");
        }

        const isInRange = winningNumbers.every(num => num >= 1 && num <= 45);
        if (!isInRange) {
            throw new Error("[ERROR] 당첨번호는 1부터 45 사이의 숫자여야 합니다.");
        }

        const hasDuplicates = new Set(winningNumbers).size !== winningNumbers.length;
        if (hasDuplicates) {
            throw new Error("[ERROR] 당첨번호에는 중복된 숫자가 없어야 합니다.");
        }

        return true; 
    }

    // 보너스 번호 유효성 검사
    validateBonusNumber(bonusNumber, winningNumbers) {
        if (bonusNumber == null || bonusNumber === "") {
            throw new Error("[ERROR] 보너스 번호는 입력해야 합니다.");
        }

        bonusNumber = Number(bonusNumber); 

        if (isNaN(bonusNumber)) {
            throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
        }

        if (bonusNumber < 1 || bonusNumber > 45) {
            throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
        }

        if (winningNumbers.includes(bonusNumber)) {
            throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
        }

        return true; 
    }
}

export default InputValidator;
