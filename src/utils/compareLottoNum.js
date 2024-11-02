export function compareLottoNum(lottoArray, answerNum, bonusNum) {
  let correctLottoArray = [];

  lottoArray.map((value) => {
    correctLottoArray.push(value.compare(answerNum, bonusNum));
  });
  return correctLottoArray;
}
