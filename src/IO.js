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

export async function displayLottosNumber(count){
  const lottos = generateLottos(count);
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


export function printResults(rankCount) {
  Console.print(MESSAGE.CORRECT_THREE+`${rankCount[3].count}개`);
  Console.print(MESSAGE.CORRECT_FOUR+`${rankCount[4].count}개`);
  Console.print(MESSAGE.CORRECT_FIVE+`${rankCount[5].count}개`);
  Console.print(MESSAGE.CORRECT_FIVE_WITH_BONUS+`${rankCount['5+bonus'].count}개`);
  Console.print(MESSAGE.CORRECT_SIX+`${rankCount[6].count}개`);
}