import {validateAnswerNumberForm} from './validate.js'
import {purchaseValidatePipe} from './purchaseValidatePipe.js' 

import parser from './utils/parser.js'

class LottoGameController{
    constructor(view, service){
        this.view = view;
        this.service = service
    }

    static onGetPurchaseQuantity(purchaseAmount){
        purchaseValidatePipe(purchaseAmount);
        return parser.divideThousands(purchaseAmount);
    }
    static onGetAnswerNumber(answerNumberString){
        validateAnswerNumberForm(answerNumberString);
        const answerNumbers = parser.separateString(answerNumberString, ',');
        return answerNumbers;
    }

    async run(){
        let purchaseQuantity;
        let answerNumbers;
        let bonusNumber;

        while (true) {
            purchaseQuantity = await this.getPurchaseQuantitySafely();
            if (purchaseQuantity !== null) break;
        }
        while (true) {
            answerNumbers = await this.getAnswerNumberSafely();
            if (answerNumbers !== null) break;
        }
        while (true) {
            bonusNumber = await this.getBonusNumberSafely();
            if (bonusNumber !== null) break;
        }

        const purchaseAmount = purchaseQuantity * 1000;
        this.service.inSetting(
            purchaseAmount,
            purchaseQuantity,
            this.onMakeIssuedLotto.bind(this)
        );
        

        this.service.start(answerNumbers, bonusNumber);
        const result = this.service.getResult();
        this.view.showLottoGameResult(result);
    }
    async getPurchaseQuantitySafely() {
        try {
            return await this.view.getPurchaseQuantity();
        } catch (error) {
            return null;
        }
    }
    async getAnswerNumberSafely() {
        try {
            return await this.view.getAnswerNumber();
        } catch (error) {
            return null;
        }
    }
    async getBonusNumberSafely() {
        try {
            return await this.view.getBonusNumber();
        } catch (error) {
            return null;
        }
    }
    onMakeIssuedLotto(purchaseQuantity, issuedLottos){
        this.view.showPurchaseResult(purchaseQuantity, issuedLottos);
    }
}

export default LottoGameController