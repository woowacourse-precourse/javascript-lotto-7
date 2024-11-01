const EXECUTE_MESSAGE = {
  LOTTO: {
    RECEIPT: (count) => Object.freeze(`${count}개를 구매했습니다.`),
    NUMBERS: (numbers) => Object.freeze(numbers),
  },
  PRIZE: {
    STATISTIC: ({ matchingNumber, price, count, isBonus }) =>
      Object.freeze(
        `${matchingNumber}개 일치${
          isBonus ?? ", 보너스 볼 일치"
        } (${price}원) - ${count}개`
      ),
    TOTAL_RATE: (rate) => Object.freeze(`총 수익률은 ${rate}%입니다.`),
  },
};

export default EXECUTE_MESSAGE;
