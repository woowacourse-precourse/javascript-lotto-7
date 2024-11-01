import { Console } from "@woowacourse/mission-utils";

class Rank_check {
  constructor(myLottoArray, numbers) {
    let numberMatchArray = [];
    myLottoArray.forEach((myLotto) =>
      numberMatchArray.push(this.countNumbersMatch(myLotto, numbers))
    );
    this.countRank(numberMatchArray);
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
    this.printRank(match_three, match_four, match_five, match_five_bonus, match_six);
  }
  
  printRank(match_three, match_four, match_five, match_five_bonus, match_six) {
    Console.print("\n당첨 통계");
    Console.print("---");
    Console.print("3개 일치 (5000원) - " + match_three + "개")
    Console.print("4개 일치 (50,000원) - " + match_four + "개")
    Console.print("5개 일치 (1,500,000원) - " + match_five + "개")
    Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - " + match_five_bonus + "개")
    Console.print("6개 일치 (2,000,000,000원) - " + match_six + "개")
  }
}

export default Rank_check;
