import { Console } from "@woowacourse/mission-utils";

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

class App {
  async run() {}
}

export default App;
