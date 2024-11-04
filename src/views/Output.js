import { Console } from "@woowacourse/mission-utils";

export class Output {
	printLottoCount(lottoList) {
		Console.print(`${lottoList.length}개를 구매했습니다.`);
		lottoList.forEach((lotto) => Console.print(`[${lotto.getNumbers().join(", ")}]`));
	}

	printLottoResult(lottoResult) {
		Console.print("당첨 통계");
		Console.print("---");
		Console.print(`3개 일치 (5,000원) - ${lottoResult.fifth}개`);
		Console.print(`4개 일치 (50,000원) - ${lottoResult.fourth}개`);
		Console.print(`5개 일치 (1,500,000원) - ${lottoResult.third}개`);
		Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult.second}개`);
		Console.print(`6개 일치 (2,000,000,000원) - ${lottoResult.first}개`);
	}

	printProfitRate(profitRate) {
		Console.print(`총 수익률은 ${profitRate}%입니다.`);
	}
}
