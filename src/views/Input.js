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

	static async getLottoNumbers() {
		Console.print("당첨 번호를 입력해 주세요.");
		const input = await Console.readLineAsync("");
		const numbers = input.split(",").map((number) => Number(number));

		// 가능한 에러
		// 입력한 숫자 개수가 6개가 아닌 경우
		// 중복된 값이 있는 경우
		// 정수가 아닌 값이 들어있는 경우
		// 1 ~ 45 사이의 수가 아닌 경우

		return numbers;
	}
}
