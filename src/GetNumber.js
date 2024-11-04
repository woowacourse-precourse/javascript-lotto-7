import { Console } from "@woowacourse/mission-utils";
class GetNumber {
    constructor() {
        this.winNumber = [];
        this.bonusNumber = [];
    }


    async getWinNumber() {
        const winNumber = await Console.readLineAsync('\n당첨 번호를 입력해주세요.\n');
        const WinNumberArray = winNumber.split(',').map(number => Number(number.trim()));
        WinNumberArray.forEach(element => {
          this.validateNumberRange(element)
        });
        this.validateWinNumber(WinNumberArray);
    }

    async getBonusNumber() {
        const BonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해주세요.\n');
        const BonusNumberArray = [Number(BonusNumber.trim())];
        this.validateNumberRange(BonusNumberArray [0])
        this.validateBonusNumber(BonusNumberArray);
    }

    validateWinNumber(WinNumberArray) {
        if (new Set(WinNumberArray).size < 6) {
            throw new Error('[ERROR]중복되는 번호 혹은 공백이 있습니다.');
        }
        if(new Set(WinNumberArray).size > 6){
            throw new Error('[ERROR]당첨 번호는 최대 6개입니다.')
        }
        this.winNumber = WinNumberArray;
    }

    validateBonusNumber(BonusNumberArray) {
        const bonusNumber = BonusNumberArray[0];
        if(this.winNumber.includes(bonusNumber)){
          throw Error('[Error] 당첨 번호와 보너스 번호가 중복되면 안 됩니다.')
        }
        this.bonusNumber.push(bonusNumber);
    }

    validateNumberRange(number){
      if(number>45||number<1){throw new Error('[Error] 1~45까지만 허용 됩니다.')}
    }
}

export default GetNumber;
