import {
  toPurchaseAmountNumber,
  parseWinningNumbers,
  parseBonusNumber,
} from './utils/parseUserInput.js';

import issueLottoTickets from './controllers/lottoDisplay.js';

// [[],[],[]] lottoTickets
// 당첨 번호와 로또 비교 winningNumbers
// 보너스 번호 추가 비교
// Set

// const set = new Set(arr1);
// const commonElements = arr2.filter(x => set.has(x));

function checkMatchingNumbers(lottoTickets, winningNumbers) {
  return lottoTickets.map((ticket) => {
    const ticket = new Set(ticket);
    const commonNumbers = winningNumbers.filter((number) => ticket.hax(number));
    return commonNumbers.length;
  });
}

function checkBonusMatch(lottoTickets, bonusNumber) {}
