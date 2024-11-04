export const LOTTO_PRIZES = new Map([
  [3, 5000],
  [4, 50000],
  [5, 1500000],
  ['5B', 30000000],
  [6, 2000000000],
]);

export const LOTTO_RESULT_MESSAGES = Array.from(LOTTO_PRIZES).reduce((messages, [key, value]) => {
  const prizeMoney = value.toLocaleString();
  if (key === '5B') {
    messages.set(key, `5개 일치, 보너스 볼 일치 (${prizeMoney}원) - `);
    return messages;
  }

  messages.set(key, `${key}개 일치 (${prizeMoney}원) - `);
  return messages;
}, new Map());
