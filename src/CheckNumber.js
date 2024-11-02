class CheckNumber{
    constructor(getNumber){
        this.RandomLottoNumbers=[];
        this.getNumber=getNumber;
        this.incluededBonus=false;
        this.matchingResult=[];
    }

    checkNumbers(){
        const bonusNumber = this.getNumber.bonusNumber[0];
        let bonusAndWinnerNumbers = [...this.getNumber.winNumber, bonusNumber];
        let matchingNumbers = this.RandomLottoNumbers.map(lottoNumber => 
            lottoNumber.filter(number => bonusAndWinnerNumbers.includes(number))
        );
    
        this.matchingResult=matchingNumbers.map(numbers =>
            [numbers.length, numbers.includes(bonusNumber)]
        );

    }
    

}

export default CheckNumber;