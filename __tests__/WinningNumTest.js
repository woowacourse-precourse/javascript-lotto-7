import { validateWinningNumber } from "../src/validator/WinningNum";

describe("입력 로또 번호 테스트", () => {
  const notNumber = ["1ㅇ", , 13, 15, 17, 19, 20];
  const notInRangeNumbers = [
    [1, 2, 3, 4, 5, 0],
    [-1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 66],
  ];
  const notUniqueNumber = [1, 1, 2, 3, 4, 5];

  test("로또 번호에 숫자가 아닌 문자가 들어가면 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumber(notNumber);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복값이 들어가면 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumber(notUniqueNumber);
    }).toThrow("[ERROR]");
  });

  test.each(notInRangeNumbers)(
    "로또 번호는 1~45 이외의 범위가 포함되면 예외가 발생한다.",
    (lottoNumbers) => {
      expect(() => {
        validateWinningNumber(lottoNumbers);
      }).toThrow("[ERROR]");
    }
  );
});
