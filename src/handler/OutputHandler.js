import { Console } from "@woowacourse/mission-utils";

class OutputHandler {
    printLottos(lottos) {
        Console.print(`\n${lottos.length}개를 구매했습니다.`);
        lottos.forEach((lotto) => {
            Console.print(`[${lotto.getNumbers().join(", ")}]`);
        });
    }

    printWinningNumber(winningNumber) {
        Console.print(`당첨 번호: ${winningNumber.join(", ")}`);
    }
}

export default OutputHandler;