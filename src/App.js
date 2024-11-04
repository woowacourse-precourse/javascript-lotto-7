import Lotto from './modules/Lotto.js';
import LottoGenerator from './modules/LottoGenerator.js';
import PurchaseModule from './modules/PurchaseModule.js';
import ResultModule from './modules/ResultModule.js';
import WinningNumberModule from './modules/WinningNumberModule.js';
import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

async function askQuestion(query) {
  return new Promise((resolve) => {
      rl.question(query, (answer) => {
          resolve(answer);
      });
  });
}

