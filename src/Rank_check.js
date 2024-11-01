import { Console } from "@woowacourse/mission-utils";

class Rank_check {
  constructor(myLottoArray, numbers) {
    let numberMatchArray = [];
    myLottoArray.forEach((myLotto) =>
      numberMatchArray.push(this.countNumbersMatch(myLotto, numbers))
    );
  }

  countNumbersMatch(myLotto, numbers) {
    let numberMatch = myLotto.filter((myNumber) =>
      numbers.includes(myNumber)
    ).length;
    return numberMatch;
  }
}

export default Rank_check;
