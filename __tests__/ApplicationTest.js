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

describe("로또 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("기본 로또 구입 테스트", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(["8000", "1,2,3,4,5,6", "7"]);

    // when
    const app = new App();
    await app.run();

    // then
    const logs = [
      "8개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[13, 14, 16, 38, 42, 45]",
      "[7, 11, 30, 40, 42, 43]",
      "[2, 13, 22, 32, 38, 45]",
      "[1, 3, 5, 14, 22, 45]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 62.5%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 구입시 숫자가 아닌 문자입력", async () => {
    await runException("1000j");
  });

  test("로또 숫자 잘못입력 예외 확인 - 빈값입력", async () => {
    // given
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(["", ...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 숫자를 입력해주세요.")
    );
  });

  test("로또 숫자 잘못입력 예외 확인 - 0입력", async () => {
    // given
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(["0", ...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 숫자를 입력해주세요.")
    );
  });

  test("로또 숫자 잘못입력 예외 확인 - 1000안나뉘는 숫자입력", async () => {
    // given
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(["1235", ...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 1000 단위에 맞춰주세요.")
    );
  });

  test("당첨 번호 잘못 입력 예외 확인 - 빈문자", async () => {
    // given
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,,6", "1,2,3,4,5,6", "7"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 숫자를 입력해주세요.")
    );
  });

  test("당첨 번호 잘못 입력 예외 확인 - 1-45이외숫자", async () => {
    // given
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,123,6", "1,2,3,4,5,6", "7"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 1-45사이의 숫자를 입력해주세요.")
    );
  });

  test("당첨 번호 잘못 입력 예외 확인 - 문자입력", async () => {
    // given
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,ㅁ,6", "1,2,3,4,5,6", "7"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 숫자를 입력해주세요.")
    );
  });

  test("당첨 번호 잘못 입력 예외 확인 - 갯수 부족", async () => {
    // given
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,6", "1,2,3,4,5,6", "7"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 로또 번호는 6개여야 합니다.")
    );
  });

  test("당첨 번호 잘못 입력 예외 확인 - 중복이 존재", async () => {
    // given
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,6,6", "1,2,3,4,5,6", "7"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 중복된 숫자가 존재합니다.")
    );
  });

  test("보너스 번호 잘못 입력 예외 확인 - 중복이 존재", async () => {
    // given
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "1", "8"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 중복된 숫자가 존재합니다.")
    );
  });

  test("보너스 번호 잘못 입력 예외 확인 - 빈숫자 입력", async () => {
    // given
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "", "8"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 숫자를 입력해주세요.")
    );
  });

  test("보너스 번호 잘못 입력 예외 확인 - 문자 입력", async () => {
    // given
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "ㅁ", "8"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions([...INPUT_NUMBERS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 숫자를 입력해주세요.")
    );
  });
});
