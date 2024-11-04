import Lotto from "../Lotto.js";
import { COMMA } from "../Constant.js";

export const makeWinningLotto = (winningLottoString) => {
  const winningLotto = new Lotto(winningLottoString.split(COMMA));

  return winningLotto;
};
