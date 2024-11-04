import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

// 등수별 상금
export const PRIZES = {
  [1]: 200000000,
  [2]: 30000000,
  [3]: 1500000,
  [4]: 50000,
  [5]: 5000,
};

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

export function printLottoResults(results) {
  const resultMessages = {
    5: `3개 일치 (${PRIZES[5].toLocaleString()}원) - ${results[5] || 0}개`,
    4: `4개 일치 (${PRIZES[4].toLocaleString()}원) - ${results[4] || 0}개`,
    3: `5개 일치 (${PRIZES[3].toLocaleString()}원) - ${results[3] || 0}개`,
    2: `5개 일치, 보너스 볼 일치 (${PRIZES[2].toLocaleString()}원) - ${results[2] || 0}개`,
    1: `6개 일치 (${PRIZES[1].toLocaleString()}원) - ${results[1] || 0}개`,
  };

  Object.values(resultMessages).forEach((message) => Console.print(message));
}

export function calculateProfitRate(results, totalSpent) {
  // 당첨된 각 등수별 상금 합산
  // Object.entries(results): ["등수", 당첨 개수]
  const totalPrize = Object.entries(results).reduce((acc, [rank, count]) => {
    const prizeRank = Number(rank);
    return acc + (PRIZES[prizeRank] * (count || 0));
  }, 0);

  const profitRate = ((totalPrize - totalSpent) / totalSpent) * 100;
  return parseFloat(profitRate.toFixed(1));
}

class App {
  async run() {
    // 1. 로또 금액 입력 받기
    let amount;

    while (true) {
      try {
        amount = await inputAmount();
        validateAmount(amount);
        break; // 유효한 입력이 들어오면 루프 종료
      } catch (error) {
        Console.print(error);
      }
    }
    
    // 2. 로또 수량, 번호 출력하기
    const lottoCount = getLottoCount(amount);
    const lottos = generateLottos(lottoCount);
    printLottos(lottoCount, lottos);

    // 3. 당첨 번호 입력하기
    let prizeLotto;
    
    while (true) {
      try {
        const inputNumbers = await inputPrizeNumbers();
        const prizeNumbers = splitPrizeNumbers(inputNumbers);
        prizeLotto = new Lotto(prizeNumbers);
        break; // 유효한 입력이 들어오면 루프 종료
      } catch (error) {
        Console.print(error);
      }
    }

    // 4. 보너스 번호 입력하기
    let bonusNumber;

    while (true) {
      try {
        bonusNumber = await inputBonusNumber();
        validateBonusNumbers(bonusNumber);
        break; // 유효한 입력이 들어오면 루프 종료
      } catch (error) {
        Console.print(error);
      }
    }

    // 5. 로또 번호 비교하기
  }
}

export default App;
