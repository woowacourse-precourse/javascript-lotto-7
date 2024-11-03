import { MissionUtils } from "@woowacourse/mission-utils";
import { DISPLAY_MESSAGE } from "../config/constants.js";

class UserInput {
    async getUserPaidMoney() {
      let paidMoney;
      while ( paidMoney%1000 !== 0) { 
        paidMoney = await MissionUtils.Console.readLineAsync(DISPLAY_MESSAGE.REQUEST_MONEY_MESSAGE);
        
        if(paidMoney % 1000 === 0) {
          return paidMoney;
        }

        MissionUtils.Console.print(DISPLAY_MESSAGE.ERROR_PAID_MONEY_MESSAGE);

      }
    }

    async getWinningNumber() {
      const winningNumber = await MissionUtils.Console.readLineAsync(DISPLAY_MESSAGE.REQUST_WINNING_NUMBER_MESSAGE);
      return winningNumber;
    }

    async getBonusNumber() {
      const bonusNumber = await MissionUtils.Console.readLineAsync(DISPLAY_MESSAGE.REQEUST_BUONUS_NUMBER_MESSAGE);
      return bonusNumber;
    }

}

export default UserInput;