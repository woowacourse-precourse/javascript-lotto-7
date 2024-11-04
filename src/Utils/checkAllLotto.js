import checkWinning from './checkWinning.js';

const checkAllLotto = (lottoBundle, basicNumbers, bonusNumber, statistic) => {
  lottoBundle.getList().forEach((lotto) => {
    statistic.addWinningCount(
      checkWinning(lotto.getNumbers(), basicNumbers, bonusNumber)
    );
  });
};

export default checkAllLotto;
