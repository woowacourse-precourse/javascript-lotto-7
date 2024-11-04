# 로또(Lotto)

이 프로젝트는 우아한테크코스 프리코스 3주차 과제인 `구입 금액만큼 로또를 발행하고 당첨 내역과 수익률을 출력`하는 **간단한 로또 발매기**를 다루고 있습니다.

## 🎮 실행 결과 예시

![게임 실행 결과 예시](img/lottery-machine-demo.png)

## 🚀 기능 요구 사항

- 사용자가 로또 구입 금액과 당첨 번호(+보너스번호)를 입력하면 당첨 내역과 수익률을 출력하는 간단한 로또 발매기를 구현한다.

### 기능 목록

- 로또 번호의 숫자 범위는 `1~45`까지다.

##### 로또 발행

- 로또 한 장은 `1,000원`이다.
- 1개의 로또를 발행할 때 **중복되지 않는 숫자 6개**를 뽑는다.

```bash
구입금액을 입력해 주세요.
8000
```

```bash
8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]
```

##### 당첨 기준

- 당첨은 *1등부터 5등*까지 있다.

| 등수 | 당첨 기준                   | 당첨 금액       |
| :--: | --------------------------- | --------------- |
| 1등  | 6개 번호 일치               | 2,000,000,000원 |
| 2등  | 5개 번호 + 보너스 번호 일치 | 30,000,000원    |
| 3등  | 5개 번호 일치               | 1,500,000원     |
| 4등  | 4개 번호 일치               | 50,000원        |
| 5등  | 3개 번호 일치               | 5,000원         |

##### 당첨 번호와 보너스 번호

- 당첨 번호 추첨 시 `중복되지 않는 숫자 6개와 보너스 번호 1개`를 입력 받는다.

```bash
당첨 번호를 입력해 주세요.
1,2,3,4,5,6
```

```bash
보너스 번호를 입력해 주세요.
7
```

##### 당첨 내역 및 수익률

- 로또 번호와 당첨 번호를 비교하여 `당첨 내역 및 수익률`을 출력한다.
- 출력을 마치면 게임이 **종료**된다.

```bash
당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
```

```bash
총 수익률은 62.5%입니다.
```

##### [ERROR]

- 사용자가 잘못된 값을 입력할 경우 **[ERROR]** 메시지와 함께 Error를 발생시킨 후 `해당 지점부터 다시` 입력 받는다.

```bash
123,21,2,3,4,5

[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.
```

```bash
1,2,3,4,5,6,7,8

[ERROR] 사용자는 6개의 숫자를 뽑아야 합니다.
```

---

### 입출력 요구 사항

##### 입력

- **로또 구입 금액**  
  구입 금액은 1,000원 단위며 1,000원으로 나누어 떨어지지 않으면 **예외 처리**

```bash
14000
```

- **당첨 번호**  
  중복되지 않는 당첨 번호 6개 입력받으며 `,`로 구분

```bash
1,2,3,4,5,6
```

- **보너스 번호**  
  중복되지 않는 **보너스 번호** 1개를 입력

```bash
7
```

##### 출력

- **로또 수량 및 번호**  
  발행한 로또 수량과 번호를 출력하며, *오름차순*으로 정렬

```bash
8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]
```

- **당첨 내역 출력**

```bash
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
```

- **수익률**  
  수익률은 소수점 둘째 자리에서 반올림

```bash
총 수익률은 62.5%입니다.
```

##### 실행 결과 예시

