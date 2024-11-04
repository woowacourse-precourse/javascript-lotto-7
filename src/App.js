import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

export async function inputAmount() {
  const amount = await Console.readLineAsync("구입금액을 입력해 주세요.");
  return amount;
}

export function validateAmount(amount) {
  const PRICE_PER_LOTTO = 1000; // 로또 1개당 가격

  // 숫자인지 검사
  if (isNaN(amount) || amount <= 0) {
    throw new Error("[ERROR] 로또 금액은 0보다 큰 숫자 형태여야 합니다.")
  }

  // 1000원 단위인지 검사
  if (amount % PRICE_PER_LOTTO !== 0) {
    throw new Error("[ERROR] 로또 금액은 1,000원 단위이어야 합니다.")
  }
}

export function getLottoCount(amount) {
  const PRICE_PER_LOTTO = 1000;
  
  const numberOfLottos = amount / PRICE_PER_LOTTO;

  return numberOfLottos;
}

export function generateLottos(lottoCount) {
  const lottos = [];

  for (let i = 0; i < lottoCount; ++i) {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const lotto = new Lotto(sortedNumbers);
    lottos.push(lotto);
  }

  return lottos;
}

export function printLottos(lottoCount, lottos) {
  Console.print(`${lottoCount}개를 구매했습니다.`);
  lottos.forEach((lotto) => {
    Console.print(lotto.printNumbers());
  });
}

class App {
  async run() {}
}

export default App;
