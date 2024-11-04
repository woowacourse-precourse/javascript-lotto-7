import Validation from "./Utils/Validation";

class LottoCount {
  #count;

  constructor(count) {
    this.#count = this.#validate(count);
  }

  #validate(count) {
    let validatedCount = Validation.inputNaturalNumber(count);

    return validatedCount;
  }

  getLottoCount() {
    return this.#count;
  }
}

export default LottoCount;
