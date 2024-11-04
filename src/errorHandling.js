export function validatePurchaseAmount(amount) {
	if (amount === "") {
		throw new Error("[ERROR] 값을 입력해주세요.");
	}
	if (isNaN(amount)) {
		throw new Error("[ERROR] 숫자만 입력 가능합니다.");
	}
	if (amount % 1000 !== 0) {
		throw new Error("[ERROR] 1000원으로 나눠떨어져야 합니다.");
	}
	if (amount < 1000) {
		throw new Error("[ERROR] 구입 금액은 1000원 이상이어야 합니다.");
	}
}
