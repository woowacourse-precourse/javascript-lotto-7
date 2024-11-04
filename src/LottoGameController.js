import {validateAnswerNumberForm} from './validate.js'
import {purchaseValidatePipe} from './purchaseValidatePipe.js' 
import {lottoNumberValidatePipe} from './lottoNumberValidatePipe.js' 
import {bonusNumberValidatePipe} from './bonusNumberValidatePipe.js'
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
        validateAnswerNumberForm(winningNumberString);
        const answerNumbers = parser.separateString(answerNumberString, ',');
        lottoNumberValidatePipe(answerNumbers);
        return answerNumbers;
    }
    static onGetBonusNumber(bonusNumber){
        bonusNumberValidatePipe(bonusNumber);
    }

    async run(){
        const purchaseQuantity = await this.view.getPurchaseQuantity();
        const answerNumbers = await this.view.getAnswerNumber();
        const bonusNumber = await this.view.getBonusNumber();
        this.service.ready();
    }
}

export default LottoGameController