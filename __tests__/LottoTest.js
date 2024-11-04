import { ERROR_BLANK, ERROR_DUPLICATE, ERROR_LENGTH_IS_NOT_6, ERROR_NOT_A_NUMBER } from "../src/constants/errorConstants";
import Input from "../src/Inputs";
import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test.each([[""], [" "], ["1, "]])(
    "공백이 입력된 경우 예외가 발생한다.",
    (input) => {
      expect(() => {
        new Input().parseNumbers(input);
      }).toThrow(ERROR_BLANK);
    }
  );

  test.each([["1,s"], ["s,이"], ["이,은,호  "]])(
    "숫자가 아닌 문자열이 입력된 경우 예외가 발생한다.",
    (input) => {
      expect(() => {
        new Input().parseNumbers(input);
      }).toThrow(ERROR_NOT_A_NUMBER);
    }
  );

  test.each([[[1, 2, 3, 4, 5, 6, 7]], [[]], [[1,2,3]]])(
    "로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.",
    (input) => {
      expect(() => {
        new Lotto(input);
    }).toThrow(ERROR_LENGTH_IS_NOT_6);
    }
  );

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_DUPLICATE);
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});
