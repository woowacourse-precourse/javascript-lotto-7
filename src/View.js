import Generator from './Generator.js';
import Input from './Input.js';
import Print from './Print.js';
import Stats from './Stats.js';

class View {
  async startLotto() {
    const amount = await Input.inputAmount();

    const generator = new Generator();
    const lottos = generator.createLotto(amount);

    Print.printTimes(generator.times);

    const lottoNumber = await Input.inputLottoNumber();
    const bonusNumber = await Input.inputBonusNumber();

    const stats = new Stats(amount, lottos, lottoNumber, bonusNumber);
    const prizedCount = stats.prizeCount;
    const earningRatio = stats.earningRatio;
    Print.printStats(prizedCount, earningRatio);
  }
}

export default View;
