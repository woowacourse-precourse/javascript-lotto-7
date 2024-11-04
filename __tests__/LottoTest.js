import Lotto from "../src/components/Lotto";
import { ERROR_MESSAGES, LOTTO_COAST_UNIT } from "../src/constant";

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

  test("1부터 45 사이의 숫자가 아닌 숫자가 들어오면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([-1, 2, 3, 4, 55, 5]);
    }).toThrow(ERROR_MESSAGES.NOT_IN_RANGE);
  });

  test("구입금액이 양수가 아니면 에러가 발생한다.", async () => {
    expect(() => {
      const invalidAmount = "-1000";

      expect(() => {
        new Lotto(invalidAmount);
      }).toThrow(ERROR_MESSAGES.COAST_MUST_BE_POSITIVE);
    });
  });

  test("구입금액이 1000원 단위가 아니면 에러가 발생한다.", async () => {
    expect(() => {
      const invalidAmount = "2400";

      expect(() => {
        new Lotto(invalidAmount);
      }).toThrow(ERROR_MESSAGES.COAST_UNIT(LOTTO_COAST_UNIT));
    });
  });

  test("구입금액이 숫자가 아니면 에러가 발생한다.", async () => {
    expect(() => {
      const invalidAmount = "만원";

      expect(() => {
        new Lotto(invalidAmount);
      }).toThrow(ERROR_MESSAGES.COAST_WITH_NUMBER);
    });
  });
});
