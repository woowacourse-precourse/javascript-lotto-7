import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../src/message.js';
import { validateCost, validatePickedNumbers, validatePickedBonusNumbers } from '../src/error.js';
import { generateLottos } from '../src/Lotto.js';
import { evaluateResults } from '../src/result.js';

export async function getCost() {
  const cost = await Console.readLineAsync(MESSAGE.ASK_COST+"\n");
  validateCost(Number(cost));
  const count = cost/1000;
  return count;
}

export async function displayLottosCount(count){
  Console.print("\n"+count+MESSAGE.COUNT_INFO);
}

export function displayLottosNumber(lottos) { // count 대신 lottos를 매개변수로 받습니다.
  lottos.forEach(lotto => {
    Console.print(`[${lotto.getNumbers().join(', ')}]`);
  });
}


export async function userPickedNumbers() {
  const pickedNumbers = await Console.readLineAsync("\n"+MESSAGE.ASK_USER_PICK_NUMBER+"\n");
  validatePickedNumbers(pickedNumbers);
  return pickedNumbers.split(',').map(number => Number(number.trim()));
} 


export async function userPickedBonusNumber(pickedNumbers) {
  const pickedBounsNumber = await Console.readLineAsync("\n"+MESSAGE.ASK_USER_PICK_BONUS_NUMBER+"\n");
  validatePickedBonusNumbers(pickedBounsNumber, pickedNumbers);
  return Number(pickedBounsNumber.trim()); 
}


export function printResults(rankCount, cost) {
  const prizes = {
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000 
  };

  let totalPrize = 0;
  Object.keys(rankCount).forEach(rank => {
    totalPrize += rankCount[rank] * prizes[rank];
  });

  const yieldPercentage = ((totalPrize / cost) * 100).toFixed(1);

  Console.print("\n"+MESSAGE.PRIZE_STATISTICS);
  Console.print(MESSAGE.CORRECT_THREE+`${rankCount[5]}개`);
  Console.print(MESSAGE.CORRECT_FOUR+`${rankCount[4]}개`);
  Console.print(MESSAGE.CORRECT_FIVE+`${rankCount[3]}개`);
  Console.print(MESSAGE.CORRECT_FIVE_WITH_BONUS+`${rankCount[2]}개`);
  Console.print(MESSAGE.CORRECT_SIX+`${rankCount[1]}개`);
  Console.print(MESSAGE.TOTAL_YIELD_1+`${yieldPercentage}%`+MESSAGE.TOTAL_YIELD_2);
}
