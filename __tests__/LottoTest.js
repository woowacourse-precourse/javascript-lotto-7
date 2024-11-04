import { ERORR_MESSAGE } from "../src/constants/messages.js";
import Lotto from "../src/domain/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERORR_MESSAGE.MAX_NUMBER_COUNT);
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERORR_MESSAGE.DUPLICATE);
  });

  test("로또 번호가 오름차순으로 정렬된다.", () => {
    const lotto = new Lotto([3, 2, 1, 6, 5, 4]);
    expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("로또 번호가 1부터 45까지의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERORR_MESSAGE.OUT_OF_RANGE);
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});
