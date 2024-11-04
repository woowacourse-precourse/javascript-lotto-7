import { Console } from "@woowacourse/mission-utils";
import Lotto from "../utils/Lotto.js";
class GetNumber {
    constructor() {
        this.winNumber = [];
        this.bonusNumber = [];
    }


    async getWinNumber() {
        const winNumber = await Console.readLineAsync('\n당첨 번호를 입력해주세요.\n');
        const WinNumberArray = winNumber.split(',').map(number => Number(number.trim()));

        Lotto.validateWinNumber(WinNumberArray);

        this.winNumber = WinNumberArray;
    }

    async getBonusNumber() {
        const input = await Console.readLineAsync('\n보너스 번호를 입력해주세요.\n');
        const bonusNumber = Number(input.trim());

        Lotto.validateBonusNumber(bonusNumber, this.winNumber)

        this.bonusNumber.push(bonusNumber);
    }


}

export default GetNumber;