import { sortAscending, pickUniqueLottoRandomNumbers } from "../util/util.js";

class LottoNumbersGenerator {
  constructor() {
    this.allLottoNumbers = [];
  }

  printLottoNumbers(quantity) {
    for (let i = 0; i < quantity; i++) {
      const numbers = pickUniqueLottoRandomNumbers();
      this.allLottoNumbers.push(sortAscending(numbers));
    }
    return this.allLottoNumbers;
  }
}

export default LottoNumbersGenerator;
