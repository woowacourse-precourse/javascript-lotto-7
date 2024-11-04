import LottoPrice from "../../src/GameSetting/LottoPrice.js";

describe("LottoPrice", () => {
  test.each([
    ["1000", 1000],
    ["12000", 12000],
  ])("올바른 입력값을 전달할 때 숫자를 반환한다", (input, expected) => {
    let lottoPrice = new LottoPrice(input);
    expect(lottoPrice.getLottoPrice()).toEqual(expected);
  });

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
