import { Console } from "@woowacourse/mission-utils";

class OutputHandler {
    printLottos(lottos) {
        Console.print(`\n${lottos.length}개를 구매했습니다.`);
        lottos.forEach((lotto) => {
            Console.print(`[${lotto.getNumbers().join(", ")}]`);
        });
        Console.print("");
    }
}

export default OutputHandler;