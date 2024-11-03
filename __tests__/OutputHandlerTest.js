import OutputHandler from "../src/handler/OutputHandler.js";
import OutputView from "../src/views/OutputView.js";
import { LOTTO_RANK } from "../src/utils/GameConstants.js";

jest.mock("../src/views/OutputView.js");

describe("OutputHandler 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("당첨 통계 출력 테스트", () => {
    const results = { 3: 0, 4: 0, 5: 0, "5B": 0, 6: 1 };
    OutputHandler.showWinningStatisticsResult(results, 2_000_000_000, 3000);

    expect(OutputView.showWinningStatisticsResult).toHaveBeenCalled();
    expect(OutputView.showWinningMessage).toHaveBeenCalledWith(
      LOTTO_RANK.FIRST.message,
      1
    );
    expect(OutputView.showProfitRate).toHaveBeenCalledWith("66666666.7");
  });
});
