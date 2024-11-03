import LottoIO from "./LottoIO.js";
import { thousandComma } from "./utils.js";
import { EARNINGS_MONEYS } from "./constants.js";

const showResultByLot = (
  usedMoney,
  purchasedLottos,
  winnningNumbers,
  bonusNumber
) => {
  const totalHits = { 3: 0, 4: 0, 5: 0, "5+": 0, 6: 0 };

  purchasedLottos.forEach((lotto) => {
    calculateHitLottoRanking(lotto, totalHits, winnningNumbers, bonusNumber);
  });

  printHitLottoRanking(totalHits);

  printLottoEarningsRate(totalHits, usedMoney);
};

const calculateHitLottoRanking = (
  lottoNumbers,
  totalHits,
  winnningNumbers,
  bonusNumber
) => {
  const count = getHitWinning(lottoNumbers, winnningNumbers);
  const isBonus = isExistBonusNumber(lottoNumbers, bonusNumber);

  if (count === 5 && isBonus) {
    totalHits["5+"] += 1;
  } else if (Object.hasOwn(totalHits, count)) {
    totalHits[count] += 1;
  }
};

const printHitLottoRanking = (hits) => {
  const printList = [
    `3개 일치 (${thousandComma(EARNINGS_MONEYS[3])}원) - ${hits["3"]}개`,
    `4개 일치 (${thousandComma(EARNINGS_MONEYS[4])}원) - ${hits["4"]}개`,
    `5개 일치 (${thousandComma(EARNINGS_MONEYS[5])}원) - ${hits["5"]}개`,
    `5개 일치, 보너스 볼 일치 (${thousandComma(EARNINGS_MONEYS["5+"])}원) - ${
      hits["5+"]
    }개`,
    `6개 일치 (${thousandComma(EARNINGS_MONEYS[6])}원) - ${hits["6"]}개`,
  ];

  LottoIO.print("\n당첨 통계\n---");

  printList.forEach((text) => {
    LottoIO.print(text);
  });
};

const printLottoEarningsRate = (hits, usedMoney) => {
  const addEarnings = (total, [rank, hitCount]) =>
    total + EARNINGS_MONEYS[rank] * hitCount;

  const totalEarning = Object.entries(hits).reduce(addEarnings, 0);

  const earningsRate = (totalEarning / usedMoney) * 100;

  LottoIO.print(`총 수익률은 ${earningsRate.toFixed(1)}%입니다.`);
};

const isExistBonusNumber = (lotto, hitNumber) => {
  return lotto.includes(hitNumber);
};

const getHitWinning = (lotto, targetNumbers) => {
  return lotto.reduce((hit, number) => {
    if (targetNumbers.includes(number)) {
      hit++;
    }

    return hit;
  }, 0);
};

export default showResultByLot;
