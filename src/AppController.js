
import { Console } from '@woowacourse/mission-utils';
import { lottoMesaage, numbers } from './constants.js';
import ViweOutput from './ViewOutput.js';

export default class AppController {
    async control() {
        await this.userInput();
    }

    async userInput() {
        const inputMoney = await Console.readLineAsync(lottoMesaage.INPUT_MONEY);
        const lottoCount = inputMoney / numbers.LOTTO_UNITS;
        
    }
}