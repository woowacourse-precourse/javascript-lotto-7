import { Console } from "@woowacourse/mission-utils";

class LottoResult {
  #firstPlace = 0;
  #secondPlace = 0;
  #thirdPlace = 0;
  #fourthPlace = 0;
  #fifthPlace = 0;
  #reward = 0;

  constructor(results) {
    this.#processResults(results); 
  }

  #processResults(results) {  
    for (const result of results) {
      this.#updatePlaceCount(result);  
      this.#updateReward(result);      
    }
  }

  #updatePlaceCount(result) {
    if (result.score === 3) this.#fifthPlace += 1;
    if (result.score === 4) this.#fourthPlace += 1;
    if (result.score === 5 && !result.isBonus) this.#thirdPlace += 1;
    if (result.score === 5 && result.isBonus) this.#secondPlace += 1;
    if (result.score === 6) this.#firstPlace += 1;
  }

  #updateReward(result) {
    if (result.score === 3) this.#reward += 5000;
    if (result.score === 4) this.#reward += 50000;
    if (result.score === 5 && !result.isBonus) this.#reward += 1500000;
    if (result.score === 5 && result.isBonus) this.#reward += 30000000;
    if (result.score === 6) this.#reward += 2000000000;
  }

  printWinningResult() {
    Console.print(`3개 일치 (5,000원) - ${this.#fifthPlace}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#fourthPlace}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#thirdPlace}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#secondPlace}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.#firstPlace}개`);
  }

  printRateOfReturn(paidMoney) {
    Console.print(
      `총 수익률은 ${((this.#reward / paidMoney) * 100).toFixed(1)}%입니다.`
    );
  }
}

export default LottoResult;
