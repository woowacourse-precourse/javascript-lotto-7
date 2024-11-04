import App, { 
  validateAmount, 
  getLottoCount, 
  generateLottos, 
  printLottos 
} from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";

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

describe("validateAmount 테스트", () => {
  test("유효한 금액 입력", () => {
    expect(() => validateAmount(5000).not.toThrow()); // 1000원 단위 금액 정상 입력
  });

  test("0 이하의 금액 입력 시 오류 발생", () => {
    expect(() => validateAmount(0)).toThrow("[ERROR] 로또 금액은 0보다 큰 숫자 형태여야 합니다.");
    expect(() => validateAmount(-1000)).toThrow("[ERROR] 로또 금액은 0보다 큰 숫자 형태여야 합니다.");
  });

  test("숫자가 아닌 입력 시 오류 발생", () => {
    expect(() => validateAmount("1000won")).toThrow("[ERROR] 로또 금액은 0보다 큰 숫자 형태여야 합니다.");
    expect(() => validateAmount("이천")).toThrow("[ERROR] 로또 금액은 0보다 큰 숫자 형태여야 합니다.");
  });

  test("1000원 단위가 아닌 금액 입력 시 오류 발생", () => {
    expect(() => validateAmount("1500")).toThrow("[ERROR] 로또 금액은 1,000원 단위이어야 합니다.");
    expect(() => validateAmount("9876")).toThrow("[ERROR] 로또 금액은 1,000원 단위이어야 합니다.");
  });
});

// 로또 개수 계산 테스트
describe("getLottoCount 테스트", () => {
  test("입력된 금액에 따라 로또 개수를 정확히 계산한다.", () => {
    expect(getLottoCount(5000)).toBe(5);
    expect(getLottoCount(7000)).toBe(7);
  });
})

// 로또 번호 생성 테스트
describe("generateLottos 테스트", () => {
  beforeEach(() => {
    // 테스트에 사용할 랜덤 숫자 설정
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6]);
  });

  test("주어진 로또 개수만큼 로또를 생성한다.", () => {
    const lottoCount = 5;
    const lottos = generateLottos(lottoCount);
    expect(lottos.length).toBe(lottoCount);

    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
      expect(lotto.printNumbers()).toEqual("[1, 2, 3, 4, 5, 6]");
    });
  });
});

// 로또 출력 테스트
describe("printLottos 테스트", () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(MissionUtils.Console, "print").mockImplementation();
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  test("로또 수량 및 번호를 콘솔에 올바르게 출력한다.", () => {
    const lottoCount = 3;
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
      new Lotto([13, 14, 15, 16, 17, 18]),
    ];

    printLottos(lottoCount, lottos);

    expect(logSpy).toHaveBeenCalledWith("3개를 구매했습니다.");
    expect(logSpy).toHaveBeenCalledWith("[1, 2, 3, 4, 5, 6]");
    expect(logSpy).toHaveBeenCalledWith("[7, 8, 9, 10, 11, 12]");
    expect(logSpy).toHaveBeenCalledWith("[13, 14, 15, 16, 17, 18]");
  })
})

describe("로또 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

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

  test("예외 테스트", async () => {
    await runException("1000j");
  });
});
