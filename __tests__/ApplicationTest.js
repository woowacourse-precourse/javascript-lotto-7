import App, { 
  validateAmount, 
  getLottoCount, 
  generateLottos, 
  splitPrizeNumbers,
  validateBonusNumbers,
//  checkLottoResult,
  calculateProfitRate,
  PRIZES,
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

describe("validateBonusNumber 유효성 검사", () => {
  const prizeNumbers = [1, 2, 3, 4, 5, 6];

  test("유효한 보너스 번호가 통과된다.", () => {
    expect(() => validateBonusNumbers(7, prizeNumbers)).not.toThrow();
  });

  test("1~45 범위를 벗어난 보넛 번호가 예외를 발생시킨다.", () => {
    expect(() => validateBonusNumbers(0, prizeNumbers)).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    expect(() => validateBonusNumbers(46, prizeNumbers)).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => validateBonusNumbers(2, prizeNumbers)).toThrow("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
  });
});

describe("당첨 번호 입력, 분리 테스트", () => {
  // 1. splitPrizeNumbers 테스트
  test("입력된 당첨 번호를 배열로 분리한다.", () => {
    const input = "1,2,3,4,5,6";
    const result = splitPrizeNumbers(input);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

// describe("checkLottoResult 함수 테스트", () => {
//   const prizeNumbers = [1, 2, 3, 4, 5, 6];
//   const bonusNumber = 7;

//   test("1등: 6개 번호가 일치할 때", () => {
//     const userNumbers = [1, 2, 3, 4, 5, 6];
//     expect(checkLottoResult(userNumbers, prizeNumbers, bonusNumber)).toBe(1);
//   });

//   test("2등: 5개 번호가 일치하고 보너스 번호도 일치할 때", () => {
//     const userNumbers = [1, 2, 3, 4, 5, 7];
//     expect(checkLottoResult(userNumbers, prizeNumbers, bonusNumber)).toBe(2);
//   });

//   test("3등: 5개 번호만 일치할 때", () => {
//     const userNumbers = [1, 2, 3, 4, 5, 8];
//     expect(checkLottoResult(userNumbers, prizeNumbers, bonusNumber)).toBe(3);
//   });

//   test("4등: 4개 번호가 일치할 때", () => {
//     const userNumbers = [1, 2, 3, 4, 8, 9];
//     expect(checkLottoResult(userNumbers, prizeNumbers, bonusNumber)).toBe(4);
//   });

//   test("5등: 3개 번호가 일치할 때", () => {
//     const userNumbers = [1, 2, 3, 9, 10, 11];
//     expect(checkLottoResult(userNumbers, prizeNumbers, bonusNumber)).toBe(5);
//   });

//   test("낙첨: 2개 이하의 번호만 일치할 때", () => {
//     const userNumbers = [1, 2, 10, 11, 12, 13];
//     expect(checkLottoResult(userNumbers, prizeNumbers, bonusNumber)).toBe(6);
//   });
// });

describe("calculateProfitRate 함수 테스트", () => {
  test("당첨이 없는 경우 수익률이 0로 표시된다", () => {
    const results = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    const totalSpent = 10000; // 예: 10장 구매
    const profitRate = calculateProfitRate(results, totalSpent);
    expect(profitRate).toBe(0); // 수익률이 0인지 확인
  });

  test("1등 당첨 1회일 때 수익률을 계산한다", () => {
    const results = { 1: 1, 2: 0, 3: 0, 4: 0, 5: 0 };
    const totalSpent = 1000; // 예: 1장 구매
    const profitRate = calculateProfitRate(results, totalSpent);
    expect(profitRate).toBeCloseTo((PRIZES[1] / totalSpent) * 100, 1); // 소수점 첫째 자리까지 확인
  });

  test("3등 당첨 2회, 5등 당첨 1회일 때 수익률을 계산한다", () => {
    const results = { 1: 0, 2: 0, 3: 2, 4: 0, 5: 1 };
    const totalSpent = 3000; // 예: 3장 구매
    const expectedProfit = (PRIZES[3] * 2) + (PRIZES[5] * 1); // 예상 당첨 금액
    const profitRate = calculateProfitRate(results, totalSpent);
    expect(profitRate).toBeCloseTo((expectedProfit / totalSpent) * 100, 1);
  });

  test("모든 등수에서 1회씩 당첨될 때 수익률을 계산한다", () => {
    const results = { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 };
    const totalSpent = 1000 * 5; // 예: 5장 구매
    const expectedProfit = PRIZES[1] + PRIZES[2] + PRIZES[3] + PRIZES[4] + PRIZES[5];
    const profitRate = calculateProfitRate(results, totalSpent);
    expect(profitRate).toBeCloseTo((expectedProfit / totalSpent) * 100, 1);
  });
});

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
