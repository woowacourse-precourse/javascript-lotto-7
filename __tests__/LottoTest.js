import { ERROR_MESSAGE } from "../src/constants/Constants.js";
import Lotto from "../src/model/Lotto.js";

const LOTTO_NUMBERS = [
  [8, 21, 23, 41, 42, 43],
  [3, 5, 11, 16, 32, 38],
  [7, 11, 16, 35, 36, 44],
  [1, 8, 11, 31, 41, 42],
  [13, 14, 16, 38, 42, 45],
  [7, 11, 30, 40, 42, 43],
  [2, 13, 22, 32, 38, 45],
  [1, 3, 5, 14, 22, 45],
];
const BONUS_NUMBERS = 7;

describe("로또 클래스 테스트", () => {
  test("로또 번호에 숫자가 아닌 문자가 포함된 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 8, "a"]);
    }).toThrow(ERROR_MESSAGE.ANSWER_NUMBER_ERROR);
  });

  test("로또 번호의 개수가 6개가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.ANSWER_COUNT_ERROR);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.ANSWER_DUPLICATE_ERROR);
  });

  test("로또 번호가 1~45 사이 숫자가 아닌 경우 예외가 발생한다", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 71]);
    }).toThrow(ERROR_MESSAGE.ANSWER_RANGE_ERROR);
  });

  test("당첨 통계를 계산하고 출력한다", () => {
    const lotto = new Lotto([1, 3, 5, 2, 13, 22]);
    const expectAnswer = [1, 1, 0, 0, 0];
    const testAnswer = lotto.countWinningStats(LOTTO_NUMBERS, BONUS_NUMBERS);
    expect(testAnswer).toEqual(expectAnswer);
  });
});
