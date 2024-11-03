import { Console } from "@woowacourse/mission-utils";

async function validateAmount(amount) {
  if (isNaN(amount)) {
    throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
  }

  if (amount % 1000 !== 0) {
    throw new Error("[ERROR] 구입 금액은 1,000원으로 나누어 떨어져야 합니다.");
  }
}
export async function setAmount() {
  try {
    let amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    amount = Number(amount);
    await validateAmount(amount);

    return amount;
  } catch (error) {
    Console.print(error.message);
    return setAmount();
  }
}
