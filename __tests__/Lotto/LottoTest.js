import Lotto from "../../src/Lotto/Lotto.js";
import ERROR_MESSAGE from '../../src/constants/errorMessage.js';

const INVALID_LOTTO_CASES = [
  { description: "로또 번호의 개수가 6개보다 적은 경우", numbers: [1, 2, 3, 4, 5], expectedError: ERROR_MESSAGE.LOTTO_NUMBER_OVER_COUNT },
  { description: "로또 번호에 중복된 숫자가 있는 경우", numbers: [1, 2, 3, 4, 5, 5], expectedError: ERROR_MESSAGE.LOTTO_NUMBER_DUPLICATE },
  { description: "로또 번호에 음수가 포함된 경우", numbers: [1, 2, 3, -4, 5, 6], expectedError: ERROR_MESSAGE.LOTTO_NUMBER_TOO_SMALL },
  { description: "로또 번호에 1보다 작은 숫자가 포함된 경우", numbers: [0, 2, 3, 4, 5, 6], expectedError: ERROR_MESSAGE.LOTTO_NUMBER_TOO_SMALL },
  { description: "로또 번호에 45보다 큰 숫자가 포함된 경우", numbers: [1, 2, 3, 4, 5, 46], expectedError: ERROR_MESSAGE.LOTTO_NUMBER_TOO_LARGE },
  { description: "로또 번호에 정수가 아닌 값이 포함된 경우", numbers: [1, 2, 3, 4.135, 5, 6], expectedError: ERROR_MESSAGE.LOTTO_NUMBER_NOT_INTEGER },
  { description: "로또 번호에 문자열이 포함된 경우", numbers: [1, 2, "3ad314", 4, 5, 6], expectedError: ERROR_MESSAGE.LOTTO_NUMBER_IMPOSSIBLE },
  { description: "로또 번호에 특수문자가 포함된 경우", numbers: [1, 2, 3, 4, 5, "$"], expectedError: ERROR_MESSAGE.LOTTO_NUMBER_IMPOSSIBLE },
  { description: "로또 번호에 null이 포함된 경우", numbers: [1, 2, 3, 4, 5, null], expectedError: ERROR_MESSAGE.LOTTO_NUMBER_IMPOSSIBLE },
  { description: "로또 번호에 undefined가 포함된 경우", numbers: [1, 2, 3, 4, 5, undefined], expectedError: ERROR_MESSAGE.LOTTO_NUMBER_IMPOSSIBLE },
  { description: "로또 번호가 빈 배열인 경우", numbers: [], expectedError: ERROR_MESSAGE.LOTTO_NUMBER_OVER_COUNT }
];




describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test.each(INVALID_LOTTO_CASES)(
    "예외 발생: $description",
    ({ numbers, expectedError }) => {
      expect(() => {
        new Lotto(numbers);
      }).toThrow(expectedError);
    }
  );
});
