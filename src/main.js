import Lotto from './Lotto.js';
import Purchase from './Purchase.js';
import Statistics from './Statistics.js';
import { Console } from "@woowacourse/mission-utils";

async function main() {
  const count = await getPurchaseCount();
  const purchaseArray = generateLottos(count);
  const { winArray, winBonus } = await getWinningNumbers();
  const { sumAmount, amountArray } = calculateResults(purchaseArray, winArray, winBonus);
  displayStatistics(count, sumAmount, amountArray);
}

async function getPurchaseCount() {
  const purchase = new Purchase();
  const count = await purchase.getPayment();
  Console.print(`${count}개를 구매했습니다.`);
  return count;
}

function generateLottos(count) {
  const lottos = Array.from({ length: count }, () => {
    const lotto = new Lotto();
    lotto.printNumbers();
    return lotto;
  });
  Console.print("");
  return lottos;
}

async function getWinningNumbers() {
  const lotto = new Lotto();
  const winArray = await lotto.getWinNumbers();
  const winBonus = await lotto.getBonusNumber();
  return { winArray, winBonus };
}

function calculateResults(purchaseArray, winArray, winBonus) {
  const stats = new Statistics();
  let sumAmount = 0;
  const amountArray = [0, 0, 0, 0, 0];

  purchaseArray.forEach((lotto) => {
    const matchCount = lotto.checkWinNumbers(winArray);
    const isBonusMatch = lotto.checkWinNumbers([winBonus]) === 1;
    sumAmount += lotto.calculatePrize(matchCount, isBonusMatch);
    stats.updateAmountArray(amountArray, matchCount, isBonusMatch);
  });

  return { sumAmount, amountArray };
}

function displayStatistics(count, sumAmount, amountArray) {
  const stats = new Statistics();
  stats.displayStatistics(count, sumAmount, amountArray);
}

export default main;