const ERROR_MESSAGES = Object.freeze({
  PREFIX: '[ERROR]',
  PURCHASE_PRICE_EMPTY:
    '구입금액이 입력되지 않았습니다. 구입금액을 반드시 입력해 주세요.',
  PURCHASE_PRICE_BELOW_MINIMUM:
    '최소 1개의 로또 구매를 위해 1000원 이상의 구입금액을 입력해 주세요.',
  PURCHASE_PRICE_NOT_MULTIPLE_OF_THOUSAND:
    '로또 1장의 가격은 1,000원입니다. 반드시 1,000원 단위로 입력해 주세요.',
  PURCHASE_PRICE_NOT_A_NUMBER:
    '구입금액이 잘못 입력되었습니다. 구입금액은 반드시 정수로 입력해 주세요.',
});

export default ERROR_MESSAGES;
