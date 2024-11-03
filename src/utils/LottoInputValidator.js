export class LottoInputValidator {
	getLottoPrice(value) {
		const price = this.changeToNumber(value);
		if (price % 1000 > 0) {
			throw new Error(`[Error] 로또 금액은 1000원으로 나누어 떨어져야 합니다.`);
		}
		return price / 1000;
	}
}
