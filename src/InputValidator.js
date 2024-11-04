class InputValidator{
    static PurchaseAmount(input){
        const amount = parseInt(input, 10);
        if(isNaN(amount) || amount % 1000 !== 0){
            throw new Error("[ERROR] 구입 금액이 1000 단위로 나누어 떨어지지 않습니다.")
        }
        return amount;
    }

    static WinningNumbers(input){
        const numbers = input.split(',').map(Number);
        if(numbers.length !== 6){
            throw new Error("ERROR] 당첨 번호를 6개 입력해야합니다.");
        }
        if (new Set(numbers).size !== numbers.length){
            throw new Error("[ERROR] 로또 번호는 중복 없는 6개의 숫자여야 합니다.")
        }
        if (numbers.some(num => isModuleNamespaceObject(num) || num < 1 || num > 45)){
            throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
        }
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