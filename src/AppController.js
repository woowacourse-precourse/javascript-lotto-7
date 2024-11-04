
import { Console } from '@woowacourse/mission-utils';
import { lottoMesaage, numbers } from './constants.js';
import ViweOutput from './ViewOutput.js';
import Calculator from './Calculator.js';
import LottoController from './LottoController.js';

export default class AppController {
    #userInputMap;

    async control() {
        this.userInputInit();
        const money = await this.userInput(lottoMesaage.INPUT_MONEY);
        this.handleCheckUserInput(lottoMesaage.INPUT_MONEY, money)
    }

    async userInput(message) {
        return await Console.readLineAsync(message);
    }

    userInputInit() {
        this.#userInputMap = new Map();
        this.#userInputMap.set(lottoMesaage.INPUT_MONEY, this.checkUserMoney.bind(this));
    }

    handleCheckUserInput(message, value) {
        const checkUserInput = this.#userInputMap.get(message);

        return checkUserInput(value);
    }

    checkUserMoney(inputMoney) {
        const lottoCount = Calculator.divide(inputMoney,numbers.LOTTO_UNITS);
        ViweOutput.printText(`${lottoCount}${lottoMesaage.PRINT_BUYCOUNT}`);

        const userLottoList = LottoController.getUserLotto(lottoCount);
        ViweOutput.printLottoList(userLottoList);
    }


}