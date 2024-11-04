import { Console } from '@woowacourse/mission-utils';

class InputView {
	async readAmountInput() {
		const input = await Console.readLineAsync('구입 금액을 입력해주세요.\n');
		return parseInt(input, 10);
	}

	async readWinningNumbers() {
		return Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
	}
}

export default InputView;
