import App from "../src/App.js";
import Lotto from "../src/Lotto.js";
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

describe.skip("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현

  test("로또 번호에 숫자가 아닌 다른 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 'a', 'b', 4, 6]);
    }).toThrow("[ERROR] 로또 번호는 숫자이어야 합니다")
  });

  test("로또 번호에 0이하 46이상의 값이 있으면 예외가 발생한다", () => {
    expect(() => {
      new Lotto([-1, 3, 5, 100, 4, 200]);
    }).toThrow("[ERROR] 로또 번호는 1에서 45사이의 수입니다");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호 각각은 유일한 수입니다");
  });
});

// mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

describe.skip("입력 유효성 테스트", () => {
  test("입력받은 로또 가격이 숫자가 아닌 경우 예외가 발생한다.", async () => {  
    mockQuestions(["abc", "1,2,3,4,5,6", "7"]);
    
    await expect(async () => {
      const app = new App();
      await app.run();
    }).rejects.toThrow("[ERROR] 로또 가격은 숫자이어야 합니다");
  });

  test("입력받은 로또 가격이 1000으로 나누어 떨어지지 않는 경우 예외가 발생한다.", async () => {
    mockQuestions(["1200", "1,2,3,4,5,6", "7"]);
    
    await expect(async () => {
      const app = new App();
      await app.run();
    }).rejects.toThrow("[ERROR] 로또 가격은 1000으로 나누어 떨어져야 합니다");
  });

  test("입력받은 보너스 번호는 숫자가 아닌 경우 예외가 발생한다.", async () => {
    mockQuestions(["1000", "1,2,3,4,5,6", "a"]);
    
    await expect(async () => {
      const app = new App();
      await app.run();
    }).rejects.toThrow("[ERROR] 보너스 번호는 숫자이어야 합니다");
  });

  test("보너스 번호가 1과 45사이의 숫자가 아닌 경우 예외가 발생한다.", async () => {
    mockQuestions(["1000", "1,2,3,4,5,6", "50"]);
    
    await expect(async () => {
      const app = new App();
      await app.run();
    }).rejects.toThrow("[ERROR] 보너스 번호는 1과 45사이의 숫자이어야합니다");
  });

  test("입력받은 보너스 번호가 입력받은 로또번호와 겹치는 경우 예외가 발생한다.", async () => {
    mockQuestions(["1000", "1,2,3,4,5,6", "5"]);
    
    await expect(async () => {
      const app = new App();
      await app.run();
    }).rejects.toThrow("[ERROR] 보너스 번호는 로또번호와 겹치지 않는 숫자이어야 합니다");
  });
});

