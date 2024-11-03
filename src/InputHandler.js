import { Console } from "@woowacourse/mission-utils";

class InputHandler {
    //  1. 로또 구입 금액 입력받기
    async getLottoTryCount() {
        const money = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        this.validateMoney(money);

        const lottoCount = Math.floor(money / 1000);
        return lottoCount;
    }

    validateMoney(money) {
        const validatedMoney = Number(money);

        if (isNaN(validatedMoney) || validatedMoney < 1000 || validatedMoney % 1000 !== 0) {
            throw new Error("[ERROR] 로또는 1,000원 단위로만 구매가 가능합니다.");
        }
    }

    //  2. 당첨 번호 입력 받기
    async getJackpotNumbers() {
        const input = await Console.readLineAsync("당첨 번호를 쉼표(,)를 기준으로 구분하여 입력해 주세요.\n");
        const inputjackpot = this.parseNumbers(input);
        const inputjackpotNumbers = this.validateDuplicateNumbers(inputjackpot);
        const jackpotNumbers = this.validateNumberRange(inputjackpotNumbers);
        return jackpotNumbers;
    }

    parseNumbers(inputNumbers) {
        return inputNumbers
            .split(",")
            .map(num => num.trim())
            .filter(num => num)
            .map(num => parseInt(num, 10));
    }

    validateDuplicateNumbers(inputNumbers) {
        const resultNumbers = [...new Set(inputNumbers)];
        if (resultNumbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 서로 다른 6개의 값이어야 합니다.");
        }
        return resultNumbers;
    }

    validateNumberRange(inputNumbers) {
        inputNumbers.forEach(num => {
            if (num < 1 || num > 45) {
                throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
            }
        });
        return inputNumbers;
    }

    //  3. 보너스 번호 입력받기
    async getBonusNumber() {
        const inputNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
        this.validateNumber(inputNumber);
        this.validateSingleNumberRange(inputNumber);
        return inputNumber;
    }

    validateNumber(inputNumber) {
        const validatedNumber = Number(inputNumber);
        if (isNaN(validatedNumber)) {
            throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
        }
        return validatedNumber;
    }

    validateSingleNumberRange(inputNumber) {
        if (inputNumber < 1 || inputNumber > 45) {
            throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
        }
        return inputNumber;
    }
}

export default InputHandler;
