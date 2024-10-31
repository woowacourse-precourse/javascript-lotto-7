import LottoSetting from './LottoSetting.js';

class App {
  async run() {
    const lottoSetting = new LottoSetting();
    await lottoSetting.settingLotto();
  }
}

export default App;
