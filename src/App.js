import { ConsoleIO } from './io/index.js';

class App {
  async run() {
    const console = new ConsoleIO();

    const money = await console.processMoneyInput('');
    const mainNumbers = await console.processMainInput('');
    const bonusNumber = await console.processBonusInput('');

    console.print('');
  }
}

export default App;
