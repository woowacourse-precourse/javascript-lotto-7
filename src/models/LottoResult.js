export default class LottoResult{
    #ERROR_MESSAGE={
        INVALID_THOUSAND_UNIT : '[ERROR] 구매금액은 1000원 단위여야합니다.\n',
        INVALID_POSITIVE_NUMBER : '[ERROR] 구매금액은 0보다 커야합니다.\n'
    }

    #purchasePrice;
    #resultPrice
    #profitRate
    #result

    constructor(purchasePrice){
        this.#validtePurchasePrice(purchasePrice)
        this.#purchasePrice = purchasePrice
    }

    getPurechasePrice(){
        return this.#purchasePrice;
    }

    #validtePurchasePrice(purchasePrice){
        this.#validatePositiveNumber(purchasePrice)
        this.#validateThousandUnit(purchasePrice)
    }

    #validatePositiveNumber(purchasePrice){
        if (purchasePrice <= 0){
            throw new Error(this.#ERROR_MESSAGE.INVALID_POSITIVE_NUMBER);
        }
    }

    #validateThousandUnit(purchasePrice){
        if (purchasePrice % 1000 !==0){
            throw new Error(this.#ERROR_MESSAGE.INVALID_THOUSAND_UNIT);
        }
    }

    
}