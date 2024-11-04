import { Console, MissionUtils } from "@woowacourse/mission-utils";

export default function LottoPurchase(amount) {
  const repeatCount = amount / 1000;
  const LottoBundle = [];

  Console.print(`${repeatCount}개를 구매했습니다.`);
  for (let i = 0; i < repeatCount; i++) {
    const randomLotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const printFormat = randomLotto.map((item, index) =>
      index === randomLotto.length - 6 ? `${item}` : ` ${item}`
    );
    LottoBundle.push(randomLotto);

    Console.print(`[${printFormat}]`);
  }

  return LottoBundle;
}
