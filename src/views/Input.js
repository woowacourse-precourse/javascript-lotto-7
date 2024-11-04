import { Console } from "@woowacourse/mission-utils";
import Lotto from "../models/Lotto";
import { validateBonusNumber, validatePrice } from "../utils/Validate";

export class Input {
	async getLottoPrice() {
		Console.print("구입금액을 입력해 주세요.");
		const input = await Console.readLineAsync("");
		const price = Number(input);
		validatePrice(price);

		return price;
	}

	async getLottoNumbers() {
		Console.print("당첨 번호를 입력해 주세요.");
		const input = await Console.readLineAsync("");
		const numbers = input.split(",").map(Number);
		const lotto = new Lotto(numbers);

		return numbers;
	}

	async getLottoBonusNumber(winningNumbers) {
		Console.print("보너스 번호를 입력해 주세요.");
		const input = await Console.readLineAsync("");
		const bonusNumber = Number(input);
		validateBonusNumber(bonusNumber, winningNumbers);

		return bonusNumber;
	}
}
