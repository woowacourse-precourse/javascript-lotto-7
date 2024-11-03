import { Console } from '@woowacourse/mission-utils';

export default function printGeneratedList(lottoList) {
  const lottoCount = lottoList.length;

  printBlankLine();
  Console.print(`${lottoCount}개를 구매했습니다.`);
  lottoList.forEach((lotto) => {
    printAfterFormatting(lotto.getNumbers());
  });
  printBlankLine();
}

function printBlankLine() {
  Console.print('');
}

function printAfterFormatting(array) {
  const formattedString = `[${array.map((number) => number).join(', ')}]`;
  Console.print(formattedString);
}
