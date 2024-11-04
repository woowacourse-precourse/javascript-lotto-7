import { inputMoney } from '../view/inputMoney.js';
import { inputWinningNumber } from '../view/inputWinningNumber.js';
import { inputBonusNumber } from '../view/inputBonusNumber.js';

import { validatePurchaseAmount } from '../error/validatePurchaseAmount.js';
import { validateUserWinningNumber } from '../error/validateUserWinningNumber.js';
import { validateBonusNumber } from '../error/validateBonusNumber.js';

class InputManager {
	static async inputAndValidatePurchaseAmount() {
		const amount = await inputMoney();
		validatePurchaseAmount(amount);
		return Number(amount);
	}

	static async inputAndValidateWinningNumbers() {
		const winningNumberInput = await inputWinningNumber();
		validateUserWinningNumber(winningNumberInput);
		return winningNumberInput.split(',').map(Number);
	}

	static async inputAndValidateBonusNumber(winningNumbers) {
		const bonusNumberInput = await inputBonusNumber();
		validateBonusNumber(bonusNumberInput, winningNumbers);
		return Number(bonusNumberInput);
	}
}

export default InputManager;