```bash
구입금액을 입력해 주세요.
8000

8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]

당첨 번호를 입력해 주세요.
1,2,3,4,5,6

보너스 번호를 입력해 주세요.
7

당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

---

## 🛠️ 구현 상세

### 구매 금액에 따른 로또 발행

- 구매자가 입력한 금액에 따라 로또를 발행합니다.
- 구매 금액의 **유효성**을 검사하고, 금액에 맞춰 로또 티켓을 생성합니다.

###### 모듈 구조

- _PurchaseValidator_(구매 금액 유효성 검사)  
  구매 금액이 올바른지 검사하며, 유효할 경우 LottoIssuer로 전달됩니다.

```javascript
static validate(purchaseAmount) {
  if (this.#isNotNumber(purchaseAmount)) {
    throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  }
  const formattedAmount = this.#formatAmount(purchaseAmount);

  if (this.#isNotPositiveNumber(formattedAmount)) {
    throw new Error(ERROR_MESSAGES.PURCHASE_AMOUNT_POSITIVE);
  }

  if (this.#isNotDivisibleByThousand(formattedAmount)) {
    throw new Error(
      ERROR_MESSAGES.PURCHASE_AMOUNT_DIVISIBILITY(LOTTO.TICKET_PRICE)
    );
  }
  return formattedAmount;
}
```

- _Lotto_(로또 티켓)  
  로또 티켓을 생성합니다. 번호 매칭 기능이 포함되어있으며, 무결성을 위해 값을 감싸는 `값객체` 역할을 합니다.

```javascript
constructor(numbers) {
  this.#validate(numbers);
  this.#numbers = numbers;
}

#validate(numbers) {
  if (numbers.length !== LOTTO.WINNING_NUMBERS_COUNT) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER_COUNT);
  }
  const uniqueNumbers = new Set(numbers);
  if (uniqueNumbers.size !== numbers.length) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
  }
}
```

- _LottoIssuer_(구매 금액에 따라 로또 티켓 생성)  
  유효한 구매 금액을 입력받아 로또 티켓을 생성합니다. `무작위 번호로 생성된 티켓`을 출력합니다.

```javascript
createLottoTickets(purchaseAmount) {
  const ticketCount = purchaseAmount / LOTTO.TICKET_PRICE;
  const lottoTickets = [];

  for (let i = GAME_SETTINGS.ZERO; i < ticketCount; i++) {
    const ticketNumbers = Random.pickUniqueNumbersInRange(
      LOTTO.NUMBER_RANGE.MIN,
      LOTTO.NUMBER_RANGE.MAX,
      LOTTO.WINNING_NUMBERS_COUNT
    ).sort((a, b) => a - b);

    lottoTickets.push(new Lotto(ticketNumbers));
  }
  Console.print(`${ticketCount}${MESSAGES.TICKET_PURCHASED}`);
  lottoTickets.forEach((ticket) => Console.print(ticket.toString()));

  return lottoTickets;
}
```

---

### 당첨 번호 입력(LottoValidator)

- 사용자 입력으로 받은 당첨 번호와 보너스 번호의 `유효성을 검사`하는 역할을 합니다. 번호의 유효성과, 중복 등을 검사합니다.

```javascript
  validateBonusNumber(winningNumbers, bonusNumber) {
    const validateBonusNumber = this.#validateBonusNumber(bonusNumber);

    if (winningNumbers.includes(validateBonusNumber)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }

    return validateBonusNumber;
  }
