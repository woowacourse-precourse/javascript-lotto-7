import Lotto from "./Lotto.js";
import { MissionUtils } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

const message = {
  price: "구매금액을 입력해 주세요.\n",
  lottoNumber: "당첨 번호를 입력해 주세요.\n",
  bonusNumber: "보너스 번호를 입력해 주세요.\n",
}

const errorMassage = {
  price: {
    isNotNumber: "[ERROR] 로또 가격은 숫자이어야 합니다",
    invalidNumber: "[ERROR] 로또 가격은 1000으로 나누어 떨어져야 합니다",
  },
  bonusNumber: {
    isNotNumber: "[ERROR] 보너스 번호는 숫자이어야 합니다",
    invalidRange: "[ERROR] 보너스 번호는 1과 45사이의 숫자이어야합니다",
    isNotUniqueNumber: "[ERROR] 보너스 번호는 로또번호와 겹치지 않는 숫자이어야 합니다",
  }
}

class App {
  constructor() {
    this.price = 0;
    this.nLotto = 0;
    this.numbers = [];
    this.bonusNumber = 0;
    this.generatedNumbers = [];
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
    const lotto = new Lotto(this.numbers);
  }

  async inputPrice() {
    this.price = await Console.readLineAsync(message.price);
    Console.print('');
    this.isValidPrice(this.price);
    this.nLotto = this.price / 1000;
  }

  async inputNumberString() { /// 유일하게 검증하지 않고 Lotto.js에서 검증코드를 작성한다.
    const input = await Console.readLineAsync(message.lottoNumber);
    Console.print('');
    this.numbers = input.split(',');
  }

  async inputBonusNumber() {
    this.bonusNumber = await Console.readLineAsync(message.bonusNumber);
    this.isValidBonusNumber(this.bonusNumber);
  }

  isValidPrice(price) {
    /// price는 1000으로 나누어 떨어져야 함
    /// 0 또는 양의 정수임
    if(isNaN(Number(price))) { /// 숫자가 아님
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

    if(bonusNumber < 1 || bonusNumber > 45) { /// 로또번호 범위 넘어섬
      throw new Error(errorMassage.bonusNumber.invalidRange);
    }

    this.numbers.forEach((number) => {
      if(number === bonusNumber) {
        throw new Error(errorMassage.bonusNumber.isNotUniqueNumber);
      }
    });
  }

  generateRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort();
  }

  async infoNLottoAndLottoNumbers() {
    await Console.print(this.nLotto + "개를 구매했습니다.");
    this.generatedNumbers.forEach(async (numbers) => {
      const numberString = '[' + numbers.join(', ') + ']';
      await Console.print(numberString);
    });
    await Console.print('');
  }
}

export default App;
