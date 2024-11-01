import { Validator } from '../Validator.js';
import { calculateQuatity } from '../utils/index.js';

test.each([
  ['8000', 8],
  ['12000', 12],
])('구입 금액 검증 성공', (purchaseAmount, result) => {
  const validator = new Validator();
  validator.validatePurchaseAmount(purchaseAmount);
  const purchaseQuantity = calculateQuatity(purchaseAmount);
  expect(purchaseQuantity).toBe(result);
});

test.each([
  ['8100', '[ERROR] 구입 금액은 1,000원 단위여야 합니다.'],
  ['0', '[ERROR] 구입 금액은 1,000원 이상이어야 합니다.'],
  ['1.1', '[ERROR] 구입 금액은 정수이어야 합니다.'],
  ['-10', '[ERROR] 구입 금액은 1,000원 이상이어야 합니다.'],
  ['', '[ERROR] 구입 금액이 입력되지 않았습니다.'],
])('구입 금액 검증 실패', (purchaseAmount) => {
  expect(() => {
    const validator = new Validator();
    validator.validatePurchaseAmount(purchaseAmount);
  }).toThrow('[ERROR]');
});

