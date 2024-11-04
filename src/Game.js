import { inputBonusNumValue, inputWiinningNumsValue, resultNums } from './constants/constants.js';

function Game(lottoNums) {
  let myNums = inputWiinningNumsValue.concat(inputBonusNumValue).sort((a, b) => a - b);
  for (let i = 0; i < lottoNums.length; i++) {
    let count = lottoNums[i].filter((num) => myNums.includes(num)).length;
    if (resultNums.has(count)) {
      resultNums.set(count, resultNums.get(count) + 1);
    }
  }
  return resultNums;
}
export default Game;
