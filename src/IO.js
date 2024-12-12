import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../src/message.js';
import { validateCost, validatePickedNumbers, validateBouns } from '../src/error.js';

export async function getCost(){
  const cost = await Console.readLineAsync(MESSAGE.ASK_COST+"\n");
  validateCost(Number(cost));
  const count = cost/1000;
  return count;
}

export function displayCount(count){
  Console.print("\n"+count + MESSAGE.SHOW_COUNT);
}

export function displayLottosNumber(lottos) {
  lottos.forEach(lotto => {
    Console.print(`[${lotto.getNumbers().join(', ')}]`);
  });
}

export async function getNumbers() {
  const pickedNumbers = await Console.readLineAsync("\n"+MESSAGE.ASK_NUMBERS+"\n");
  validatePickedNumbers(pickedNumbers);
  return pickedNumbers.split(',').map(number => Number(number.trim()));
} 

export async function getBonus(pickedNumbers){
  const pickedBonus = await Console.readLineAsync("\n"+MESSAGE.ASK_BONUS+"\n")
  validateBouns(pickedBonus, pickedNumbers)
  return pickedBonus;
}

export function displayResult(){
  Console.print("\n"+ MESSAGE.SHOW_RESULT);
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

  Console.print(MESSAGE.THREE+`${rankCount[5]}개`);
  Console.print(MESSAGE.FOUR+`${rankCount[4]}개`);
  Console.print(MESSAGE.FIVE+`${rankCount[3]}개`);
  Console.print(MESSAGE.FIVE_WITH_BONUS+`${rankCount[2]}개`);
  Console.print(MESSAGE.SIX+`${rankCount[1]}개`);
  Console.print(MESSAGE.TOTAL_1+`${yieldPercentage}%`+MESSAGE.TOTAL_2);
}