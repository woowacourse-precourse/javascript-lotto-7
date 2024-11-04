import Bet from "../src/Bet";
import { ERROR_BLANK, ERROR_MULTI_OF_1000, ERROR_NOT_A_NUMBER } from "../src/constants/errorConstants";

describe("베트 클래스 테스트", () => {
  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test.each([["    "], [""],[" "],["   "]])(
    "공백이 입력된 경우, 오류를 출력한다. %#",
    (input) => {
      expect(() => {
        new Bet(input);
      }).toThrow(ERROR_BLANK);
    }
  );

  test.each([["1000j"], ["이은호"],["lee1000"],["2000.01.23"]])(
    "숫자가 아닌 문자열이 입력된 경우 오류를 출력한다. %#",
    (input) => {
      expect(() => {
        new Bet(input);
      }).toThrow(ERROR_NOT_A_NUMBER);
    }
  );

  test.each([["999"], ["1001"],["1020"],["0"]])(
    "1000단위의 숫자가 아닐 경우 오류를 출력한다. %#",
    (input) => {
      expect(() => {
        new Bet(input);
      }).toThrow(ERROR_MULTI_OF_1000);
    }
  );
});
