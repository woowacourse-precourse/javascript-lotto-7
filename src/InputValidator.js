import { MissionUtils } from "@woowacourse/mission-utils";

export const validateLottoNumbers = (numbers) => {
  const myNumbers = new Set(numbers);
  if (myNumbers.size !== numbers.length) {
    throw new Error("중복된 번호가 있습니다.");
  }
  if (numbers.length !== 6) {
    throw new Error("당첨 번호는 6개여야 합니다.");
  }
  if (numbers.some((num) => num < 1 || num > 9)) {
    throw new Error("모든 번호는 한 자리 숫자여야 합니다.");
  }
  return numbers;
};

export const collectLottoNumbers = async () => {
  let numbers = [];

  while (numbers.length < 6) {
    const input = await MissionUtils.Console.readLineAsync(
      "당첨 번호를 입력해 주세요."
    );
    const inputNumbers = input
      .split(",")
      .map(Number)
      .filter((num) => num >= 1 && num <= 9 && num < 10); // 유효한 한 자리 수만 필터링

    numbers = [...numbers, ...inputNumbers];

    try {
      validateLottoNumbers(numbers);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      numbers = Array.from(new Set(numbers)).slice(0, 6);
      continue;
    }
    if (numbers.length === 6) break;
  }

  return numbers;
};

export const collectBonusNumber = async () => {
  while (true) {
    const input = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요."
    );
    const bonusNumber = Number(input);

    if (bonusNumber >= 1 && bonusNumber <= 9) {
      return bonusNumber;
    } else {
      MissionUtils.Console.print(
        "보너스 번호는 1부터 9 사이의 한 자리 숫자여야 합니다."
      );
    }
  }
};
