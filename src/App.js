import Lotto from "./Lotto.js";
import { MissionUtils } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

const message = {
  price: "구매금액을 입력해 주세요.\n",
  correctNumber: "당첨 번호를 입력해 주세요.\n",
  bonusNumber: "보너스 번호를 입력해 주세요.\n",
  match: {
    '3': '3개 일치 (5,000원) - ',
    '4': '4개 일치 (50,000원) - ',
    '5': '5개 일치 (1,500,000원) - ',
    '5b': '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    '6': '6개 일치 (2,000,000,000원) - '
  }
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
  },
}

class App {
  constructor() {
    this.price = 0;
    this.nLotto = 0;
    this.bonusNumber = 0;
    this.generatedNumbers = [];
    this.correctNumber = null;
    this.result = {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '5b': 0,
      '6': 0,
    }
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
        this.isValidPrice(this.price);  // 유효성 검사
        this.nLotto = this.price / 1000;
        valid = true;  // 유효한 입력이면 반복 종료
      } catch (error) {
        await Console.print(error.message);  // 에러 메시지 출력
      }
    }
  }

async inputNumberString() {
  let valid = false;
  while (!valid) {
    try {
      const input = await Console.readLineAsync(message.correctNumber);
      await Console.print('');
      this.correctNumber = new Lotto(input.split(','));  // Lotto 객체 생성 시 유효성 검사 발생
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