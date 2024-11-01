import {Console} from "@woowacourse/mission-utils"
import makeRandoms from "../utils/makeRandoms.js"

export default class OutputView{
    static printWinningStatistics(rankingResult){
        Console.print("\n당첨 통계\n")
        Console.print("---")
        Console.print(`3개 일치 (5,000원) - ${rankingResult[5]}개`)
        Console.print(`4개 일치 (50,000원) - ${rankingResult[4]}개`)
        Console.print(`5개 일치 (1,500,000원) - ${rankingResult[3]}개`)
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankingResult[2]}개`)
        Console.print(`6개 일치 (2,000,000,000원) - ${rankingResult[1]}개`)
    }
    static printRandomLottos(purchaseAmount){
        let tickets=[];
        const buyAmount=(purchaseAmount / 1000)
        Console.print(`${buyAmount}개를 구매했습니다.`)
        for (let i = 0; i < buyAmount; i++) {
            const ticket = makeRandoms();
            tickets.push(ticket);
        }

        tickets.forEach((ticket) => Console.print(`[${ticket.join(", ")}]`));
        return tickets
    }

    static printRateReturn(totalRevenue,purchaseAmount){
        //수익률은 소수점 둘째 자리에서 반올림
        const rate=(totalRevenue/purchaseAmount)*100;
        const rateToFix2 = parseFloat(rate.toFixed(2))
        Console.print(`총 수익률은 ${rateToFix2}%입니다.`)
    }

}