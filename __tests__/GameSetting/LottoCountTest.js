import LottoPrice from "../../src/GameSetting/LottoPrice.js";

describe("LottoPrice", () => {
  test.each([[1.4], [-2], [3.2], [undefined]])(
    "자연수가 아닌 값 %p를 입력할 때 에러를 던진다",
    (input) => {
      expect(() => new LottoPrice(input)).toThrow("[ERROR]");
    }
  );
});
