import generateLotto from "./generateLotto";
const Lotto_price = 1000;

export default function generateLottoByAmount(amount) {
  const count = Math.floor(amount / Lotto_price);
  const lottos = [];
  for (let i = 0; i < count; i++) {
    lottos.push(generateLotto());
  }
  return lottos;
}
