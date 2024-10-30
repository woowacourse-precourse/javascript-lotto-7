import { Console } from '@woowacourse/mission-utils';

const getPurchasePriceInput = async () => {
  const purchasePrice = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  return purchasePrice;
};

export { getPurchasePriceInput };
