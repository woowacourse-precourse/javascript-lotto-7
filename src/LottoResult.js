import { Console } from "@woowacourse/mission-utils";

const PrintResult = (ranking, buyingPrice) => {
    const profit = ranking.fifth * 5000 + ranking.fourth * 50000 + ranking.third * 1500000 + ranking.second * 30000000 + ranking.first * 2000000000;
    const profitRate = roundToTwoDecimalPlaces(profit / buyingPrice);
    const result = `
    당첨 통계
    ---
    3개 일치 (5,000원) - ${ranking.fifth}개
    4개 일치 (50,000원) - ${ranking.fourth}개
    5개 일치 (1,500,000원) - ${ranking.third}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${ranking.second}개
    6개 일치 (2,000,000,000원) - ${ranking.first}개
    총 수익률은 ${profitRate}%입니다.
    `
    Console.print(result);
}

const roundToTwoDecimalPlaces = (num) => {
    const profitRate = num * 100;
    return Math.round(profitRate * 100) / 100;
}

export default PrintResult;