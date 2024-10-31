import { Console } from "@woowacourse/mission-utils";

class GetNumber {
    constructor() {
        this.bonusAndWinnerNumbers = [];
    }

    async getWinNumber() {
        const WinNumber = await Console.readLineAsync('당첨 번호를 입력해주세요.(,로 구분)');
        const WinNumberArray = WinNumber.split(',').map(number => number.trim());
        this.validateWinNumber(WinNumberArray);
    }

    async getBonusNumber() {
        const BonusNumber = await Console.readLineAsync('보너스 번호를 입력해주세요.');
        const BonusNumberArray = [BonusNumber.trim()];
        this.validateBonusNumber(BonusNumberArray);
    }

    validateWinNumber(WinNumberArray) {
        if (new Set(WinNumberArray).size !== 6) {
            throw new Error('[ERROR]중복되는 번호 혹은 공백이 있습니다.');
        }
        this.bonusAndWinnerNumbers = WinNumberArray;
    }

    validateBonusNumber(BonusNumberArray) {
        const bonusNumber = BonusNumberArray[0];
        if(this.bonusAndWinnerNumbers.includes(bonusNumber)){
          throw Error('[Error] 당첨 번호와 보너스 번호가 중복되면 안 됩니다.')
        }
        this.bonusAndWinnerNumbers.push(bonusNumber);
        this.bonusAndWinnerNumbers = this.bonusAndWinnerNumbers.map(number => Number(number));
        return this.bonusAndWinnerNumbers;
    }
}

export default GetNumber;
