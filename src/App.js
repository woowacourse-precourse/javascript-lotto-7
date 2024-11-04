import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

export async function inputAmount() {
  const amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
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

export async function inputPrizeNumbers() {
  const numbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
  return numbers;
}

export function splitPrizeNumbers(numbers) {
  // 문자열 -> 숫자 전환 후 배열로 반환
  return numbers.split(",").map(Number);
}

export async function inputBonusNumber() {
  const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
  return parseInt(bonusNumber, 10); // 숫자로 변환하여 반환
}

export function validateBonusNumbers(bonusNumber, prizeNumbers) {
  // 숫자 범위 확인 (1~45)
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  }

  // 당첨 번호와 중복되는지 여부 확인
  if (prizeNumbers.includes(bonusNumber)) {
    throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
  }
}

export function checkLottoResult(userNumbers, prizeNumbers, bonusNumber) {
  // 1. 일치하는 번호 개수 확인
  const matchingCount = userNumbers.filter((number) => prizeNumbers.includes(number)).length;

  // 2. 보너스 번호 일치 여부 확인
  const hasBonus = userNumbers.includes(bonusNumber);

  // 3. 당첨 결과 반환
  if (matchingCount === 6) return 1; // 1등
  if (matchingCount === 5 && hasBonus) return 2; // 2등
  if (matchingCount === 5) return 3; // 3등
  if (matchingCount === 4) return 4; // 4등
  if (matchingCount === 3) return 5; // 5등
  return 6;
}

class App {
  async run() {}
}

export default App;
