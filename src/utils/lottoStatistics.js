import printString from '../output/printString.js';
import RANK_CONFIG from '../constants/rankConfig.js';

export function calculateLottoStatistics(lottoList, winningLotto, lottoBonusNumber) {
  const lottoResults = [0, 0, 0, 0, 0];

  lottoList.forEach(lotto => {
    const rank = lotto.getWinningRank(winningLotto, lottoBonusNumber)
    if (rank !== null) {
      lottoResults[rank]++;
    }
  });
  return lottoResults;
}

export function printLottoStatistics(lottoResults) {
  const statisticsMessages = [
    `${RANK_CONFIG.FIFTH.COUNT}개 일치 (${RANK_CONFIG.FIFTH.PRIZE.toLocaleString()}원) - ${lottoResults[RANK_CONFIG.FIFTH.RANK]}개`,
    `${RANK_CONFIG.FOURTH.COUNT}개 일치 (${RANK_CONFIG.FOURTH.PRIZE.toLocaleString()}원) - ${lottoResults[RANK_CONFIG.FOURTH.RANK]}개`,
    `${RANK_CONFIG.THIRD.COUNT}개 일치 (${RANK_CONFIG.THIRD.PRIZE.toLocaleString()}원) - ${lottoResults[RANK_CONFIG.THIRD.RANK]}개`,
    `${RANK_CONFIG.SECOND.COUNT}개 일치, 보너스 볼 일치 (${RANK_CONFIG.SECOND.PRIZE.toLocaleString()}원) - ${lottoResults[RANK_CONFIG.SECOND.RANK]}개`,
    `${RANK_CONFIG.FIRST.COUNT}개 일치 (${RANK_CONFIG.FIRST.PRIZE.toLocaleString()}원) - ${lottoResults[RANK_CONFIG.FIRST.RANK]}개`,
  ];

  // 각 통계 메시지를 개별적으로 출력
  statisticsMessages.forEach(message => {
    printString(message);
  });
}

export function lottoProfitRate(purchasePrice, lottoResults){
  const lottoProfit = calculateProfit(lottoResults);
  const profitRate = (lottoProfit / purchasePrice) * 100;
return parseFloat(profitRate.toFixed(2));
}

export function calculateProfit(lottoResults) {
  let totalProfit = 0;
  lottoResults.forEach((count, index) => {
    totalProfit += count * Object.values(RANK_CONFIG)[index].PRIZE;
  });
  return totalProfit;
}