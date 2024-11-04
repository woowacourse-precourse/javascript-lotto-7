// @ts-check
import LotteryMachineModule from './lottery-machine/lottery-machine.module.js';

class App {
  async run() {
    await LotteryMachineModule.init();
  }
}

export default App;
