import { Console } from '@woowacourse/mission-utils';

class OutputView {
	printLottos(amount, lottos) {
		const quantity = Math.floor(amount / 1000);
		Console.print(`\n${quantity}개를 구매했습니다.`);
		lottos.forEach((lotto) => {
			Console.print(`[${lotto.getNumbers().join(', ')}]`);
		});
	}
}

export default OutputView;
