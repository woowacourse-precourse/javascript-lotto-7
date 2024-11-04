import { validateWinningNumber } from "../src/validator/WinningNum";

describe("입력 로또 번호 테스트", () => {
  const notNumber = ["1ㅇ", , 13, 15, 17, 19, 20];

  test("로또 번호에 숫자가 아닌 문자가 들어가면 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumber(notNumber);
    }).toThrow("[ERROR]");
  });
});
