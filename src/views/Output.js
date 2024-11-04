import { Console } from "@woowacourse/mission-utils";

export class Output {
	static async printLottoCount(lottoList) {
		Console.print(`${lottoList.length}개의 로또를 구매했습니다.`);
		lottoList.forEach((lotto) => Console.print(`[${lotto.getNumbers().join(", ")}]`));
	}
}
