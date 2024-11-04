import Money from "../src/lotto/class/Money";
import { LOTTO_PRICE } from "../src/lotto/constants";
import { getLogSpy, mockQuestions } from "./ApplicationTest";

describe("Money 클래스 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현

  test.each(["a", {}, true, () => {}, NaN])(
    "로또 구입 예산은 숫자가 아니면(%s) 에러가 발생한다.",
    (notNumber) => {
      expect(() => {
        new Money(notNumber);
      }).toThrow("[ERROR]");
    }
  );

  test(`로또 구입 예산은 ${LOTTO_PRICE}원 이상이 아니면 예외가 발생한다.`, () => {
    expect(() => {
      new Money(LOTTO_PRICE - 1);
    }).toThrow("[ERROR]");
  });

  test("로또 구입 예산은 Number 객체의 범위를 초과하면 예외가 발생한다.", () => {
    expect(() => {
      new Money(Number.MAX_SAFE_INTEGER + 1);
    }).toThrow("[ERROR]");
  });

  test(`로또 구입 예산은 ${LOTTO_PRICE}원 단위가 아니면 예외가 발생한다.`, () => {
    expect(() => {
      new Money(LOTTO_PRICE + LOTTO_PRICE * 0.1);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성

  test.each([
    ["구입 금액이 숫자가 아니면 예외가 발생한다.", NaN, LOTTO_PRICE],
    ["구입 금액이 양수가 아니면 예외가 발생한다.", 0, LOTTO_PRICE],
    ["로또 가격이 숫자가 아니면 예외가 발생한다.", LOTTO_PRICE, NaN],
    ["로또 가격이 양수가 아니면 예외가 발생한다.", LOTTO_PRICE, 0],
  ])("로또 구매 시, %s", (_, money, price) => {
    expect(() => {
      Money.pay2Lotto(money, price);
    }).toThrow("[ERROR]");
  });

  test("사용자가 잘못된 값을 입력하면 정상적인 값을 받을 때까지 반복한다.", async () => {
    // given
    const PASS_MONEY = LOTTO_PRICE;
    const INPUTS = [
      Number.MAX_SAFE_INTEGER + 1,
      0,
      -1,
      "문자",
      NaN,
      LOTTO_PRICE - 1,
    ];
    const logSpy = getLogSpy();

    mockQuestions([...INPUTS, PASS_MONEY]);

    // when
    await Money.createPurchaseLotto();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});
