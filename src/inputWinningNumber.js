import { Console } from '@woowacourse/mission-utils';

export async function inputWinningNumber() {
	const input = await Console.readLineAsync('\n당첨 번호를 입력해주세요.\n');

	return input;
}
