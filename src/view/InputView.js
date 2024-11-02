import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async inputAmount() {
    const purchaseAmount = await Console.readLineAsync(
      `구입금액을 입력해 주세요.\n`
    );
    return purchaseAmount;
  },

  as,
};

export default InputView;
