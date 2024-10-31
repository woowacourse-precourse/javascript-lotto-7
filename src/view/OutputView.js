import printResult from "../utils/outputHandler.js";

class OutputView {
  static printLottoCount(count) {
    printResult(`${count}개를 구매했습니다.`);
  }

  static printLottoNumbers(lottos) {
    const lottoNumbers = lottos.map(
      (lotto) => `[${lotto.getNumbers().join(",")}]`
    );
    printResult(lottoNumbers.join("\n"));
  }
}

export default OutputView;
