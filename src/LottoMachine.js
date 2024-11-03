import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { Lotto }  from "./Lotto.js";

export class LottoMachine {
  constructor() {
    this.lottos = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.purchaseAmount = 0;
  }

  start() {
    this.promptPurchaseAmount();
  }

  async promptPurchaseAmount() {
    const amount = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    this.purchaseAmount = Number(amount);
    try{
        if (isNaN(this.purchaseAmount) || this.purchaseAmount % 1000 !== 0) {
            throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
        }
        this.issueLottos();
    }catch(error){
        Console.print(error.message);
        await this.promptPurchaseAmount();
    }
  }

  issueLottos() {
    const count = this.purchaseAmount / 1000;
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
    for (let i = 0; i < count; i++) {
      const lotto = Lotto.generate(); 
      this.lottos.push(lotto);
      MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`);
    }
    this.promptWinningNumbers();
  }

  validateWinningNumbers(numbers) {
    numbers.forEach(element => {
        if (isNaN(element)) throw new Error("[ERROR] 당첨 번호는 중복되지 않는 6개 숫자여야 합니다.");
    });
    if (numbers.length !== 6 || new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 당첨 번호는 중복되지 않는 6개 숫자여야 합니다.");
    }
    if (!numbers.every(num => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 당첨 번호는 1에서 45 사이여야 합니다.");
    }
  }

  async promptBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.');
    const bonus = Number(input);
    try {
        this.validateBonusNumber(bonus);
        this.bonusNumber = bonus;
        this.checkResults();
    } catch (error) {
        MissionUtils.Console.print(error.message);
        await this.promptBonusNumber();
    };
  }
}
export default LottoMachine;