```

```javascript
validateWinningNumber(userInput) {
  const parsedNumbers = this.#parseUserInput(userInput);

  if (!this.#isCorrectCount(parsedNumbers)) {
    throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS);
  }

  if (this.#hasDuplicateNumbers(parsedNumbers)) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
  }

  return parsedNumbers;
}
```

---

### 당첨 내역(LottoMatcher)

- 발행된 로또와 당첨 번호를 비교하여 **당첨 결과를 계산**합니다. 당첨 숫자 개수와 보너스 일치 여부를 확인하고, `등수별 티켓 수`를 집계합니다.

```javascript
  run() {
    const rankCounts = {
      [RANK_KEYS.NONE]: GAME_SETTINGS.ZERO,
      [RANK_KEYS.THREE_MATCH]: GAME_SETTINGS.ZERO,
      [RANK_KEYS.FOUR_MATCH]: GAME_SETTINGS.ZERO,
      [RANK_KEYS.FIVE_MATCH]: GAME_SETTINGS.ZERO,
      [RANK_KEYS.FIVE_WITH_BONUS_MATCH]: GAME_SETTINGS.ZERO,
      [RANK_KEYS.SIX_MATCH]: GAME_SETTINGS.ZERO,
    };

    const matchNumbersArray = this.#checkMatchingNumbers();

    matchNumbersArray.forEach((matchCount, index) => {
      const rewardKey = this.#REWARDS[matchCount];

      const bonusMatch = this.#checkBonusMatch(this.#tickets[index]);

      if (rewardKey === RANK_KEYS.FIVE_MATCH && bonusMatch) {
        rankCounts[RANK_KEYS.FIVE_WITH_BONUS_MATCH]++;
      } else {
        rankCounts[rewardKey]++;
      }
    });

    return rankCounts;
  }
```

---

### 수익률(ProfitCalculator)

- 로또 게임의 *수익률*을 계산합니다. 당첨 티켓 수와 총 구매 금액을 이용해 `전체 수익과 수익률`을 집계합니다.

```javascript
  get profitRate() {
    const profit = Object.entries(this.#rankCounts).reduce(
      (acc, [key, value]) => {
        return acc + value * LOTTO_REWARD[key].prize;
      },
      GAME_SETTINGS.ZERO
    );
  }
```

---

## 📄 테스트(Testing)

- 단위 테스트(Unit Testing)를 통해 예외 상황과 함수 동작을 검증했습니다.
- 테스트는 `Jest`를 사용했으며, 다음과 같은 **주요 함수**를 테스트했습니다.

### 주요 테스트 기능

1. _PurchaseValidator(구매 금액 유효성)_ 테스트

- `유효한 구입 금액`이 입력될 때 값을 반환하는지 검증합니다.
- **화폐 표기 형식**  
  `,`가 화폐 표기 형식에 맞춰 입력된 경우도 `유효한 값`으로 처리합니다.

```javascript
test('값을 입력할 때 화폐를 표기할 때 사용하는 ,는 허용한다.', () => {
  // given
  const amountWithComma = '12,000';

  // when
  const result = PurchaseValidator.validate(amountWithComma);

  // then
  expect(result).toBe(12000);
});
```

---

2.  _Lotto(로또 티켓)_ 테스트

- 유효한 값

  - 로또 번호가 **6개를 초과하면** 예외가 발생하는지 확인합니다.
  - 로또 번호에 **중복된 숫자가 포함되면** 예외가 발생하는지 확인합니다.

```javascript
expect(() => {
  new Lotto([1, 2, 3, 4, 5, 6, 7]);
}).toThrow('[ERROR]');
```

```javascript
expect(() => {
  new Lotto([1, 2, 3, 4, 5, 5]);
}).toThrow('[ERROR]');
```

- 메서드 테스트
  1. getNumbers: 로또 번호 배열을 반환하는지 검증
  2. toString: 로또 번호를 `[1, 2, 3, 4, 5, 6]` 형식의 문자열로 반환하는지 검증
  3. getMatchedCount: 주어진 당첨 번호와 일치하는 번호의 개수를 정확히 반환하는지 확인
  4. isBonusMatched: 보너스 번호가 로또 번호에 포함되어 있는 경우 `true`를, 포함되어 있지 않은 경우 `false`를 반환하는지 확인

```javascript
// getNumbers()
const numbers = [1, 2, 3, 4, 5, 6];
const lotto = new Lotto(numbers);

expect(lotto.getNumbers()).toEqual(numbers);

// toString()
expect(lotto.toString()).toBe('[1, 2, 3, 4, 5, 6]');

// getMatchedCount()
const winningNumbers = [1, 2, 3, 7, 8, 9];
expect(lotto.getMatchedCount(winningNumbers)).toBe(3);

