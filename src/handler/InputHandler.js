import { Console } from "@woowacourse/mission-utils";
import LottoMoneyValidator from "../validator/LottoMoneyValidator.js";
import WinningNumberValidator from "../validator/WinningNumberValidator.js";
import BonusNumberValidator from "../validator/BonusNumberValidator.js";
import OutputHandler from "./OutputHandler.js";

class InputHandler {
    constructor() {
        this.lottoMoneyValidator = new LottoMoneyValidator();
        this.winningNumberValidator = new WinningNumberValidator();
        this.bonusNumberValidator = new BonusNumberValidator();
        this.outputHandler = new OutputHandler();
    }

    async getLottoMoney() {
        try {
            const input = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
            const lottoMoney = this.lottoMoneyValidator.validateLottoMoney(parseInt(input.trim(), 10));
            return lottoMoney;
        } catch (error) {
            this.outputHandler.printMessage(error.message);
            return await this.getLottoMoney();
        }
    }

    async getWinningNumber() {
        try {
            const input = await Console.readLineAsync("당첨 번호를 입력해주세요.\n");
            const winningNumber = this.winningNumberValidator.validateWinningNumber(input);
            Console.print("");
            return winningNumber;
        } catch (error) {
            this.outputHandler.printMessage(error.message);
            return await this.getWinningNumber();
        }
    }

    async getBonusNumber(winningNumber) {
        try {
            const input = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
            const bonusNumber = this.bonusNumberValidator.validateBonusNumber(input, winningNumber);
            return bonusNumber;
        } catch (error) {
            this.outputHandler.printMessage(error.message);
            return await this.getBonusNumber();
        }
    }
}

export default InputHandler;