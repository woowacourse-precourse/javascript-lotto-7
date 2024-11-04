import Lotto from "../models/Lotto";

class InputValidator{
    static PurchaseAmount(input){
        const amount = parseInt(input, 10);
        if(isNaN(amount) || amount % 1000 !== 0){
            throw new Error("[ERROR] 구입 금액이 1000 단위로 나누어 떨어지지 않습니다.")
        }
        return amount;
    }

    static validateWinningNumbers(input) {
        const numbers = input.split(",").map(Number);
        const lotto = new Lotto(numbers); // Lotto 인스턴스를 통해 검증 수행
        return lotto.getNumbers();
    }

    static bonusNumber(input, winningNumbers) {
        const numbers = input.split(',').map(Number);
        if (numbers.length !== 1) {
            throw new Error("[ERROR] 보너스 번호를 1개 입력해야 합니다.");
        }
        const bonusNumber = numbers[0];
        if (winningNumbers.includes(bonusNumber)) {
            throw new Error("[ERROR] 당첨 번호와 중복된 숫자를 입력했습니다.");
        }
        if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
            throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
        }
        return bonusNumber;
    }
    
}

export default InputValidator;