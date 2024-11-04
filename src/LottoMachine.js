export const createLottoNumbers = () => {
    let numberSet = new Set();
    while(numberSet.size < 6){
        let number = Math.floor(Math.random() * 45) + 1
        numberSet.add(number);
    }
    return [...numberSet].sort((a, b) => a - b);
}

export const offerLottoSheet = (quantity) => {
    let sheet = [];

    for(let i=0; i<quantity; i++){
        sheet.push(createLottoNumbers());
    }

    return sheet;
}