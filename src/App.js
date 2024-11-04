import { Console } from "@woowacourse/mission-utils";
import { ParseInput } from "./ParseInput.js";
import { PickUp } from "./PickUp.js";
import { FormatOutput } from "./FormatOutput.js";
import { printLottoArray } from "./Utils.js";

const MESSAGE = {
  money: "\n구입금액을 입력해 주세요.\n",
  jackpot: "\n당첨 번호를 입력해 주세요.\n",
  bonus: "\n보너스 번호를 입력해주세요.\n",
  result: "\n당첨 통계",
};

class App {
  #price;
  constructor() {
    this.#price = 1000;
  }

  async run() {
    const inputParser = new ParseInput();
    const pickUpInstance = new PickUp();
    let moneyInput;
    let InputIsValid = false;
    while (!InputIsValid) {
      try {
        moneyInput = inputParser.parseMoney(
          await Console.readLineAsync(MESSAGE.money)
        );
        InputIsValid = true;
      } catch (e) {
        Console.print(e.message);
        InputIsValid = false;
      }
    }
    for (let money = moneyInput; money >= this.#price; money -= this.#price) {
      pickUpInstance.pick();
    }
    Console.print(
      `${pickUpInstance.getLottoArrays().length}개를 구매했습니다.`
    );
    printLottoArray(pickUpInstance.getLottoArrays());
    let jackpotInput;
    InputIsValid = false;
    while (!InputIsValid) {
      try {
        jackpotInput = inputParser.parseJackpot(
          await Console.readLineAsync(MESSAGE.jackpot)
        );
        InputIsValid = true;
      } catch (e) {
        Console.print(e.message);
        InputIsValid = false;
      }
    }
    let bonusInput;
    InputIsValid = false;
    while (!InputIsValid) {
      try {
        bonusInput = inputParser.parseBonus(
          await Console.readLineAsync(MESSAGE.bonus)
        );
        InputIsValid = true;
      } catch (e) {
        Console.print(e.message);
        InputIsValid = false;
      }
    }
    pickUpInstance.setJackpot(jackpotInput);
    pickUpInstance.setBonus(bonusInput);
    const pickUpResult = pickUpInstance.checkJackpot();
    const outputInstance = new FormatOutput(moneyInput, pickUpResult);
    Console.print(MESSAGE.result);
    outputInstance.print();
  }
}

export default App;
