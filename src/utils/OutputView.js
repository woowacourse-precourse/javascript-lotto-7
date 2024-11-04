import { Console } from '@woowacourse/mission-utils';

function printBlankLine() {
  Console.print('');
}

function printAfterFormatting(array) {
  const formattedString = `[${array.map((number) => number).join(', ')}]`;
  Console.print(formattedString);
}

export function printGeneratedList(lottoList) {
  const lottoCount = lottoList.length;

  printBlankLine();
  Console.print(`${lottoCount}개를 구매했습니다.`);
  lottoList.forEach((lotto) => {
    printAfterFormatting(lotto.getNumbers());
  });
  printBlankLine();
}

function pushTitleMessages(messages) {
  const statisticsTitle = '당첨 통계\n---';
  messages.push(statisticsTitle);
}

function pushResultMessages(statistics, messages) {
  statistics.forEach((detail, key) => {
    if (key === 'ROI') {
      const formattedResult = `총 수익률은 ${detail}%입니다.`;
      messages.push(formattedResult);
      return;
    }
    if (key === '5withoutBonus') {
      const formattedResult = `5개 일치 (${detail.prize.toLocaleString()}원) - ${detail.count}개`;
      messages.push(formattedResult);
      return;
    }
    if (key === '5withBonus') {
      const formattedResult = `5개 일치, 보너스 볼 일치 (${detail.prize.toLocaleString()}원) - ${detail.count}개`;
      messages.push(formattedResult);
      return;
    }
    const formattedResult = `${key}개 일치 (${detail.prize.toLocaleString()}원) - ${detail.count}개`;
    messages.push(formattedResult);
  });
}

export function printFinalResults(statistics) {
  const messages = [];
  pushTitleMessages(messages);
  pushResultMessages(statistics, messages);

  Console.print(messages.join('\n'));
}
