import App from "../src/App";

describe("purchaseLottos 테스트", () => {
  test("금액에 맞는 로또 개수를 반환한다.", () => {
    const app = new App();
    const amount = 8000;
    const lottos = app.purchaseLottos(amount);
    expect(lottos.length).toBe(8);
  });
});
