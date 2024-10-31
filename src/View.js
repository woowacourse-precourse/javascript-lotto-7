import Generator from './Generator.js';
import Input from './Input.js';
import Print from './Print.js';
import Stats from './Stats.js';

class View {
  async startLotto() {
    try {
      const amount = await Input.inputAmount();

      const generator = new Generator();
      const lottos = generator.createLotto(amount);

      const lottoNumber = await Input.inputLottoNumber();
      const bonusNumber = await Input.inputBonusNumber(lottoNumber);

      const stats = new Stats(amount, lottos, lottoNumber, bonusNumber);
      const prizedCount = stats.prizeCount;
      const earningRatio = stats.earningRatio;
      Print.printStats(prizedCount, earningRatio);
    } catch (error) {
      throw error;
    }
  }
}

export default View;
