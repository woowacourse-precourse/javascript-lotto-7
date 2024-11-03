import { MissionUtils } from "@woowacourse/mission-utils";

const { Console } = MissionUtils;
const { Random } = MissionUtils;

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

class App {
  async run() {
    const payment = await inputPayment();
    const ticketNumber = payment / 1000;
    Console.print(`${ticketNumber}개를 구매했습니다.`);
    const lottos = issueLottoTickets(ticketNumber);
    printLotto(lottos);
  }
}

export default App;
