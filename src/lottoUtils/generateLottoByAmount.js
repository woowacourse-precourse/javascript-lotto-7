import generateLotto from "./generateLotto.js";
import { LOTTO_PRICE } from "../constants.js";

export default function generateLottoByAmount(amount) {
  const count = Math.floor(amount / LOTTO_PRICE);
  const lottos = [];
  for (let i = 0; i < count; i++) {
    lottos.push(generateLotto());
  }
  return lottos;
}
