import { Console } from '@woowacourse/mission-utils';

class InputView {
	async handleAmountInput() {
		const input = await Console.readLineAsync('구입 금액을 입력해주세요.\n');
		return parseInt(input, 10);
	}
}

export default InputView;
