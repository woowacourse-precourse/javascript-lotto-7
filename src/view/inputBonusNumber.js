import { Console } from '@woowacourse/mission-utils';

export async function inputBonusNumber() {
	const input = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');

	return input;
}
