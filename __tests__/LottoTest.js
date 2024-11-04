import Lotto from "../src/Lotto";
import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성ㅋ
});

describe("로또 애플리케이션 에러 유효성 검사", () => {
  test("budget이 숫자가 아닌 경우", async () => {
    const invalidBudgets = ["1000a", "budget"];

    for (const budget of invalidBudgets) {
      mockQuestions([budget]);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR] 금액은 숫자만 입력 가능합니다.");
    }
  });

  test("budget이 0 이하인 경우", async () => {
    const invalidBudgets = ["-1000", "0"];

    for (const budget of invalidBudgets) {
      mockQuestions([budget]);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR] 금액은 0 이상이어야 합니다.");
    }
  });

  test("budget이 1000으로 나누어 떨어지지 않는 경우", async () => {
    const invalidBudgets = ["1500", "2500", "999"];

    for (const budget of invalidBudgets) {
      mockQuestions([budget]);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR] 로또 금액과 나누어 떨어지지 않습니다.");
    }
  });

  test("winnum이 숫자가 아닌 경우", async () => {
    const invalidWinnums = [
      "1,2,a,4,5,6",
      "7,8,9,10,x,12"
    ];

    for (const winnum of invalidWinnums) {
      mockQuestions(["1000", winnum]);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR] 당첨번호는 숫자여야 합니다.");
    }
  });

  test("winnum이 1 ~ 45 범위 밖인 경우", async () => {
    const invalidWinnums = [
      "0,2,3,4,5,6",
      "1,2,3,46,5,6"
    ];

    for (const winnum of invalidWinnums) {
      mockQuestions(["1000", winnum]);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR] 당첨번호는 1 ~ 45 범위 안에 있어야 합니다.");
    }
  });

  test("winnum이 중복된 경우", async () => {
    const invalidWinnums = [
      "1,2,3,4,4,6",
      "7,7,8,9,10,11"
    ];

    for (const winnum of invalidWinnums) {
      mockQuestions(["1000", winnum]);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR] 당첨번호는 중복될 수 없습니다.");
    }
  });

  test("bonusnum이 숫자가 아닌 경우", async () => {
    const invalidBonusnums = ["x", "abc"];
    const validWinnum = "1,2,3,4,5,6";

    for (const bonusnum of invalidBonusnums) {
      mockQuestions(["1000", validWinnum, bonusnum]);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR] 보너스번호는 숫자여야 합니다.");
    }
  });

  test("bonusnum이 1 ~ 45 범위 밖인 경우", async () => {
    const invalidBonusnums = ["0", "46"];
    const validWinnum = "1,2,3,4,5,6";

    for (const bonusnum of invalidBonusnums) {
      mockQuestions(["1000", validWinnum, bonusnum]);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR] 보너스번호는 1 ~ 45 범위 안에 있어야 합니다.");
    }
  });

  test("bonusnum이 winnum과 중복되는 경우", async () => {
    const bonusnum = "5";
    const validWinnum = "1,2,3,4,5,6";

    mockQuestions(["1000", validWinnum, bonusnum]);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR] 보너스번호는 당첨번호와 중복될 수 없습니다.");
  });
});

describe("로또 애플리케이션 정상 동작 검사", () => {
  test("budget이 1000 단위로 올바른 경우", async () => {
    const validBudgets = ["1000", "2000", "5000"];

    for (const budget of validBudgets) {
      mockQuestions([budget, "1,2,3,4,5,6", "7"]);
      const app = new App();
      await expect(app.run()).resolves.not.toThrow();
    }
  });

  test("winnum이 올바른 숫자 배열일 경우", async () => {
    const validWinnums = [
      "1,2,3,4,5,6",
      "7,8,9,10,11,12",
      "30,31,32,33,34,35"
    ];

    for (const winnum of validWinnums) {
      mockQuestions(["1000", winnum,"45"]);
      const app = new App();
      await expect(app.run()).resolves.not.toThrow();
    }
  });

  test("bonusnum이 winnum과 중복되지 않고 올바른 범위일 경우", async () => {
    const validInputs = [
      ["1000", "1,2,3,4,5,6", "7"],
      ["2000", "7,8,9,10,11,12", "13"],
      ["3000", "30,31,32,33,34,35", "36"]
    ];

    for (const [budget, winnum, bonusnum] of validInputs) {
      mockQuestions([budget, winnum, bonusnum]);
      const app = new App();
      await expect(app.run()).resolves.not.toThrow();
    }
  });
});
