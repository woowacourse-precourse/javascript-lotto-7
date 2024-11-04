import LottoValidator from "../src/utils/LottoValidator.js";

describe("LottoValidator - 로또 번호 검증 로직", () => {
  test("로또 번호의 개수가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidator.validateLottoNumbers([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");

    expect(() => {
      LottoValidator.validateLottoNumbers([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidator.validateLottoNumbers([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호는 중복될 수 없습니다.");
  });

  test("로또 번호가 1부터 45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidator.validateLottoNumbers([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");

    expect(() => {
      LottoValidator.validateLottoNumbers([46, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  test("올바른 로또 번호를 입력한 경우 예외가 발생하지 않는다.", () => {
    expect(() => {
      LottoValidator.validateLottoNumbers([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });
});
