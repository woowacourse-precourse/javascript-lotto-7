import { Console } from '@woowacourse/mission-utils';

export async function inputMoney() {
	const input = await Console.readLineAsync('구입 금액을 입력해주세요.\n');

	return input;
}
