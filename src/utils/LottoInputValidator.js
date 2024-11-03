export class LottoInputValidator {
	getLottoPrice(value) {
		const price = this.changeToNumber(value);
		if (price % 1000 > 0) {
			throw new Error(`[Error] 로또 금액은 1000원으로 나누어 떨어져야 합니다.`);
		}
		return price / 1000;
	}
	
	changeToNumber(str) {
		const num = parseInt(str, 10);
		if (isNaN(num)) {
			throw new Error(`[Error] 숫자만 입력 가능합니다.`);
		}
		return num;
	}
}
