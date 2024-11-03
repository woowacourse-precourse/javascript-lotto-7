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

  test.each([
    [[6, false], { 1: 1, 2: 0, 3: 0, 4: 0, 5: 0 }],
    [[5, true], { 1: 0, 2: 1, 3: 0, 4: 0, 5: 0 }],
    [[5, false], { 1: 0, 2: 0, 3: 1, 4: 0, 5: 0 }],
    [[4, false], { 1: 0, 2: 0, 3: 0, 4: 1, 5: 0 }],
    [[3, false], { 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 }],
  ])(
    "로또 일치 개수와 보너스볼 일치 여부를 함께 정상적으로 판별 가능한지 확인한다.",
    (userLotto, matchInfo) => {
      const userLottoInfo = new UserLottoInfo(1000);
      userLottoInfo.saveMatchInfo(userLotto[0], userLotto[1]);
      expect(userLottoInfo.matchInfo).toStrictEqual(matchInfo);
    }
  );
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
