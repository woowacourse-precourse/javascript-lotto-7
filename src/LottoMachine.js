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
}
export default LottoMachine;
