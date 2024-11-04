
import { Console } from '@woowacourse/mission-utils';
import { lottoMesaage, numbers, statisticsMesssage } from './constants.js';
import ViweOutput from './ViewOutput.js';
import Calculator from './Calculator.js';
import LottoController from './LottoController.js';

export default class AppController {
    #userInputMap;
    #userLottoList;
    #winningLotto;
    #bonus;

    async control() {
        this.userInputInit();
        const userMoney = await this.userInput(lottoMesaage.INPUT_MONEY);
        this.handleCheckUserInput(lottoMesaage.INPUT_MONEY, userMoney);

        const winningNumbers = await this.userInput(lottoMesaage.INPUT_LOTTONUMBERS);
        this.handleCheckUserInput(lottoMesaage.INPUT_LOTTONUMBERS, winningNumbers);

        this.#bonus = await this.userInput(lottoMesaage.INPUT_BONUSNUMBER);

        const statisticsCountMap = this.createStatisticsLotto();

        this.createEarningsRate(userMoney, statisticsCountMap);
    }

    async userInput(message) {
        return await Console.readLineAsync(message);
    }

    userInputInit() {
        this.#userInputMap = new Map();
        this.#userInputMap.set(lottoMesaage.INPUT_MONEY, this.checkUserMoney.bind(this));
        this.#userInputMap.set(lottoMesaage.INPUT_LOTTONUMBERS, this.checkWinningLotto.bind(this));
    }

    handleCheckUserInput(message, value) {
        const checkUserInput = this.#userInputMap.get(message);

        return checkUserInput(value);
    }

    checkUserMoney(inputMoney) {
        const lottoCount = Calculator.divide(inputMoney,numbers.LOTTO_UNITS);
        ViweOutput.printText(`${lottoCount}${lottoMesaage.PRINT_BUYCOUNT}`);

        this.#userLottoList = LottoController.getUserLotto(lottoCount);
        ViweOutput.printLottoList(this.#userLottoList);
    }

    checkWinningLotto(winningNumbers) {
        this.#winningLotto = LottoController.createWinningLotto(winningNumbers).getNumbers().sort((a,b) => a - b);
    }

    createStatisticsLotto() {
        ViweOutput.printText(statisticsMesssage.PRINT_STATISTICS);
        ViweOutput.printText(statisticsMesssage.PRINT_BAR.repeat(numbers.THREE));

        const statisticsCountMap = LottoController.getStatisticsLotto({userLottos: this.#userLottoList, winningLotto: this.#winningLotto, bonus: this.#bonus});
        ViweOutput.printStatistics(statisticsCountMap);

        return statisticsCountMap;
    }

    createEarningsRate(userMoney, statisticsCountMap) {
        const earnMoeny = Calculator.sum(statisticsCountMap);
        const earnRate = Calculator.earningsRate(userMoney, earnMoeny);

        ViweOutput.printText(`${statisticsMesssage.PRINT_EARNRATE} ${earnRate}${statisticsMesssage.PRINT_RATEUNIT}`);
    }
   



    




}