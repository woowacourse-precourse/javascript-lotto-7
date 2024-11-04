import { Console } from "@woowacourse/mission-utils";

export class Input {
	static async getLottoPrice() {
		Console.print("구입금액을 입력해 주세요.");
		const input = await Console.readLineAsync("");

		// 가능한 에러
		// 숫자가 아닌 경우
		// 금액이 1000 미만일 경우
		// 금액이 1000 단위가 아닐 경우
		// 구입 금액 제한

		return Number(input);
	}
}
