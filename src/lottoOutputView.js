import { Console } from "@woowacourse/mission-utils";

export const lottoOutputView = {
  showMessage: (message) => {
    Console.print(message);
  },
  showLottoQuantity(lottoQuantity) {
    const lottoQuantityMessage = `${lottoQuantity}개를 구매했습니다.`;

    Console.print(lottoQuantityMessage);
  },
  showLottoListNumber(lottoList) {
    lottoList.forEach(this.showLottoNumber);
  },
  showLottoNumber(lotto) {
    const lottoDelimiter = ", ";

    const lottoNumberMessage = `[${lotto.numbers.join(lottoDelimiter)}]`;
    Console.print(lottoNumberMessage);
  },
  showEmptyLine() {
    Console.print("");
  },
};
