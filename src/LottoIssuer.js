import Lotto from "./Lotto.js";

class LottoIssuer {
  createLotto(numbers) {
    return new Lotto(numbers);
  }
}

export default LottoIssuer;
