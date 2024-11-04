import { validateBonusNumber } from "../src/Validation/validateBonusNumber.js";
import { ERROR_MESSAGES } from "../src/Error/Error.js";
import { MissionUtils } from "@woowacourse/mission-utils";

// 에러 메시지 출력을 확인하기 위한 헬퍼 함수
const runErrorLogTest = (testCase) => {
  const { description, bonusNumber, winningNumbers, expected, errorLog } =
    testCase;

  test(description, () => {
    // MissionUtils.Console.print를 모킹하여 에러 메시지 확인
    MissionUtils.Console.print = jest.fn();

    const result = validateBonusNumber(bonusNumber, winningNumbers);

    if (errorLog) {
      expect(MissionUtils.Console.print).toHaveBeenCalledWith(
        `[ERROR] ${errorLog}`
      );
      expect(result).toBe(false);
    } else {
      expect(result).toEqual(expected); // 유효한 입력에 대한 반환 값 확인
    }
  });
};

// 테스트 케이스 정의
const validateBonusNumberTestCases = [
  {
    description:
      "유효한 보너스 번호와 당첨 번호가 주어지면 올바른 보너스 번호를 반환해야 합니다.",
    bonusNumber: "7",
    winningNumbers: [1, 2, 3, 4, 5, 6],
    expected: 7,
  },
  {
    description: `범위를 벗어난 보너스 번호(45 초과)가 주어지면 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED}" 에러 메시지를 출력해야 합니다.`,
    bonusNumber: "46",
    winningNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED,
  },
  {
    description: `보너스 번호가 숫자가 아닐 경우 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED}" 에러 메시지를 출력해야 합니다.`,
    bonusNumber: "abc",
    winningNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED,
  },
  {
    description: `보너스 번호가 당첨 번호와 중복되면 "${ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER}" 에러 메시지를 출력해야 합니다.`,
    bonusNumber: "3",
    winningNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER,
  },
  {
    description: `당첨 번호가 배열이 아닌 경우 "${ERROR_MESSAGES.lotteryNumber.INVALID_ARRAY}" 에러 메시지를 출력해야 합니다.`,
    bonusNumber: "7",
    winningNumbers: "1, 2, 3, 4, 5, 6", // 배열이 아닌 경우
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.INVALID_ARRAY,
  },
  {
    description: `보너스 번호가 0이거나 음수일 경우 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED}" 에러 메시지를 출력해야 합니다.`,
    bonusNumber: "0",
    winningNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED,
  },
  {
    description: `보너스 번호가 음수일 경우 "${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED}" 에러 메시지를 출력해야 합니다.`,
    bonusNumber: "-1",
    winningNumbers: [1, 2, 3, 4, 5, 6],
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED,
  },
];

// 각 테스트 케이스에 대해 `runErrorLogTest` 실행
validateBonusNumberTestCases.forEach(runErrorLogTest);
