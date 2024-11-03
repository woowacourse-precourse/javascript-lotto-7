import { Console } from "@woowacourse/mission-utils";

const printRateOfReturn = (cost, winnings) => {
  const rateOfReturn = (winnings / cost).toFixed(2);

  Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
};

export default printRateOfReturn;
