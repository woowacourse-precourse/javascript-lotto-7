import { INPUT_ERROR_MESSAGE } from '../constant/errorMessage';
import PurchaseAmount from './PurchaseAmount';

test('1000원 단위가 아니면 에러 던짐.', () => {
  expect(() => new PurchaseAmount(11500)).toThrow(
    `[ERROR] ${INPUT_ERROR_MESSAGE.PER_THOUSAND_WON}`,
  );
});

test('1000원 단위이면 에러 안던짐.', () => {
  expect(() => new PurchaseAmount(11000)).not.toThrow();
});
