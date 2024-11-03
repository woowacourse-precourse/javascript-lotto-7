class LottoAnalyzer {
  static getBuyLottosInfo(lottos) {
    let result = `${lottos.length}개를 구매했습니다\n`;
    result += lottos
      .map((boughtLotto) => boughtLotto.getNumbersWithSquareBrackets())
      .join('\n');
    return result;
  }
}

export default LottoAnalyzer;
