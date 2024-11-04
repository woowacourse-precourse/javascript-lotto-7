import { Console } from '@woowacourse/mission-utils';
import VIEWMESSAGES from '../../resources/VIEWMESSAGES.js';

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
  Console.print(
    VIEWMESSAGES.LIST_COUNT_MESSAGE.replace('{lottoCount}', lottoCount),
  );
  lottoList.forEach((lotto) => {
    printAfterFormatting(lotto.getNumbers());
  });
  printBlankLine();
}

function pushTitleMessages(messages) {
  messages.push(VIEWMESSAGES.STATISTICS_TITLE);
}

function pushResultMessages(statistics, messages) {
  statistics.forEach((detail, key) => {
    if (key === 'ROI') {
      messages.push(VIEWMESSAGES.ROI_MESSAGE.replace('{detail}', detail));
      return;
    }
    if (key === '5withoutBonus') {
      messages.push(
        VIEWMESSAGES.MATCH_WITHOUT_BONUS_MESSAGE.replace(
          '{detail.prize}',
          detail.prize.toLocaleString(),
        ).replace('{detail.count}', detail.count),
      );
      return;
    }
    if (key === '5withBonus') {
      messages.push(
        VIEWMESSAGES.MATCH_WITH_BONUS_MESSAGE.replace(
          '{detail.prize}',
          detail.prize.toLocaleString(),
        ).replace('{detail.count}', detail.count),
      );
      return;
    }
    messages.push(
      VIEWMESSAGES.MATCH_RESULT_MESSAGE.replace('{key}', key)
        .replace('{detail.prize}', detail.prize.toLocaleString())
        .replace('{detail.count}', detail.count),
    );
  });
}

export function printFinalResults(statistics) {
  const messages = [];
  pushTitleMessages(messages);
  pushResultMessages(statistics, messages);
  printBlankLine();
  Console.print(messages.join('\n'));
}
