import Lotto from "./Lotto.js";

class WinningNumbers {
  #winningLotto = null; // 당첨 번호 (Lotto)

  setWinningLotto(winningLottoInput) {
    // split 해서 배열로 만들기
    const winningLottoArr = winningLottoInput.trim().split(",").map(Number);
    this.#winningLotto = new Lotto(winningLottoArr);
  }

  getWinningLotto() {
    return this.#winningLotto.getLotto();
  }
}

export default WinningNumbers;
