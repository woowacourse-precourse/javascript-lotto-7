
import { Console } from '@woowacourse/mission-utils';
import { lottoMesaage, numbers } from './constants.js';
import ViweOutput from './ViewOutput.js';
import Calculator from './Calculator.js';
import LottoController from './LottoController.js';

export default class AppController {
    #userInputMap;
    #lotto;
    #bonus;

    async control() {
        this.userInputInit();
        const userMoney = await this.userInput(lottoMesaage.INPUT_MONEY);
        this.handleCheckUserInput(lottoMesaage.INPUT_MONEY, userMoney);

        const winningNumbers = await this.userInput(lottoMesaage.INPUT_LOTTONUMBERS);
        this.handleCheckUserInput(lottoMesaage.INPUT_LOTTONUMBERS, winningNumbers);

        this.#bonus = await this.userInput(lottoMesaage.INPUT_BONUSNUMBER);
    }

    async userInput(message) {
        return await Console.readLineAsync(message);
    }

    userInputInit() {
        this.#userInputMap = new Map();
        this.#userInputMap.set(lottoMesaage.INPUT_MONEY, this.checkUserMoney.bind(this));
        this.#userInputMap.set(lottoMesaage.INPUT_LOTTONUMBERS, this.checkWinningNumbers.bind(this));
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

    checkWinningNumbers(winningNumbers) {
        this.#lotto = LottoController.createrWinningLottoNumbers(winningNumbers);
    }




}