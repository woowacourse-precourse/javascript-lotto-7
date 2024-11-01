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

  countRank(numberMatchArray){
    let match_three = numberMatchArray.filter(numberMatch => 3 === numberMatch).length;
    let match_four = numberMatchArray.filter(numberMatch => 4 === numberMatch).length;
    let match_five = numberMatchArray.filter(numberMatch => 5 === numberMatch).length;
    let match_five_bonus = 0;
    let match_six = numberMatchArray.filter(numberMatch => 6 === numberMatch).length;
  }

}

export default Rank_check;
