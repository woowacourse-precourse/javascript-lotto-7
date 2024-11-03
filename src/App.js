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
const getLottoCount = (lottoBuyPrice) =>
  Number(lottoBuyPrice) / ONE_LOTTO_PRICE;

const makeLottos = (lottoCount) =>
  Array.from({ length: lottoCount }, () => {
    const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b,
    );
    return new Lotto(lotto);
  });

class App {
  async run() {
    const lottoBuyPrice = await prompt(
      '구입금액을 입력해 주세요.\n',
      validateLottoBuyPrice,
    );

    const lottoCount = getLottoCount(lottoBuyPrice);
    Console.print(`\n${lottoCount}개를 구매했습니다.`);

    const myLottos = makeLottos(lottoCount);
  }
}

export default App;
