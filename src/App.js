import { Console } from '@woowacourse/mission-utils';
import { LottoInputHandler } from './LottoInputHandler.js';

class App {
	async run() {
		const inputHandler = new LottoInputHandler();
		const inputAmount = await Console.readLineAsync(
			'구입금액을 입력해 주세요.\n'
		);
		inputHandler.getPurchaseAmount(inputAmount);
		const winNumbers = await Console.readLineAsync(
			`\n당첨 번호를 입력해 주세요.\n`
		);
		inputHandler.getWinningNumbers(winNumbers);
	}
}

export default App;
