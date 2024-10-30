import Exception from "../src/exceptionHandling";

describe("사용자에게 입력받은 값에 대한 테스트", () => {
  test("구입 금액이 1000 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      let checkPrice = new Exception();
      checkPrice.validatePrice(1234);
    }).toThrow("[ERROR]");
  });
});
