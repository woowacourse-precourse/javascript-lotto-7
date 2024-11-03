import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const { Console } = MissionUtils;
const { Random } = MissionUtils;

const PRIZE_TABLE = {
  3: { money: 5000, description: "3개 일치" },
  4: { money: 50000, description: "4개 일치" },
  5: { money: 1500000, description: "5개 일치" },
  "5+bonus": { money: 30000000, description: "5개 일치, 보너스 볼 일치" },
  6: { money: 2000000000, description: "6개 일치" },
};

function isNumber(input) {
  if (isNaN(input)) {
    throw new Error("[ERROR] 숫자를 입력하세요.");
  }
}

function isValidPaymentUnit(input) {
  if (input % 1000 !== 0) {
    throw new Error("[ERROR] 금액을 1000원 단위로 입력해주세요.");
  }
}

function validatePayment(input) {
  isNumber(input);
  isValidPaymentUnit(input);
}

async function inputPayment() {
  let payment;
  while (true) {
    payment = Number(await Console.readLineAsync("구입금액을 입력해 주세요."));
    try {
      validatePayment(payment);
      return payment;
    } catch (error) {
      Console.print(error.message);
    }
  }
}

function issueLottoTickets(ticketCount) {
  const lottos = [];
  let numbers;
  for (let i = 0; i < ticketCount; i++) {
    numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottos.push(new Lotto(numbers));
  }
  return lottos;
}

function printLotto(lottos) {
  lottos.map((lotto) => {
    let numbers = lotto.getLottoNumbers();
    Console.print(`[${numbers.join(", ")}]`);
  });
}

async function inputPrizeLottoNumber() {
  let numbers;
  while (true) {
    numbers = (await Console.readLineAsync("당첨 번호를 입력해 주세요."))
      .split(",")
      .map(Number);
    try {
      let prizeNumber = new Lotto(numbers);
      return prizeNumber;
    } catch (error) {
      Console.print(error.message);
    }
  }
}

function isDuplicateBonus(bonusNumber, prizeNumbers) {
  if (prizeNumbers.includes(bonusNumber)) {
    throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
  }
}

function isBonusNumberInRange(bonusNumber) {
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error("[ERROR] 보너스 번호는 1에서 45 사이여야 합니다.");
  }
}

function validateBonusNumber(bonusNumber, prizeNumbers) {
  isNumber(bonusNumber);
  isBonusNumberInRange(bonusNumber);
  isDuplicateBonus(bonusNumber, prizeNumbers);
}

async function inputBonusNumber(prizeNumbers) {
  let bonusNumber;
  while (true) {
    bonusNumber = Number(
      await Console.readLineAsync("보너스 번호를 입력해 주세요.")
    );
    try {
      validateBonusNumber(bonusNumber, prizeNumbers);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
    }
  }
}

function initializePrizeResults() {
  return new Map([
    [3, 0],
    [4, 0],
    [5, 0],
    ["5+bonus", 0],
    [6, 0],
  ]);
}

function countPrizeNumbers(issueNumbers, prizeNumbers) {
  return issueNumbers.filter((v) => prizeNumbers.includes(v)).length;
}

function updatePrizeResults(prizeResults, prizeCount, hasBonus) {
  if (prizeCount === 5 && hasBonus) {
    prizeResults.set("5+bonus", prizeResults.get("5+bonus") + 1);
  } else if (prizeCount >= 3) {
    prizeResults.set(prizeCount, prizeResults.get(prizeCount) + 1);
  }
}

function checkPrize(lottos, prizeLotto, bonusNumber) {
  const prizeResults = initializePrizeResults();
  const prizeNumbers = prizeLotto.getLottoNumbers();

  lottos.forEach((lotto) => {
    const issueNumbers = lotto.getLottoNumbers();
    const hasBonus = issueNumbers.includes(bonusNumber);
    const prizeCount = countPrizeNumbers(issueNumbers, prizeNumbers);

    updatePrizeResults(prizeResults, prizeCount, hasBonus);
  });

  return prizeResults;
}

function printPrizeResults(prizeResults) {
  Console.print("당첨 통계");
  Console.print("---");

  for (const [key, count] of prizeResults) {
    Console.print(
      `${PRIZE_TABLE[key].description} (${PRIZE_TABLE[
        key
      ].money.toLocaleString()}원) - ${count}개`
    );
  }
}

function getTotalPrize(prizeResults) {
  let totalPrize = 0;
  for (const [key, count] of prizeResults) {
    totalPrize += PRIZE_TABLE[key].money * count;
  }
  return totalPrize;
}

function calculateProfit(totalPrize, payment) {
  return (totalPrize / payment) * 100;
}

class App {
  async run() {
    const payment = await inputPayment();
    const ticketNumber = payment / 1000;
    Console.print(`${ticketNumber}개를 구매했습니다.`);

    const lottos = issueLottoTickets(ticketNumber);
    printLotto(lottos);

    const prizeNumberLotto = await inputPrizeLottoNumber();
    const prizeNumbers = prizeNumberLotto.getLottoNumbers();

    const bonusNumberLotto = await inputBonusNumber(prizeNumbers);

    const prizeResults = checkPrize(lottos, prizeNumberLotto, bonusNumberLotto);
    printPrizeResults(prizeResults);

    const totalPrizeMoney = getTotalPrize(prizeResults);
    const profit = calculateProfit(totalPrizeMoney, payment);
  }
}

export default App;
