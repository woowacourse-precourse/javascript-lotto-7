import { LOTTO } from './constant.js';
import { Console } from '@woowacourse/mission-utils';

export const prize = (lotto, winnum, bonusnum) => {
    const prizeTable = initializePrizeTable();
    const checkTable = checkLottoTickets(lotto, winnum, bonusnum, prizeTable);
    const totalPrize = calculateTotalPrize(checkTable);
    const profitRate = calculateProfitRate(totalPrize, lotto.length);
    printResults(checkTable, profitRate);
};

const initializePrizeTable = () => {
    return {
        [LOTTO.MATCH_COUNT.THREE]: { count: 0, prize: LOTTO.PRIZES.THREE_MATCH },
        [LOTTO.MATCH_COUNT.FOUR]: { count: 0, prize: LOTTO.PRIZES.FOUR_MATCH },
        [LOTTO.MATCH_COUNT.FIVE]: { count: 0, prize: LOTTO.PRIZES.FIVE_MATCH },
        [LOTTO.MATCH_COUNT.FIVE_BONUS]: { count: 0, prize: LOTTO.PRIZES.FIVE_BONUS_MATCH },
        [LOTTO.MATCH_COUNT.SIX]: { count: 0, prize: LOTTO.PRIZES.SIX_MATCH }
    };
};

const updatePrizeCount = (matchCount, hasBonus, prizeTable) => {
    if (matchCount === LOTTO.MATCH_COUNT.SIX) {
        prizeTable[LOTTO.MATCH_COUNT.SIX].count += 1;
    } else if (matchCount === LOTTO.MATCH_COUNT.FIVE && hasBonus) {
        prizeTable[LOTTO.MATCH_COUNT.FIVE_BONUS].count += 1;
    } else if (matchCount === LOTTO.MATCH_COUNT.FIVE) {
        prizeTable[LOTTO.MATCH_COUNT.FIVE].count += 1;
    } else if (matchCount === LOTTO.MATCH_COUNT.FOUR) {
        prizeTable[LOTTO.MATCH_COUNT.FOUR].count += 1;
    } else if (matchCount === LOTTO.MATCH_COUNT.THREE) {
        prizeTable[LOTTO.MATCH_COUNT.THREE].count += 1;
    }
};

const checkLottoTickets = (lotto, winnum, bonusnum, prizeTable) => {
    lotto.forEach(ticketInstance => {
        const ticket = ticketInstance.getNumbers();
        const matchCount = ticket.filter(num => winnum.includes(num)).length;
        const hasBonus = ticket.includes(bonusnum);

        updatePrizeCount(matchCount, hasBonus, prizeTable);
    });

    return prizeTable;
};

const calculateTotalPrize = (prizeTable) => {
    let totalPrize = 0;
    for (const key in prizeTable) {
        totalPrize += prizeTable[key].count * prizeTable[key].prize;
    }
    return totalPrize;
};

const calculateProfitRate = (totalPrize, totalLottos) => {
    const totalSpent = totalLottos * LOTTO.PRICE;
    const profitRate = ((totalPrize / totalSpent) * 100).toFixed(1);
    return profitRate;
  };

const printResults = (prizeTable, profitRate) => {
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${prizeTable[LOTTO.MATCH_COUNT.THREE].count}개`);
    Console.print(`4개 일치 (50,000원) - ${prizeTable[LOTTO.MATCH_COUNT.FOUR].count}개`);
    Console.print(`5개 일치 (1,500,000원) - ${prizeTable[LOTTO.MATCH_COUNT.FIVE].count}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${prizeTable[LOTTO.MATCH_COUNT.FIVE_BONUS].count}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${prizeTable[LOTTO.MATCH_COUNT.SIX].count}개`);
    Console.print(`총 수익률은 ${profitRate}%입니다.\n`);
};