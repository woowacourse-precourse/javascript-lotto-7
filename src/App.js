import Lotto from "./Lotto.js";
import { MissionUtils } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';
import { message, errorMassage } from "./info.js";

class App {
  constructor() {
    this.price = 0;
    this.nLotto = 0;
    this.bonusNumber = 0;
    this.generatedNumbers = [];
    this.correctNumber = null;
    this.result = { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '5b': 0, '6': 0 }
  }

  async run() {
    await this.inputPrice();
    let nofLotto = this.nLotto;

    while(nofLotto--) {
      this.generatedNumbers.push(this.generateRandomNumber());
    }
    
    await this.infoNLottoAndLottoNumbers();
    await this.inputNumberString();
    await this.inputBonusNumber();
    await this.printResult();
  }

  async inputPrice() {
    let valid = false;
    while (!valid) {
      try {
        this.price = await Console.readLineAsync(message.price);
        await Console.print('');
        this.isValidPrice(this.price);
        this.nLotto = this.price / 1000;
        valid = true;
      } catch (error) {
        await Console.print(error.message);
      }
    }
  }

async inputNumberString() {
  let valid = false;
  while (!valid) {
    try {
      const input = await Console.readLineAsync(message.correctNumber);
      await Console.print('');
      this.correctNumber = new Lotto(input.split(','));
      valid = true;
    } catch (error) {
      await Console.print(error.message);
    }
  }
}

  async inputBonusNumber() {
    let valid = false;
    while (!valid) {
      try {
        this.bonusNumber = await Console.readLineAsync(message.bonusNumber);
        this.isValidBonusNumber(this.bonusNumber);
        await Console.print('');
        valid = true;
      } catch (error) {
        await Console.print(error.message);
      }
    }
  }

  isValidPrice(price) {
    if(isNaN(Number(price))) {
      throw new Error(errorMassage.price.isNotNumber);
    }
    
    if(price < 0 || price % 1000 !== 0) {
      throw new Error(errorMassage.price.invalidNumber);
    }
  }


  isValidBonusNumber(bonusNumber) {
    if(isNaN(Number(bonusNumber))) {
      throw new Error(errorMassage.bonusNumber.isNotNumber);
    }

    if(bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(errorMassage.bonusNumber.invalidRange);
    }
  
    this.correctNumber.getNumbers().forEach((number) => {
      if(Number(number) === Number(bonusNumber)) {
        throw new Error(errorMassage.bonusNumber.isNotUniqueNumber);
      }
    });
  }

  generateRandomNumber() {
    const newLotto = new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
    return newLotto;
  }

  async infoNLottoAndLottoNumbers() {
    await Console.print(this.nLotto + "개를 구매했습니다.");
    this.generatedNumbers.forEach(async (LottoObject) => {
      await LottoObject.getNumbersInString();
    });
    await Console.print('');
  }

  async setMatchedResult() {
    this.generatedNumbers.forEach((lottoObject) => {
      const generatedLotto = lottoObject.getNumbers();
      let count = 0; let bonusFlag = false;

      [...(this.correctNumber.getNumbers())].forEach((cnum, i) => {
        if(generatedLotto.includes(Number(cnum))) { count++; }
      });

      if(count === 5 && generatedLotto.includes(Number(this.bonusNumber))) 
        bonusFlag = true;

      if(bonusFlag && count === 5)
        this.result[`${count}b`] += 1;
      else 
        this.result[`${count}`] += 1;
    });
  }

  async printResult() {
    await Console.print('당첨 통계');
    await Console.print('---');
    await this.setMatchedResult();
    const indices = ['3', '4', '5', '5b', '6'];
    const money = [5000, 50000, 1500000, 30000000, 2000000000];
    let sum = 0;

    indices.forEach(async (idx, i) => {
      let count = this.result[`${idx}`];
      sum = sum + money[i] * count;
      await Console.print(message.match[idx] + count + '개');
    });

    const ratio = ((sum / this.price) * 100);
    await Console.print("총 수익률은 " + ratio.toFixed(1) + "%입니다.");
  }
}

export default App;