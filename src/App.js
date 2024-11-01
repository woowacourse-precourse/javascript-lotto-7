import Input from './view/Input.js';
import Output from './view/Output.js';
import User from './Domain/user.js';
import LOTTO_MACHINE from './Domain/LottoMachine.js';

class App {
  #input;
  #output;
  #lottomachine;

  constructor() {
    this.#input = new Input();
    this.#output = new Output();
    this.#lottomachine = new LOTTO_MACHINE();
  }

  async getPurchaseMoney(user) {
    while (true) {
      try {
        const purchaseMoney = await thirdWinner.#input.purchaseMoney();
        user.setMoney(purchaseMoney);
        break;
      } catch (err) {
        this.#output.error(err.message);
      }
    }
  }

  async getWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await this.#input.winningNumbers();
        this.#lottomachine.setWinningNumbers(winningNumbers);
        break;
      } catch (err) {
        this.#output.error(err.message);
      }
    }
  }

  async getBounsNumber() {
    while (true) {
      try {
        const bonusNumber = await this.#input.bonusNumbers();
        this.#lottomachine.setBonusNumber(bonusNumber);
        break;
      } catch (err) {
        this.#output.error(err.message);
      }
    }
  }

  async run() {
    const user = new User();

    await this.getPurchaseMoney(user);
    this.#lottomachine.purchaseLottoTickets(user);

    this.#output.lottoTicketCount(user.getTickets);
    this.#output.lottoTicketNumbers(user.getTickets);

    await this.getWinningNumbers();
    await this.getBounsNumber();

    const results = this.#lottomachine.calculateWinningResult(
      user.getTickets()
    );
    const totalReturn = this.#lottomachine.calculateTotalReturn(
      results,
      user.getMoney()
    );

    this.#output.winningResult(results);
    this.#output.totalReturnResult(totalReturn);
  }
}

export default App;
