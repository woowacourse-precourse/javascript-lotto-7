import generateLotto from "../src/lotto/generateLotto";
import Lotto from "../src/Lotto";

describe("generateLotto 함수 테스트", () => {
  test("로또 생성 및 반환", () => {
    const lotto = generateLotto();
    expect(lotto).toBeInstanceOf(Lotto);
  });
});
