import { Console } from "@woowacourse/mission-utils";
export default function printLottos(lottos) {
  const count = lottos.length;
  Console.print(`${count}개를 구매했습니다.\n`);

  lottos.forEach((lotto) => {
    Console.print(`${JSON.stringify(lotto.getNumbers())}\n`);
  });
}
