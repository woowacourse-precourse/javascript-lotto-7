import {Console} from '@woowacourse/mission-utils'
import LottoGameController from './LottoGameController.js'
import LottoGameView from './LottoGameView.js'
import LottoGameService from './LottoGameService.js'

class App {
  controller;

  constructor(){
    this.controller = new LottoGameController(
      new LottoGameView(),
      new LottoGameService()
    )
  }

  async run() {
    await this.controller.run();
  }
} 

export default App;