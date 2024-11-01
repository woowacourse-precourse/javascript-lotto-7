import LottoService from '../services/LottoService.js';
import InputLottoView from '../views/InputLottoView.js';
import OutputLottoView from '../views/OutputLottoView.js';

export default class LottoController {
  constructor() {
    this.inputLottoView = new InputLottoView();
    this.outputLottoView = new OutputLottoView();
    this.lottoService = new LottoService();
  }

  async run() {
    const price = await this.inputLottoView.getInputPrice();
    console.log(price);
  }
}
