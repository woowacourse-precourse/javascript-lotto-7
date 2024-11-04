import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachineController from './Controller/LottoMachineController.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import LottoNumberGenerateService from './Service/LottoNumberGenerateService.js';
import LottoTicketService from './Service/LottoTicketService.js';
import WinningResultCalculatorService from './Service/WinningResultCalculatorService.js';
import ReturnRateCalculatorService from './Service/ReturnRateCalculatorService.js';
import LottoMachineService from './Service/LottoMachineService.js';

class App {
  async run() {
    try {
      const inputView = new InputView();
      const outputView = new OutputView();
      const lottoNumberGenerateService = new LottoNumberGenerateService();
      const lottoTicketService = new LottoTicketService(
        lottoNumberGenerateService
      );
      const winningResultCalculatorService =
        new WinningResultCalculatorService();
      const returnRateCalculatorService = new ReturnRateCalculatorService();
      const lottoMachineService = new LottoMachineService(
        lottoTicketService,
        winningResultCalculatorService,
        returnRateCalculatorService
      );
      const lottoMachineController = new LottoMachineController(
        inputView,
        outputView,
        lottoMachineService
      );

      await lottoMachineController.run();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
