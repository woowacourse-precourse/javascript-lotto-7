import UserInterface from '../utils/UserInterface.js';

class LottoGame {
    #paymentAmount;
   
    async initialize() {
        this.#paymentAmount = await UserInterface.queryPaymentAmout();
    }
}

export default LottoGame;