describe.skip("숫자 매칭 결과 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("3개 매칭 경우", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [1, 2, 3, 10, 11, 12],
      [1, 2, 3, 10, 11, 12],
      [1, 2, 3, 10, 11, 12],
      [1, 2, 3, 10, 11, 12],
      [1, 2, 3, 10, 11, 12],
      [1, 2, 3, 10, 11, 12],
      [1, 2, 3, 10, 11, 12],
      [1, 2, 3, 10, 11, 12],
    ]);
    mockQuestions(["8000", "1,2,3,4,5,6", "7"]);

    // when
    const app = new App();
    await app.run();

    // then
    const logs = [
      "8개를 구매했습니다.",
      "[1, 2, 3, 10, 11, 12]",
      "[1, 2, 3, 10, 11, 12]",
      "[1, 2, 3, 10, 11, 12]",
      "[1, 2, 3, 10, 11, 12]",
      "[1, 2, 3, 10, 11, 12]",
      "[1, 2, 3, 10, 11, 12]",
      "[1, 2, 3, 10, 11, 12]",
      "[1, 2, 3, 10, 11, 12]",
      "3개 일치 (5,000원) - 8개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      // "총 수익률은 62.5%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("5b개 매칭 경우", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 7],
    ]);
    mockQuestions(["8000", "1,2,3,4,5,6", "7"]);

    // when
    const app = new App();
    await app.run();

    // then
    const logs = [
      "8개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 7]",
      "[1, 2, 3, 4, 5, 7]",
      "[1, 2, 3, 4, 5, 7]",
      "[1, 2, 3, 4, 5, 7]",
      "[1, 2, 3, 4, 5, 7]",
      "[1, 2, 3, 4, 5, 7]",
      "[1, 2, 3, 4, 5, 7]",
      "[1, 2, 3, 4, 5, 7]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 8개",
      "6개 일치 (2,000,000,000원) - 0개",
      // "총 수익률은 62.5%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("6개 매칭 경우", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [1, 2, 3, 4, 7, 12],
      [1, 2, 3, 4, 7, 12],
      [1, 2, 3, 4, 7, 12],
      [1, 2, 3, 4, 7, 12],
      [1, 2, 3, 4, 7, 12],
      [1, 2, 3, 4, 7, 12],
      [1, 2, 3, 4, 7, 12],
      [1, 2, 3, 4, 7, 12],
    ]);
    mockQuestions(["8000", "1,2,3,4,7,12", "14"]);

    // when
    const app = new App();
    await app.run();

    // then
    const logs = [
      "8개를 구매했습니다.",
      "[1, 2, 3, 4, 7, 12]",
      "[1, 2, 3, 4, 7, 12]",
      "[1, 2, 3, 4, 7, 12]",
      "[1, 2, 3, 4, 7, 12]",
      "[1, 2, 3, 4, 7, 12]",
      "[1, 2, 3, 4, 7, 12]",
      "[1, 2, 3, 4, 7, 12]",
      "[1, 2, 3, 4, 7, 12]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 8개",
      // "총 수익률은 62.5%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("테스트 1", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [1, 2, 3, 4, 7, 12], /// 6
      [1, 2, 3, 4, 20, 21],/// 4
      [1, 2, 3, 4, 20, 22],/// 4
      [1, 2, 3, 4, 30, 35],///  4
      [1, 2, 10, 12, 14, 15], /// 3
      [1, 2, 3, 4, 7, 12], /// 6
      [1, 2, 3, 7, 8, 15], /// 4
      [1, 2, 3, 4, 7, 16] /// 5b
    ]);
    mockQuestions(["8000", "1,2,3,4,7,12", "16"]);

    // when
    const app = new App();
    await app.run();

    // then
    const logs = [
      "8개를 구매했습니다.",
      "[1, 2, 3, 4, 7, 12]",
      "[1, 2, 3, 4, 20, 21]",
      "[1, 2, 3, 4, 20, 22]",
      "[1, 2, 3, 4, 30, 35]",
      "[1, 2, 10, 12, 14, 15]",
      "[1, 2, 3, 4, 7, 12]",
      "[1, 2, 3, 7, 8, 15]",
      "[1, 2, 3, 4, 7, 16]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 4개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 2개",
      // "총 수익률은 62.5%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("모든 번호가 일치하지 않는 경우", async () => {
    const logSpy = getLogSpy();
  
    mockRandoms([
      [1, 2, 10, 11, 20, 21], // 매칭 없음
      [5, 9, 15, 18, 25, 30]  // 매칭 없음
    ]);
    mockQuestions(["2000", "7,8,12,14,16,19", "33"]);
  
    const app = new App();
    await app.run();
  
    const logs = [
      "2개를 구매했습니다.",
      "[1, 2, 10, 11, 20, 21]",
      "[5, 9, 15, 18, 25, 30]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
    ];
  
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  
  test("3개만 일치하는 경우", async () => {
    const logSpy = getLogSpy();
  
    mockRandoms([
      [1, 2, 3, 8, 12, 15],   // 3개 일치
      [1, 5, 6, 10, 15, 25]   // 3개 일치
    ]);
    mockQuestions(["2000", "1,2,3,4,5,6", "7"]);
  
    const app = new App();
    await app.run();
  
    const logs = [
      "2개를 구매했습니다.",
      "[1, 2, 3, 8, 12, 15]",
      "[1, 5, 6, 10, 15, 25]",
      "3개 일치 (5,000원) - 2개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
    ];
  
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  
  test("보너스 번호가 일치하지 않는 경우", async () => {
    const logSpy = getLogSpy();
  
    mockRandoms([
      [1, 2, 3, 4, 5, 10],   // 5개 일치, 보너스 불일치
    ]);
    mockQuestions(["1000", "1,2,3,4,5,6", "7"]);
  
    const app = new App();
    await app.run();
  
    const logs = [
      "1개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 10]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
    ];
  
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});