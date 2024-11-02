import { Console } from "@woowacourse/mission-utils";

class InputHandler {
    // input 관련 클래스

    //  1. 로또 구입 금액 입력받기
    //  1,000원 단위이므로 1000으로 나눈 몫 구하기 (구한 몫 만큼 로또 게임을 진행하게 됨)
    async getLottoTryCount() {
        const money = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        console.log(`입력한 금액: ${money}원`);

        this.validateMoney(money);

        const lottoCount = Math.floor(money / 1000);
        console.log(`구매할 로또 개수: ${lottoCount}개`);
        return lottoCount;
    }

    validateMoney(money) {
        const validatedMoney = Number(money);

        if (isNaN(validatedMoney) || validatedMoney < 1000 || validatedMoney % 1000 !== 0) {
            throw new Error("[ERROR] 로또는 1,000원 단위로만 구매가 가능합니다.");
        }
    }

    //  2. 당첨 번호 입력 받기
    //  입력 시 쉼표를 기준으로 값을 분리하고, 공백도 제거
    //  중복 제거
    //  숫자 범위가 1부터 45 사이인지 확인 (0이하 or 46이상이면 ERROR)
    async getJackpotNumbers() {
        const input = await Console.readLineAsync("당첨 번호를 쉼표(,)를 기준으로 구분하여 입력해 주세요.\n");
        const inputjackpot = this.parseNumbers(input);
        const inputjackpotNumbers = this.validateDuplicateNumbers(inputjackpot);
        const jackpotNumbers = this.validateNumberRange(inputjackpotNumbers);

        console.log(`당첨 번호 배열: ${jackpotNumbers}`);
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
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
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
    //  숫자 범위가 1부터 45 사이인지 확인 (0이하 or 46이상이면 ERROR)
}

export default InputHandler;