// isBonusMatched()
const bonusNumberIncluded = 6;
expect(lotto.isBonusMatched(bonusNumberIncluded)).toBe(true);
const bonusNumberNotIncluded = 7;
expect(lotto.isBonusMatched(bonusNumberNotIncluded)).toBe(false);
```

---

3. _LottoIssuer(로또 티켓 발매기)_ 테스트

   - *구입 금액에 따라 올바른 개수의 로또 티켓*이 발행되는지 확인합니다.
   - 각 로또 티켓이 **Lotto 클래스의 인스턴스**인지 확인합니다.

   ```javascript
   // given
   const purchaseAmount = 3000;
   const mockNumbers = [
     [1, 2, 3, 4, 5, 6],
     [7, 8, 9, 10, 11, 12],
     [13, 14, 15, 16, 17, 18],
   ];

   // when
   const lottoTickets = LottoIssuer.createLottoTickets(purchaseAmount);

   // 올바른 개수의 로또 티켓
   expect(lottoTickets).toHaveLength(purchaseAmount / LOTTO.TICKET_PRICE);

   // Lotto 클래스의 인스턴스인지 확인
   expect(lottoTickets.every((ticket) => ticket instanceof Lotto)).toBe(true);
   ```

---

4. _LottoMatcher(당첨 내역)_ 테스트

   - 각 로또 티켓에 대해 **일치하는 로또 번호의 개수**를 올바르게 반환하는지 검증합니다.
   - _예를 들어,_ 한 티켓이 6개 일치할 때 `SIX_MATCH`, 3개 일치할 때 `THREE_MATCH`, 일치하지 않을 때 `NONE`으로 반환됩니다.

   ```javascript
   // given
   const lottoTickets = [
     new Lotto([1, 2, 3, 4, 5, 6]),
     new Lotto([7, 8, 9, 10, 11, 12]),
     new Lotto([1, 3, 5, 7, 9, 11]),
   ];
   const winningNumbers = [1, 2, 3, 4, 5, 6];
   const bonusNumber = 7;
   // ... 생략

   // when
   const rankCounts = lottoMatcher.run();

   // then
   expect(rankCounts[RANK_KEYS.SIX_MATCH]).toBe(1);
   expect(rankCounts[RANK_KEYS.THREE_MATCH]).toBe(1);
   expect(rankCounts[RANK_KEYS.NONE]).toBe(1);
   ```

---

5. _ProfitCalculator(수익률)_ 테스트

   - **수익률이 올바르게 계산되는지** 확인합니다.
   - 당첨된 티켓의 개수와 등수에 맞춰 수익률이 정확하게 계산되어 예상값과 일치하는지 검증합니다.

   ```javascript
   // given
   const rankCounts = {
     [RANK_KEYS.THREE_MATCH]: 3,
     [RANK_KEYS.FOUR_MATCH]: 1,
     [RANK_KEYS.FIVE_MATCH]: 0,
     [RANK_KEYS.FIVE_WITH_BONUS_MATCH]: 1,
     [RANK_KEYS.SIX_MATCH]: 0,
   };
   const purchaseAmount = 100000;

   const expectedProfit =
     ((LOTTO_REWARD[RANK_KEYS.THREE_MATCH].prize * 3 +
       LOTTO_REWARD[RANK_KEYS.FOUR_MATCH].prize * 1 +
       LOTTO_REWARD[RANK_KEYS.FIVE_WITH_BONUS_MATCH].prize * 1) /
       purchaseAmount) *
     GAME_SETTINGS.PERCENTAGE_MULTIPLIER;

   // when
   const profitCalculator = new ProfitCalculator(rankCounts, purchaseAmount);
   const profitRate = Number(profitCalculator.profitRate);

   // then
   expect(profitRate).toBeCloseTo(expectedProfit, 1);
   ```

### 실행 방법

다음 명령어로 실행할 수 있습니다.

```bash
npm run test
```
