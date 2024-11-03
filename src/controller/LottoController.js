import { Console } from '@woowacourse/mission-utils';

class LottoController {
  async run() {}

  /**
   * @template T
   * @param {() => Promise<T>} reader
   * @param {(input: T) => void} validator
   * @returns {Promise<T>}
   */
  async #getUserInput(reader, validator) {
    try {
      const input = await reader();

      validator(input);

      return input;
    } catch (error) {
      Console.print(error.message);

      return await this.#getUserInput(reader, validator);
    }
  }
}

export default LottoController;
