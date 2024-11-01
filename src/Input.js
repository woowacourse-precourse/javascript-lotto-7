import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO } from "./constants.js";

class UserInput {
    async getUserPaidMoney() {

      let paidMoney;
      while ( paidMoney%1000 !== 0) { 
        paidMoney = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요\n");
        
        if(paidMoney % 1000 !== 0) { 
          MissionUtils.Console.print(`[ERROR] 로또 1장당 금액은 ${LOTTO.LOTTO_TICKET_PRICE}원입니다. 거스름돈 없이 해주세요`);
        }
      }

      return paidMoney;
    }

    async getWinningNumber() {
      const winningNumber = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
      return winningNumber;
    }

    async getBonusNumber() {
      const bonusNumber = await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
      return bonusNumber;
    }

}

export default UserInput;
const test = new UserInput();
