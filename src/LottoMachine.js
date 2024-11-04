export const createLottoNumbers = () => {
    let numberSet = new Set();
    while(numberSet.size < 6){
        let number = Math.floor(Math.random() * 45) + 1
        numberSet.add(number);
    }
    return [...numberSet].sort((a, b) => a - b);
}

export const createBonusNumber = (numbers) => {
    let number = Math.floor(Math.random() * 45) + 1;
    console.log(numbers);
    console.log(number);

    while(numbers.has(number)){
        number = Math.floor(Math.random() * 45) + 1;
    }
    return number;
}

export const offerLottoSheet = (quantity) => {
    let sheet = [];

    for(let i=0; i<quantity; i++){
        const lottoNumbers = new Set(getLottoNumbers());
        let singleLotto = [lottoNumbers, getBonusNumber(lottoNumbers)];
        sheet.push(singleLotto);
    }
    console.log(sheet);
}