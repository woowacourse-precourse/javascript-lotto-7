import LottoPrice from "../../src/GameSetting/LottoPrice.js";

describe("LottoPrice", () => {
  test.each([[-1000], [0], [null], [undefined]])(
    "자연수가 아닌 값 %p를 입력할 때 에러를 던진다",
    (input) => {
      expect(() => new LottoPrice(input)).toThrow("[ERROR]");
    }
  );

  test.each([[2500], [100]])(
    "1000으로 나눠지지 않을 때 에러를 던진다",
    (input) => {
      expect(() => new LottoPrice(input)).toThrow("[ERROR]");
    }
  );
});
