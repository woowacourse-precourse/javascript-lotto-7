import { scan } from './utils/scanner.js';

class App {
  async run() {
    const price = scan('구입금액을 입력해 주세요.');
  }
}

export default App;
