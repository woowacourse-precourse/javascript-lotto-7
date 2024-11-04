import { Console } from "@woowacourse/mission-utils";

class Rank_check {
  constructor(myLottoArray, numbers, bonusNumber) {
    let numberMatchArray = [];
    myLottoArray.forEach((myLotto) =>
      numberMatchArray.push(this.countNumbersMatch(myLotto, numbers))
    );

    let bonusNumberMatchArray = [];
    myLottoArray.forEach((myLotto) =>
      bonusNumberMatchArray.push(this.countBonusNumbersMatch(myLotto, bonusNumber))
    );
    this.countRank(myLottoArray, numberMatchArray, bonusNumberMatchArray);
  }

  countNumbersMatch(myLotto, numbers) {
    let numberMatch = myLotto.filter((myNumber) =>
      numbers.includes(myNumber)
    ).length;
    return numberMatch;
  }

  countBonusNumbersMatch(myLotto, bonusNumber) {
    let bonusNumberMatch = 0;
    if(myLotto.some((myNumber) => myNumber === bonusNumber)) {
      bonusNumberMatch++;
    }
    return bonusNumberMatch;
  }

  countRank(myLottoArray, numberMatchArray, bonusNumberMatchArray){
    let match_six = numberMatchArray.filter(numberMatch => 6 === numberMatch).length;

    for (let index = 0; index < bonusNumberMatchArray.length; index++) {
      if(bonusNumberMatchArray[index] === 1 && numberMatchArray[index] !== 5) {
        numberMatchArray[index] ++;
      }
      else if(bonusNumberMatchArray[index] === 1 && numberMatchArray[index] === 5)
        numberMatchArray[index] += 2;
    }
    let match_three = numberMatchArray.filter(numberMatch => 3 === numberMatch).length;
    let match_four = numberMatchArray.filter(numberMatch => 4 === numberMatch).length;
    let match_five = numberMatchArray.filter(numberMatch => 5 === numberMatch).length;
    let match_five_bonus = numberMatchArray.filter(numberMatch => 7 === numberMatch).length;
    this.printRank(match_three, match_four, match_five, match_five_bonus, match_six);
    this.revenue_percent(myLottoArray, match_three, match_four, match_five, match_five_bonus, match_six);
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

  revenue_percent(myLottoArray, match_three, match_four, match_five, match_five_bonus, match_six) {
    let payment = (myLottoArray.length) * 1000;
    let revenue = (match_three * 5000) + (match_four * 50000) + (match_five * 1500000) + (match_five_bonus * 30000000) + (match_six * 2000000000);
    let revenue_percent = (revenue / payment) * 100;
    this.print_revenue_percent(revenue_percent);
  }
  
  print_revenue_percent(revenue_percent) {
    let revenue_percent_round = Math.round(revenue_percent * 10) / 10;
    Console.print("총 수익률은 "+ revenue_percent_round + "%입니다.");
  }
}

export default Rank_check;
