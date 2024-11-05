import { validateWinningNumbers } from "../src/Validation/validateWinningNumbers.js";
import { ERROR_MESSAGES } from "../src/Error/Error.js";
import { MissionUtils } from "@woowacourse/mission-utils"; 

// 에러 메시지 출력을 확인하기 위한 헬퍼 함수
const runErrorLogTest = (testCase) => {
  const { description, input, expected, errorLog } = testCase;

  test(description, () => {
    // MissionUtils.Console.print를 모킹하여 에러 메시지 확인
    MissionUtils.Console.print = jest.fn();

    const result = validateWinningNumbers(input);

    if (errorLog) {
      expect(MissionUtils.Console.print).toHaveBeenCalledWith(`[ERROR] ${errorLog}`);
      expect(result).toBe(false);
    } else {
      expect(result).toEqual(expected); // 유효한 입력에 대한 반환 값 확인
    }
  });
};

// 테스트 케이스 정의
const validateWinningNumbersTestCases = [
  {
    description: '유효한 입력값 "1, 2, 3, 4, 5, 6"을 입력하면 올바른 배열을 반환해야 합니다.',
    input: "1, 2, 3, 4, 5, 6",
    expected: [1, 2, 3, 4, 5, 6],
  },
  {
    description: '공백이 포함된 입력 "10 , 20, 30 ,40,  45, 5 "을 입력하면 올바른 배열을 반환해야 합니다.',
    input: "10 , 20, 30 ,40,  45, 5 ",
    expected: [10, 20, 30, 40, 45, 5],
  },
  {
    description: `6개 미만의 숫자 입력 시 "[ERROR] ${ERROR_MESSAGES.lotteryNumber.ONLY_6_NUMBERS}" 에러 메시지를 출력해야 합니다.`,
    input: "1, 2, 3, 4, 5",
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_6_NUMBERS,
  },
  {
    description: `6개 초과의 숫자 입력 시 "[ERROR] ${ERROR_MESSAGES.lotteryNumber.ONLY_6_NUMBERS}" 에러 메시지를 출력해야 합니다.`,
    input: "1, 2, 3, 4, 5, 6, 7",
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_6_NUMBERS,
  },
  {
    description: `중복된 숫자가 포함된 경우 "[ERROR] ${ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER}" 에러 메시지를 출력해야 합니다.`,
    input: "1, 2, 3, 3, 5, 6",
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER,
  },
  {
    description: `숫자가 아닌 값이 포함된 경우 "[ERROR] ${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED}" 에러 메시지를 출력해야 합니다.`,
    input: "1, 2, a, 4, 5, 6",
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED,
  },
  {
    description: `범위를 벗어난 숫자(45 초과)가 포함된 경우 "[ERROR] ${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED}" 에러 메시지를 출력해야 합니다.`,
    input: "1, 2, 3, 4, 5, 46",
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED,
  },
  {
    description: `범위를 벗어난 숫자(1 미만)가 포함된 경우 "[ERROR] ${ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED}" 에러 메시지를 출력해야 합니다.`,
    input: "0, 2, 3, 4, 5, 6",
    expected: false,
    errorLog: ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED,
  },
];

// 각 테스트 케이스에 대해 `runErrorLogTest` 실행
validateWinningNumbersTestCases.forEach(runErrorLogTest);