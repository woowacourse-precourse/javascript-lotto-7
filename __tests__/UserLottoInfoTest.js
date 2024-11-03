import { UserLottoInfo } from "../src/features/lotto/UserLottoInfo";
import { printLottoCount } from "../src/utils/outputHandler";
import { getLogSpy } from "../src/utils/testUtils";

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

describe("사용자 로또 정보 관련 출력 테스트", () => {
  test("생성된 로또 출력", () => {
    const logSpy = getLogSpy();
    const INPUT_PRICE = 14000;
    const PRINT_MESSAGE = "14개를 구매했습니다.";
    const userLotto = new UserLottoInfo(INPUT_PRICE);
    printLottoCount(userLotto);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(PRINT_MESSAGE));
  });
});
