import Lotto from "./Lotto";

class LottoIssuer {
  createLotto(numbers) {
    return new Lotto(numbers);
  }
}

export default LottoIssuer;
