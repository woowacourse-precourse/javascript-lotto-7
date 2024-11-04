function getWinNumberMatchCount(lotto, winNumbers) {
  let matchCount = 0;

  lotto.forEach((number) => {
    const IS_WIN_NUMBER = winNumbers.includes(number);
    
    if (IS_WIN_NUMBER) {
      matchCount = matchCount + 1;
    }
  })
  
  return matchCount;
};

function getBonusNumberMatch(lotto, bonusNumber) {
  const IS_CONTAINING = lotto.includes(bonusNumber);
  return IS_CONTAINING;
};

function winNumberMatcher(lottoList, winNumbers, bonusNumber) {
  const RESULT_LIST = lottoList.map((lotto) => {
    const MATCH_COUNT = getWinNumberMatchCount(lotto, winNumbers);
    let bonusNumberContaining = false;

    if (MATCH_COUNT === 5) {
      bonusNumberContaining = getBonusNumberMatch(lotto, bonusNumber)
    }

    const RESULT = [ MATCH_COUNT, bonusNumberContaining ];
    return RESULT;
  });

  return RESULT_LIST;
};

function getFilteredMatchList(lottoList, winNumbers, bonusNumber) {
  const RESULT_LIST = winNumberMatcher(lottoList, winNumbers, bonusNumber)
  const FILTERED_LIST = RESULT_LIST.filter((result) => {
    return result[0] >= 3;
  });

  return FILTERED_LIST;
};

export { winNumberMatcher, getFilteredMatchList };