import { Lotto } from "../src/lotto/index.js";
import { LOTTO_MESSAGES } from "../src/constants/index.js";

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
  const { INVALID_NON_POSITIVE_INTEGER, INVALID_RANGE_NUMBER } = LOTTO_MESSAGES;
  test.each([
    {
      numbers: [1, 2, 3, 4, 5, 1.1],
      errorMessage: INVALID_NON_POSITIVE_INTEGER,
      description: "양의 정수가 아닌 숫자가 포함된 경우",
    },
    {
      numbers: [1, 2, 3, 4, 5, 46],
      errorMessage: INVALID_RANGE_NUMBER,
      description: "로또 번호 범위 밖의 숫자가 포함된 경우",
    },
  ])("new Lotto(numbers)를 실행하면 에러 메세지와 함께 에러가 발생한다.", ({ numbers, errorMessage }) => {
    expect(() => new Lotto(numbers)).toThrow(errorMessage);
  });
});
