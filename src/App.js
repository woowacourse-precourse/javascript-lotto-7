import LottoController from './LottoController.js';
import LottoMachine from './LottoMachine.js';

class App {
  async run() {
    const controller = new LottoController();
    const machine = new LottoMachine();

    const amount = await controller.getLottoAmount();
    const lottos = machine.generateLottos(amount / 1000);
    controller.printLottoCount(lottos.length);
    controller.printLottos(lottos);

    const winningNumbers = await controller.getLottoNumber();
    const bonusNumber = await controller.getLottoBonusNumber(winningNumbers);

    const statistics = controller.calculateStatistics(
      lottos,
      winningNumbers,
      bonusNumber,
      machine
    );
    const profitRate = controller.calculateProfitRate(statistics, amount);
    controller.printStatistics(statistics, profitRate);
  }
}

export default App;
