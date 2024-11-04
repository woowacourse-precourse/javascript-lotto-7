
import { Console } from '@woowacourse/mission-utils';
import { lottoMesaage, number, statisticsMesssage } from '../constants.js';
import ViweOutput from '../ViewOutput.js';
import Calculator from '../utils/Calculator.js';
import LottoController from './LottoController.js';
import Validator from '../utils/Validator.js';

export default class AppController {
    #userInputMap;
    #userLottoList;
    #winningLotto;
    #bonus;

    async control() {
        this.userInputInit();
        const userMoney = await this.getValidInput(lottoMesaage.INPUT_MONEY);
        const winningNumbers = await this.getValidInput(lottoMesaage.INPUT_LOTTONUMBERS);
        this.#bonus = await this.getValidInput(lottoMesaage.INPUT_BONUSNUMBER);
        const statisticsCountMap = this.showStatisticsLotto();
        this.showEarningsRate(userMoney, statisticsCountMap);
    }

    async userInput(message) {
        return await Console.readLineAsync(message);
    }

    userInputInit() {
        this.#userInputMap = new Map();
        this.#userInputMap.set(lottoMesaage.INPUT_MONEY, this.checkUserMoney.bind(this));
        this.#userInputMap.set(lottoMesaage.INPUT_LOTTONUMBERS, this.checkWinningLotto.bind(this));
        this.#userInputMap.set(lottoMesaage.INPUT_BONUSNUMBER, this.checkBouns.bind(this));
    }

    async getValidInput(message) {
        let isValid = false;
        let input;
    
        while (!isValid) {
            try {
                input = await this.userInput(message);
                this.handleProcessUserInput(message, input); 
                isValid = true;
            } catch (error) {
                ViweOutput.printText(error.message); 
            }
        }
        return input;
    }

    handleProcessUserInput(message, value) {
        const checkUserInput = this.#userInputMap.get(message);

        return checkUserInput(value);
    }

    checkUserMoney(inputMoney) {
        Validator.isValidUserMoney(inputMoney);
        const lottoCount = Calculator.divide(inputMoney,number.LOTTO_UNITS);
        ViweOutput.printText(`\n${lottoCount}${lottoMesaage.PRINT_BUYCOUNT}`);
        
        this.#userLottoList = LottoController.getUserLotto(lottoCount);
        ViweOutput.printLottoList(this.#userLottoList);
    }

    checkWinningLotto(winningNumbers) {
        this.#winningLotto = LottoController.createWinningLotto(winningNumbers).getNumbers().sort((a,b) => a - b);
    }
    
    checkBouns(bonus) {
        Validator.isValidBouns(this.#winningLotto, bonus);
    }

    showStatisticsLotto() {
        ViweOutput.printText(statisticsMesssage.PRINT_STATISTICS);
        ViweOutput.printText(statisticsMesssage.PRINT_BAR.repeat(number.THREE));
        const statisticsCountMap = LottoController.getStatisticsLotto({userLottos: this.#userLottoList, winningLotto: this.#winningLotto, bonus: this.#bonus});
        ViweOutput.printStatistics(statisticsCountMap);

        return statisticsCountMap;
    }

    showEarningsRate(userMoney, statisticsCountMap) {
        const earnMoeny = Calculator.sumWinningAmount(statisticsCountMap);
        const earnRate = Calculator.earningsRate(userMoney, earnMoeny);
        ViweOutput.printText(`${statisticsMesssage.PRINT_EARNRATE} ${earnRate}${statisticsMesssage.PRINT_RATEUNIT}`);
    }
}