class LottoList{
    numitem;
    constructor(budget) {
        this.numitem = this.buy(budget);
    }

    makeError(message){
        throw new Error("[Error] : "+ message);
    }
    budgetcheck(budget){
        if(budget%1000!==0){
            this.makeError("금액은 1000원 단위입니다")
        }

    }
    buy(budget){
        this.budgetcheck(budget);
        return budget/1000;
    }

}
export default LottoList;