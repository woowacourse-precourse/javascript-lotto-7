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
async function getValidBonusNumber() {
  const winningNumberModule = new WinningNumberModule();

  while (true) {
      const bonusInput = await askQuestion("보너스 번호를 입력해 주세요.\n");
      const bonusNumber = Number(bonusInput);

      try {
          winningNumberModule.validateBonusNumber(bonusNumber); // 보너스 번호 유효성 검사
          console.log();
          return bonusNumber;
      } catch (error) {
          console.log(error.message);
      }
  }
}

