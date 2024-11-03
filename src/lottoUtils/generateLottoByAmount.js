import generateLotto from "./generateLotto";

export default function generateLottoByAmount(amount) {
  const count = Math.floor(amount / 1000);
  const lottos = [];
  for (let i = 0; i < count; i++) {
    lottos.push(generateLotto());
  }
  return lottos;
}
