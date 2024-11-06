import LottoGame from "../src/LottoGame";

describe("로또 게임 클래스 테스트", () => {
    test("로또 구입 금액에 숫자가 아닌 문자를 입력하면 예외가 발생한다.", () => {
      expect(() => {
        new LottoGame('1000원');
      }).toThrow("[ERROR]");
    });

    test("로또 구입 금액을 1000원 단위로 입력하지 않으면 예외가 발생한다.", () => {
      expect(() => {
        new LottoGame('100');
      }).toThrow("[ERROR]");
    });
  });