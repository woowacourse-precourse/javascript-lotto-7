import { MissionUtils } from "@woowacourse/mission-utils";

import UserInput from "./UserInput.js";
import Lotto from "./Lotto.js";
import GenerateNumbers from "./GenerateNumbers.js";

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
      lotto.validateBonusNumber(bonusNum);

      const bills = price / 1000;
      console.log("");
      MissionUtils.Console.print(`${bills}개를 구매했습니다.`);

      //사용자의 로또 번호 생성하기
      const generateNumbers = new GenerateNumbers();

      const generatedList = await generateNumbers.generateNums(
        bills,
        numbers,
        bonusNum
      );

      // generatedList.forEach((numbers) => {
      //   console.log(`[${numbers.join(", ")}]`);
      // });

      console.log("");
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default App;
