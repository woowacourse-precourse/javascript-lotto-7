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

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([...input]);

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

  test('사용자 입력 테스트(구입 금액)', async () => {
    const app = new App();
    const input = ['1000'];
    mockQuestions(input);
    await app.setUserMoney();
    expect(app.getUserMoney()).toBe(1000);
  });

  test('사용자 입력 테스트(당첨 번호)', async () => {
    const app = new App();
    const input = ['1,2,3,4,5,6'];
    const output = [1, 2, 3, 4, 5, 6];
    mockQuestions(input);
    await app.setWinningNumbers();
    expect(app.getWinningNumbers()).toStrictEqual(output);
  });

  test('사용자 입력 테스트(보너스 번호)', async () => {
    const app = new App();
    const input = ['1,2,3,4,5,6', '7'];
    mockQuestions(input);
    await app.setWinningNumbers();
    await app.setBonusNumber();
    expect(app.getBonusNumber()).toBe(7);
  })

  test('사용자 입력 테스트', async () => {
    const app = new App();
    const input = ['1000', '1,2,3,4,5,6', '7'];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    mockQuestions(input);
    await app.setUserMoney();
    await app.setWinningNumbers();
    await app.setBonusNumber();
    expect(app.getUserMoney()).toBe(1000);
    expect(app.getWinningNumbers()).toStrictEqual(winningNumbers);
    expect(app.getBonusNumber()).toBe(7);
  })

  test('로또 추첨 테스트', async () => {
    const app = new App();
    const input = ['7000', '1,2,3,4,5,6', '7'];
    const prizeCountResult = [1,1,1,1,1,2];
    const totalPrizeMoney = 2031560000;
    mockRandoms([
      [1,2,3,4,5,6],
      [1,2,3,4,5,7],
      [1,2,3,4,5,8],
      [1,2,3,4,8,9],
      [1,2,3,8,9,10],
      [1,2,3,8,9,10],
      [11,12,13,14,15,16],
    ]);
    mockQuestions(input);
    await app.setUserMoney();
    await app.setWinningNumbers();
    await app.setBonusNumber();
    app.setUserLotteries(app.publishUserLotteries());
    app.drawUserLotteries();
    expect(app.getPrizeCount()).toStrictEqual(prizeCountResult);
    expect(app.getWinningMoneySum()).toBe(totalPrizeMoney);
  })

  test("기능 테스트", async () => {
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
});

describe("로또 예외 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test.each([
    '1001',
    '0',
    '1000a',
    'a1000',
    '10a00',
    '-1000',
    '',
    null,
    '1000👍',
    '1000 '
  ])('사용자 입력 테스트(구입 금액)', async (input) => {
    const data = [input, '1000','1,2,3,4,5,6', '7'];
    await runException(data);
  });

  test.each([
    '',
    null,
    '0,1,2,3,4,5',
    '-1,1,2,3,4,5',
    '1,2,3,4,5,46',
    '0.1,0.2,0.3,0.4,0.5,0.6',
    '1,2,3,4,5,6,7',
    '1;2;3;4;5;6',
    '1,2,3,4,5👍6',
    '1,2,3,4,5,👍6',
    '1,2,3,4,5,6 ',
    '1,2,3,4,5,5',
  ])('사용자 입력 테스트(당첨 번호)', async (input) => {
    const data = ['1000', input, '1,2,3,4,5,6', '7'];
    await runException(data);
  });

  test.each([
    '',
    null,
    '0.1',
    '0',
    '1a',
    'a1',
    '-1',
    '46',
    '1😊',
    '😊1',
    '1 ',
  ])('사용자 입력 테스트(보너스 번호)', async (input) => {
    const data = ['1000', '1,2,3,4,5,6', input, '7'];
    await runException(data);
  });

  test('중복 입력 테스트(보너스 번호)', async () => {
    const data = ['1000', '1,2,3,4,5,6', '1', '7'];
    await runException(data);
  });
});
