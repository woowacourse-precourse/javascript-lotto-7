import App from '../src/App.js';

describe("구현 과정 기능 단위 테스트", () => {
  test("사용자가 원하는 만큼의 로또가 발행되는지 확인", () => {
    const app = new App();
    const userLotto = app.makeUserLotto(8000);
    const uniqueArrays = new Set(userLotto.map(lotto => JSON.stringify(lotto)));
    expect(userLotto.length).toBe(8);
    expect(uniqueArrays.size === userLotto.length).toBe(true);
  })
})