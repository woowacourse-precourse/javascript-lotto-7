class CheckNumber{
    constructor(){
        this.RandomLottoNumbers=[];
        this.winNumber=[];
    }

    checkNumbers(){
        let matchingNumbers=this.RandomLottoNumbers.map(lottoNumber => lottoNumber.filter(number => this.winNumber.includes(number)));
        return matchingNumbers.map(numbers=>numbers.length)
    }

}

export default CheckNumber;