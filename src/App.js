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

  async setPurchaseMoney(user) {
    while (true) {
      try {
        const purchaseMoney = await this.#input.purchaseMoney();
        user.setMoney(Number(purchaseMoney));
        break;
      } catch (err) {
        this.#output.error(err.message);
      }
    }
  }

  async setWinningNumbers() {
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

  async setBounsNumber() {
    while (true) {
      try {
        const bonusNumber = await this.#input.bonusNumbers();
        this.#lottomachine.setBonusNumber(Number(bonusNumber));
        break;
      } catch (err) {
        this.#output.error(err.message);
      }
    }
  }

  async run() {
    const user = new User();

    await this.setPurchaseMoney(user);

    const tickets = this.#lottomachine.purchaseLottoTickets(user);
    user.setTickets(tickets);

    this.#output.lottoTicketCount(user.getTickets);
    this.#output.lottoTicketNumbers(user.getTickets);

    await this.setWinningNumbers();
    await this.setBounsNumber();

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
