import {validateAnswerNumberForm} from './validate.js'
import {purchaseValidatePipe} from './purchaseValidatePipe.js' 
import {lottoNumberValidatePipe} from './lottoNumberValidatePipe.js' 
import {bonusNumberValidatePipe} from './bonusNumberValidatePipe.js'
import IssuedLotto from './Lotto/IssuedLotto.js'
import AnswerLotto from './Lotto/AnswerLotto.js'

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
    static onGetBonusNumber(bonusNumber){
        bonusNumberValidatePipe(bonusNumber);
    }

    async run(){
        const purchaseQuantity = await this.view.getPurchaseQuantity();
        const purchaseAmount = purchaseQuantity * 1000;
        const issuedLottos = IssuedLotto.create(purchaseQuantity);
        this.view.showPurchaseResult(purchaseQuantity, issuedLottos);
        const answerNumbers = await this.view.getAnswerNumber();
        const bonusNumber = await this.view.getBonusNumber();
        const answerLotto = AnswerLotto.create(answerNumbers, bonusNumber);

        this.service.start(purchaseAmount, issuedLottos, answerLotto);
        const result = this.service.getResult();
        this.view.showLottoGameResult(result);
    }

}

export default LottoGameController