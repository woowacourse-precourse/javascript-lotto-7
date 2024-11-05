import { Console } from "@woowacourse/mission-utils";

class OutputHandler {
    printLottos(lottos) {
        Console.print(`\n${lottos.length}개를 구매했습니다.`);
        lottos.forEach((lotto) => {
            Console.print(`[${lotto.getNumbers().join(", ")}]`);
        });
        Console.print("");
    }

    printMessage(message) {
        Console.print(message);
    }

    printResults(rankCounts, rateOfReturn) {
        const messages = [
            "\n당첨 통계\n---",
            `3개 일치 (5,000원) - ${rankCounts[3]}개`,
            `4개 일치 (50,000원) - ${rankCounts[4]}개`,
            `5개 일치 (1,500,000원) - ${rankCounts[5]}개`,
            `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCounts[5.5]}개`,
            `6개 일치 (2,000,000,000원) - ${rankCounts[6]}개`,
            `총 수익률은 ${rateOfReturn}%입니다.`,
        ];

        messages.forEach(message => this.printMessage(message));
    }
}

export default OutputHandler;