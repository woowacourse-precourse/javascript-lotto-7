import Validation from './Validation.js';

class InputHandler {
  getValidatedPurchseAmount(amount) {
    Validation.validateNotEmpty(amount);
    const purchseAmount = parseFloat(amount);
    Validation.validateIsNumber(purchseAmount);
    Validation.validateThousandUnit(purchseAmount);
    return purchseAmount;
  }
}

export default InputHandler;
