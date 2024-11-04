import { Console } from "@woowacourse/mission-utils";

export async function getPurchaseAmount() {
  const input = await Console.readLineAsync("구입 금액을 입력해 주세요:\n");
  const amount = Number(input);

  if (isNaN(amount) || amount % 1000 !== 0) {
    throw new Error("[ERROR] 금액은 1,000으로 나뉘어 떨어져야합니다.");
  }

  return amount;
}

export async function getWinningNumbers() {
  const input = await Console.readLineAsync(
    "당첨 번호를 입력해 주세요 (쉼표로 구분):\n"
  );
  const numbers = input.split(",").map(Number);

  numbers.forEach(checkNumberValidity);

  return numbers;
}

export async function getBonusNumber() {
  const input = await Console.readLineAsync("보너스 번호를 입력해 주세요:\n");
  const bonusNumber = Number(input);

  checkNumberValidity(bonusNumber);

  return bonusNumber;
}

function checkNumberValidity(number) {
  if (isNaN(number) || number < 1 || number > 45) {
    throw new Error("[ERROR] 숫자는 1~45 사이의 수여야 합니다.");
  }
}
