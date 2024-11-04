// @ts-check
import ValidationStrategy from './validation.strategy.js';

class ValidationContext {
  /**
   *
   * @param {ValidationStrategy} strategy
   */
  validate(strategy) {
    strategy.validate();
  }
}

export default ValidationContext;
