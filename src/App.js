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

  setLottoTickets(user) {
    const tickets = this.#lottomachine.purchaseLottoTickets(user.getMoney());
    user.setTickets(tickets);
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

  async setLottomachineConditions(user) {
    await this.setPurchaseMoney(user);
    this.setLottoTickets(user);

    this.#output.lottoTicket(user.getTickets());

    await this.setWinningNumbers();
    await this.setBounsNumber();
  }

  async run() {
    const user = new User();
    await this.setLottomachineConditions(user);

    const result = this.#lottomachine.calculateMatchResults(
      user.getTickets(),
      user.getMoney()
    );
    this.#output.winningResult(result);
  }
}

export default App;
