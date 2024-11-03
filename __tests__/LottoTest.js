import ValidateLotto from "../src/validate/ValidateLotto.js";

describe("로또 클래스 테스트", () => {
  test.each([
    [["1", "2", "3", "4", "5", "A"]],
    [["로또", "AB", "\\", "?", "*"]],
    [[null, undefined, "", "\n", " ", "雷"]],
  ])("로또 번호가 숫자가 아닌 경우", async (lotto) => {
    expect(() => {
      ValidateLotto.validateIsNumber(lotto);
    }).toThrow("[ERROR]");
  });

  test.each([[["1", "2", "3", "4", "5", ""]], [["", "", "", "", "", ""]]])(
    "로또 번호의 갯수가 6개가 아닌 경우",
    async (lotto) => {
      expect(() => {
        ValidateLotto.validateIsNull(lotto);
      }).toThrow("[ERROR]");
    }
  );

  test.each([[["1", "2", "3", "4", "5"]], [["1", "2", "3", "4", "5", "6", "7"]]])(
    "로또 번호의 갯수가 6개가 아닌 경우",
    async (lotto) => {
      expect(() => {
        ValidateLotto.validateLottoLength(lotto);
      }).toThrow("[ERROR]");
    }
  );

  test.each([[["1", "2", "3", "4", "5", "5"]], [["2", "2", "3", "4", "5", "6"]]])(
    "로또 번호가 중복인 경우",
    async (lotto) => {
      expect(() => {
        ValidateLotto.validateLottoDup(lotto);
      }).toThrow("[ERROR]");
    }
  );

  test.each([
    [["0", "1", "2", "3", "4", "5"]],
    [["41", "42", "43", "44", "45", "46"]],
    [["-10", "-444", "812", "2000", "10000", "-7777"]],
  ])("로또 번호가 1~45 사이가 아닌 경우", async (lotto) => {
    expect(() => {
      ValidateLotto.validateLottoRange(lotto);
    }).toThrow("[ERROR]");
  });
});
