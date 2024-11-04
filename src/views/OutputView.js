import { Console } from '@woowacourse/mission-utils';

class OutputView {
	printLottos(amount, lottos) {
		const quantity = Math.floor(amount / 1000);
		Console.print(`\n${quantity}개를 구매했습니다.`);
		lottos.forEach((lotto) => {
			Console.print(`[${lotto.getNumbers().join(', ')}]`);
		});
	}

	printMatchResults(details) {
		const resultText = [
			`3개 일치 (5,000원) - ${details[0]}개`,
			`4개 일치 (50,000원) - ${details[1]}개`,
			`5개 일치 (1,500,000원) - ${details[2]}개`,
			`5개 일치, 보너스 볼 일치 (30,000,000원) - ${details[3]}개`,
			`6개 일치 (2,000,000,000원) - ${details[4]}개`,
		];

		Console.print('\n당첨 통계\n---');
		resultText.forEach((txt) => {
			Console.print(txt);
		});
	}

	printROI(ROI) {
		Console.print(`총 수익률은 ${ROI}%입니다.`);
	}
}

export default OutputView;
