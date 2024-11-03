import { MissionUtils } from "@woowacourse/mission-utils";
import { DISPLAY_MESSAGE } from "../config/constants.js";
import Validator from "../utils/Validator.js";

class UserInput {
    async getUserPaidMoney() {
      let paidMoney;
      let validatePaidMoneyFlag = false;

      while ( !validatePaidMoneyFlag) { 
        paidMoney = await MissionUtils.Console.readLineAsync(DISPLAY_MESSAGE.REQUEST_MONEY_MESSAGE);
        validatePaidMoneyFlag = Validator.validatePaidMoney(paidMoney);

        if(validatePaidMoneyFlag) {
          return paidMoney;
        }

        MissionUtils.Console.print(DISPLAY_MESSAGE.ERROR_PAID_MONEY_MESSAGE);
      }
    }

    async getWinningNumber() {
      let validateWinngingNumberFlag = false;

      while (!validateWinngingNumberFlag) {
        const winningNumber = await MissionUtils.Console.readLineAsync(DISPLAY_MESSAGE.REQUST_WINNING_NUMBER_MESSAGE);
        validateWinngingNumberFlag = Validator.validateWinningNumber(winningNumber)

        if (validateWinngingNumberFlag) {
          return winningNumber;
        }

        MissionUtils.Console.print(DISPLAY_MESSAGE.ERROR_WINNING_NUMBER_MESSAGE);

      }
    }

    async getBonusNumber() {
      const bonusNumber = await MissionUtils.Console.readLineAsync(DISPLAY_MESSAGE.REQEUST_BUONUS_NUMBER_MESSAGE);
      return bonusNumber;
    }

}

export default UserInput;