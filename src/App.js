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
  line: "---",
};

class App {
  #price;
  #moneyInput;
  #jackpotInput;
  #bonusInput;
  #output;
  constructor() {
    this.#price = 1000;
    this.#moneyInput = 0;
    this.#jackpotInput = [];
    this.#bonusInput = 0;
    this.#output = "";
  }

  async run() {
    const inputParser = new ParseInput();
    const pickUpInstance = new PickUp();
    // 1. 입력
    // while 문을 분리하여 시도하였더니 동기 논블록킹 때문에 무한루프가 발생하여 반복되는 코드 패턴을 해결하기 어려웠음
    while (true) {
      try {
        this.#moneyInput = inputParser.parseMoney(await Console.readLineAsync(MESSAGE.money));
        break;
      } catch (e) {
        this.#output = `${this.#output}\n${e.message}`;
      }
    }
    for (let money = this.#moneyInput; money >= this.#price; money -= this.#price) {
      // 이런 순차 루프는 별로 좋지 않지만, foreach나 reduce로 바꿔보니 코드가 만만찮게 복잡하여 현행으로 유지함
      pickUpInstance.pick();
    }
    this.#output = `${this.#output}\n${pickUpInstance.getLottoArrays().length}개를 구매했습니다.`;
    this.#output = `${this.#output}\n${printLottoArray(pickUpInstance.getLottoArrays())}`;
    while (true) {
      try {
        this.#jackpotInput = inputParser.parseJackpot(await Console.readLineAsync(MESSAGE.jackpot));
        break;
      } catch (e) {
        this.#output = `${this.#output}\n${e.message}`;
      }
    }
    while (true) {
      try {
        this.#bonusInput = inputParser.parseBonus(await Console.readLineAsync(MESSAGE.bonus));
        break;
      } catch (e) {
        this.#output = `${this.#output}\n${e.message}`;
      }
    }
    // 2. 추첨 결과 산출
    pickUpInstance.setJackpot(this.#jackpotInput).setBonus(this.#bonusInput); // setter chaining
    const outputInstance = new FormatOutput(this.#moneyInput, pickUpInstance.checkJackpot());
    // 3. 출력
    this.#output = `${this.#output}\n${MESSAGE.result}\n${MESSAGE.line}`;
    this.#output = `${this.#output}${outputInstance.print()}`;
    Console.print(this.#output);
  }
}

export default App;
