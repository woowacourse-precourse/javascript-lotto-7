export default class LottoResult{


    #purchasePrice;
    #resultPrice
    #profitRate
    #result

    constructor(purchasePrice){
        this.#purchasePrice = purchasePrice
    }

    getPurechasePrice(){
        return this.#purchasePrice;
    }

    

    
}