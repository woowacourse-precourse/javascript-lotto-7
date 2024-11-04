import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const runException = async (input) => {
    // given
    const logSpy = getLogSpy();
  
    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];
  
    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([input, ...INPUT_NUMBERS_TO_END]);
  
    // when
    const app = new App();
    await app.run();
  
    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  };

describe("로또 구매 금액 테스트", () => {
    const failCase = [
      { testName: "실수 입력", price: 1000.0 },
      {
        testName: "문자열 입력",
        price: "1000",
      },
      {
        testName: "공백 입력",
        price: "",
      },
      { testName: "1000원 단위가 아닌 숫자 입력", price: 1010 },
    ];
    failCase.forEach(({ testName, price }) => {
      test(testName, async () => {
        await runException(price);
      });
    });
  });
  
  describe("당첨 번호 입력 테스트", () => {
    const failCases = [
      { testName: "쉼표 먼저 입력", winningNumbers: ",1,2,3,4,5,6" },
      { testName: "숫자 6자리 초과", winningNumbers: "1,2,3,4,5,6,7" },
      {
        testName: "쉽표 포함 입력 길이가 17 초과 ",
        winningNumbers: "1,22,33,41,35,36,37",
      },
      { testName: "1~45 범위를 벗어난 숫자 입력", winningNumbers: "12,66,2,3,4,5" },
      { testName: "쉼표 외 다른 구분자 입력", winningNumbers: "1;2;3;4;5;6" },
      { testName: "쉼표와 다른 구분자 혼합", winningNumbers: "1,2,3,4;5,6" },
      { testName: "중복된 숫자 입력", winningNumbers: "11,22,11,4,5,6" },
    ];
  
    failCases.forEach(({ testName, winningNumbers }) => {
      test(`${testName}`, async () => {
        await runException(["8000", winningNumbers]);
      });
    });
  });
  
  describe("보너스 번호 입력 테스트", () => {
    const failCases = [
      { testName: "실수 입력", bonusNumber: 10.0 },
      { testName: "문자열 입력", bonusNumber: "열" },
      { testName: "1~45 범위를 벗어난 숫자 입력", bonusNumber: 80 },
      {
        testName: "보너스 번호가 당첨 번호와 중복된 경우",
        bonusNumber: "6",
      },
    ];
  
    failCases.forEach(({ testName, bonusNumber }) => {
      test(`${testName}`, async () => {
        await runException(["8000", "1,2,3,4,5,6", bonusNumber]);
      });
    });
  });