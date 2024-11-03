import {validateWinningNumberForm} from './validate.js'
import {purchaseValidatePipe} from './purchaseValidatePipe.js' 
import {winningNumberValidatePipe} from './winningNumberValidatePipe.js' 
import {bonusNumberValidatePipe} from './bonusNumberValidatePipe.js'
import parser from './parser.js'

class LottoGameController{
    constructor(view, service){
        this.view = view;
        this.service = service
    }

    static onGetPurchaseAmount(purchaseAmount){
        purchaseValidatePipe(purchaseAmount);
        return parser.divideThousands(purchaseAmount);
    }
    static onGetWinningNumber(winningNumberString){
        validateWinningNumberForm(winningNumberString);
        const winningNumbers = parser.separateString(winningNumberString, ',');
        winningNumberValidatePipe(winningNumbers);
        return winningNumbers;
    }
    static onGetBonusNumber(bonusNumber){
        bonusNumberValidatePipe(bonusNumber);
    }
    
    async run(){
        const purchaseAmount = await this.view.getPurchaseAmount();
        const winningNumbers = await this.view.getWinningNumber();
        const bonusNumber = await this.view.getBonusNumber();
    }
}

export default LottoGameController