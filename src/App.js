import { Console, Random } from '@woowacourse/mission-utils';
import { validateLottoBuyPrice } from './validateFunctions.js';
import Lotto from './Lotto.js';

const prompt = async (message, validation) => {
  const input = await Console.readLineAsync(message);
  if (validation(input)) {
    return input;
  }
  return prompt(message, validation);
};

const ONE_LOTTO_PRICE = 1000;
const makeLottoCount = (lottoBuyPrice) =>
  Number(lottoBuyPrice) / ONE_LOTTO_PRICE;

const makeLottos = (lottoCount) =>
  Array.from({ length: lottoCount }, () => {
    const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b,
    );
    return new Lotto(lotto);
  });

class App {
  constructor() {
    this.lottoBuyPrice = null;
    this.lottoCount = null;
    this.myLottos = null;
    this.lottoAnswerNumbers = null;
  }

  async run() {
    await this.getLottoBuyPrice();
    this.getLottoCount();
    this.printMyLottos();
    await this.getLottoAnswerNumbers();
  }

  async getLottoBuyPrice() {
    const lottoBuyPrice = await prompt(
      '구입금액을 입력해 주세요.\n',
      validateLottoBuyPrice,
    );
    this.lottoBuyPrice = lottoBuyPrice;
  }

  getLottoCount() {
    const lottoCount = makeLottoCount(this.lottoBuyPrice);
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    this.lottoCount = lottoCount;
  }

  printMyLottos() {
    const myLottos = makeLottos(this.lottoCount);
    for (let i = 0; i < this.lottoCount; i++) {
      Console.print(`[${myLottos[i].getLottoNumbers().join(', ')}]`);
    }
    Console.print('');
  }

  async getLottoAnswerNumbers() {
    const lottoAnswerNumbers = await prompt(
      '당첨 번호를 입력해 주세요.\n',
      null,
    );
    this.lottoAnswerNumbers = lottoAnswerNumbers;
  }
}

export default App;
