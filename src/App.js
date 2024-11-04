import { MissionUtils } from "@woowacourse/mission-utils";

import UserInput from "./UserInput.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    //사용자로부터 입력 받고 유효한지 검증하는 로직
    const userInput = new UserInput();
    try {
      const price = await userInput.inputPrice();
      const numbers = await userInput.inputWinningNumbers();
      // Lotto 인스턴스 생성
      const lotto = new Lotto(numbers);
      const bonusNum = await userInput.inputBonusNumber();
      // console.log("당첨 번호", lotto);
      lotto.validateBonusNumber(bonusNum);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default App;
