import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";
import LottoManager from "../src/LottoManager.js";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    print: jest.fn(),
  },
}));

describe("printLottoNumbers 메서드", () => {
  const lottoManager = new LottoManager();
  it("구매한 로또 번호를 출력해야 한다.", async () => {
    const userLottoNumbers = [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto([7, 8, 9, 10, 11, 12])];
    const lottoCount = userLottoNumbers.length;

    await lottoManager.printLottoNumbers(userLottoNumbers, lottoCount);

    expect(Console.print).toHaveBeenCalledWith(`\n${lottoCount}개를 구매했습니다.`);
    expect(Console.print).toHaveBeenCalledWith("[1, 2, 3, 4, 5, 6]\n[7, 8, 9, 10, 11, 12]");
  });
});
