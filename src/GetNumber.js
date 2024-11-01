import { Console } from "@woowacourse/mission-utils";
import CheckNumber from "./CheckNumber.js";
class GetNumber {
    constructor(checkNumber) {
        this.bonusAndWinnerNumbers = [];
        this.checkNumber = checkNumber;
    }


    async getWinNumber() {
        const WinNumber = await Console.readLineAsync('당첨 번호를 입력해주세요.(,로 구분)');
        const WinNumberArray = WinNumber.split(',').map(number => Number(number.trim()));
        WinNumberArray.forEach(element => {
          this.validateNumberRange(element)
        });
        this.validateWinNumber(WinNumberArray);
    }

    async getBonusNumber() {
        const BonusNumber = await Console.readLineAsync('보너스 번호를 입력해주세요.');
        const BonusNumberArray = [Number(BonusNumber.trim())];
        this.validateNumberRange(BonusNumberArray [0])
        this.validateBonusNumber(BonusNumberArray);
        this.saveNumbers();
    }

    saveNumbers() {
        this.checkNumber.winNumber.push(...this.bonusAndWinnerNumbers);
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
        return this.bonusAndWinnerNumbers;
    }

    validateNumberRange(number){
      if(number>45||number<1){throw new Error('[Error] 1~45까지만 허용 됩니다.')}
    }
}

export default GetNumber;
