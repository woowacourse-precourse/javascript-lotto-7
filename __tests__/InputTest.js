import Lotto from "../src/Lotto";
import App from '../src/App.js';

describe("입력받은 값 처리 테스트", () => {

  test("구매 금액이 문자열이면 예외 발생", () => {
    expect(() => {
      const app = new App();
      app.checkMoney(Number("abc"));
    }).toThrow("[ERROR]");

  })

  test("구매 금액 1000원 단위 아니면 예외 발생", () => {
    expect(() => {
      const app = new App();
      app.checkMoney("123100");
    }).toThrow("[ERROR]");

  })

})