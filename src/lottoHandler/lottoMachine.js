import { Console } from '@woowacourse/mission-utils';

export default function lottoMachine(winningLotto, myLottos, bonusLotto) {
  const matchedNumberCountArray = [];
  myLottos.forEach((myLotto) => {
    const matchedNumberCount = myLotto.filter((lotto) =>
      winningLotto.includes(lotto),
    );

    if (matchedNumberCount.length === 5) {
      if (myLotto.find((lotto) => lotto === bonusLotto)) {
        return matchedNumberCountArray.push(7);
      }
    }
    if (matchedNumberCount.length >= 3) {
      matchedNumberCountArray.push(matchedNumberCount.length);
    }
  });

  return matchedNumberCountArray;
}
