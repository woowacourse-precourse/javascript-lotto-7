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

describe("로또 클래스 테스트", () => {
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

describe("입력 유효성 테스트", () => {
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
