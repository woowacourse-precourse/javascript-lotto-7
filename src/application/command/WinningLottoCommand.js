import WinningLotto from "../../domain/WinningLotto/WinningLotto.js";
import parse from "../utils/parse.js";
import retry from "../utils/retry.js";

class WinningLottoCommand {
  #inputPort;
  #validator;

  constructor(inputPort, validator) {
    this.#inputPort = inputPort;
    this.#validator = validator;
  }

  async execute() {
    const winningLotto = await this.handleWinningLotto();

    return winningLotto;
  }

  async handleWinningLotto() {
    const handleWinnigLottoFlow = async() => {
      const numbers = await this.#inputPort.readWinningLotto();
      const parsedNumbers = parse(numbers);
      parsedNumbers.forEach((number) => this.#validator.validate(number));
      return WinningLotto.create(parsedNumbers);
    };

    return retry(handleWinnigLottoFlow);
  }

}

export default WinningLottoCommand;
