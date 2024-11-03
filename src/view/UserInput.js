import { MissionUtils } from "@woowacourse/mission-utils";
import { DISPLAY_MESSAGE } from "../config/constants.js";
import Validator from "../utils/Validator.js";

class UserInput {
    async getUserPaidMoney() {
      let paidMoney;
      let validatePaidMoneyflag = false;

      while ( !validatePaidMoneyflag) { 
        paidMoney = await MissionUtils.Console.readLineAsync(DISPLAY_MESSAGE.REQUEST_MONEY_MESSAGE);
        validatePaidMoneyflag = Validator.validatePaidMoney(paidMoney);

        if(validatePaidMoneyflag) {
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