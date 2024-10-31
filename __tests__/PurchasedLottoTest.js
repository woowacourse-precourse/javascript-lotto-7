import Output from "../src/Output.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("Output 클래스 출력 테스트", () => {
  let output;

  beforeEach(() => {
    jest.restoreAllMocks();

    const purchasedLottos = [
      [8, 21, 35, 10, 3, 15],
      [42, 19, 6, 33, 7, 23],
    ];
    const winningAndBonusNumber = [3, 8, 15, 21, 35, 10, 42];
    const totalLottoCount = 2;

    output = new Output(
      purchasedLottos,
      winningAndBonusNumber,
      totalLottoCount
    );
  });

  test("printSortedLottoNumbers는 올바른 로또 구매 개수와 번호를 출력해야 한다", () => {
    // given
    const logSpy = getLogSpy();

    // when
    output.printSortedLottoNumbers();

    // then
    expect(logSpy).toHaveBeenCalledWith("2개를 구매했습니다.");
    expect(logSpy).toHaveBeenCalledWith("[3, 8, 10, 15, 21, 35]");
    expect(logSpy).toHaveBeenCalledWith("[6, 7, 19, 23, 33, 42]");
  });

  test("로또 번호가 정렬되어 출력되는지 확인", () => {
    // given
    const logSpy = getLogSpy();

    // when
    output.printSortedLottoNumbers();

    // then
    expect(logSpy).toHaveBeenNthCalledWith(1, "2개를 구매했습니다.");
    expect(logSpy).toHaveBeenNthCalledWith(2, "[3, 8, 10, 15, 21, 35]");
    expect(logSpy).toHaveBeenNthCalledWith(3, "[6, 7, 19, 23, 33, 42]");
  });
});
