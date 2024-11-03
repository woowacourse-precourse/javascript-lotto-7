import { UserLottoInfo } from "../src/features/lotto/UserLottoInfo";

/**
 * @description UserLottoInfo 클래스 테스트의 경우
 * Validator를 통해 정상적인 입력값이 들어왔을 경우를 가정하고 진행합니다.
 */
describe("사용자 로또 정보 클래스 테스트", () => {
  test("구매 입력이 들어왔을 경우 해당 금액을 바탕으로 로또 개수 판별한다", () => {
    const INPUT_PRICE = 14000;
    const userLotto = new UserLottoInfo(INPUT_PRICE);
    expect(userLotto.lottoCount).toBe(14);
  });
});
