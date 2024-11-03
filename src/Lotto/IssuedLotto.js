class IssuedLotto extends Lotto {
    #lottoTable;

    constructor(numbers) {
        super(numbers);
        this.#lottoTable = this.applyLottoToTable(numbers);
    }

    static makeIssuedLotto() {
      return new IssuedLotto(random.makeUniqueNumbers(1, 45, 6));
    }
    // makeLottoTable(numbers) {
    //     let lottoTables = []
    //     numbers.forEach((oneLotto) => {
    //         tables.push(this.applyLottoToTable(oneLotto));
    //     });
    //     return lottoTables;
    // }
    applyLottoToTable(numbers) {
        let lottoTable = Array.from({ length: 45 }, () => 0);
        numbers.forEach((element) => {
            lottoTable[element - 1] += 1;
        });
        return lottoTable;
    }
    getWinningGrade(answer) {
        const matchAmount = getNumberOfMatches(answer.getNumbers());

    }
    getNumberOfMatches(answer) {
        let matchNumber = 0;
        answer.getNumbers().forEach((element) => {
            matchNumber += this.#lottoTable[element];
        });
        return matchNumber;
    }
    isMatchedBonus(bonus){
        return this.#lottoTable[bonus] === 1;
    }
}