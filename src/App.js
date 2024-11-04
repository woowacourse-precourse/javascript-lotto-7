import InputHandler from "./utils/InputHandler.js"
import InputValidator from "./utils/InputValidator.js";
import Lotto from './Lotto.js';
import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.inputValidator = new InputValidator();
    this.lottos = []; // Lotto 객체들을 저장할 배열.
  }
  async run() {
    try{
      const purchaseCost = await this.getPurchaseCost();
      const purchasedLotto = await this.purchaseLotto(purchaseCost);
    } catch(error){
      console.error('무슨에러인고:',error);
    }
  }

  async getPurchaseCost(){
    const cost = await this.inputHandler.getInput("구입금액을 입력해 주세요. \n");
    return await this.inputValidator.validateCost(cost);
  }

  async purchaseLotto(cost) {
    const purchaseNumber = Number(cost)/1000; //로또 구매 장수
    Console.print(`${purchaseNumber}개를 구매했습니다.`);
    for(let i = 0; i<purchaseNumber; i++){
      const arr = Random.pickUniqueNumbersInRange(1,45,6);
      arr.sort((a, b) => a - b); // 오름차순으로 정렬
      const lotto = new Lotto(arr);
      this.lottos.push(lotto);
      Console.print(arr);
    }
  }
}

export default App;
