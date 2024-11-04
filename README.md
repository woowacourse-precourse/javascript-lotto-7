# javascript-lotto-precourse

## 📜기능 목록

### 1. 입력 유효성 검사 🆗

#### 파일명: `Validation.js`

- **`isNotEmpty(input)`**

  - 입력값이 **비어있는 경우** `[ERROR] 입력이 없습니다.` 오류가 발생합니다.

- **`isNumerical(input)`**

  - **숫자 이외의 문자가 포함된 경우** `[ERROR] 숫자 이외의 문자가 입력되었습니다.` 오류가 발생합니다.

- **`endsWithThreeZeros(input)`**

  - 입력이 **`000`으로 끝나지 않을 경우** `[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.` 오류가 발생합니다.

- **`isInRange(input)`**

  - **1보다 작거나 45보다 큰 수가 입력된 경우** `[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.` 오류가 발생합니다.

- **`validatePurchaseAmount(purchaseAmount)`**

  - 로또 구입 금액 입력에 대한 유효성 검사를 수행합니다.
  - 입력에 대해 세 가지 테스트를 진행합니다.
    - `isNotEmpty()`
    - `isNumerical()`
    - `endsWithThreeZeros()`

- **`validateBonusNumber(bonusNumber)`**
  - 보너스 번호 입력에 대한 유효성 검사를 수행합니다.
  - 입력에 대해 세 가지 테스트를 진행합니다.
    - `isNotEmpty()`
    - `isNumerical()`
    - `isInRange()`

---

### 2. 로또 구매 💰

#### 파일명: `PurchaseLotto.js`

- **`purchaseLotto(purchaseCount)`**

  - 전달된 개수만큼 로또를 생성하여 배열로 반환합니다.
  - 각 로또 번호는 `MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)`를 사용하여 1부터 45 사이의 중복되지 않은 6개의 숫자로 생성됩니다.
  - 생성된 숫자를 `Lotto` 클래스의 인스턴스로 만들어 배열에 추가합니다.

- **`printPurchasedLotto(lottoList)`**
  - 로또 배열의 각 항목에 대해 `Lotto` 클래스의 `printNumbers()` 메서드를 호출하여 구매한 로또 번호를 콘솔에 출력합니다.

---

### 3. Lotto 클래스 🎫

#### 파일명: `Lotto.js`

- **`Lotto(numbers)` (Constructor)**

  - 6개의 숫자로 구성된 로또를 생성하는 클래스입니다.
  - `numbers`는 1에서 45 사이의 중복되지 않은 숫자 6개로 구성된 배열이어야 합니다.
  - 로또 번호는 다음 조건을 통해 유효성 검사를 수행합니다.
    - 숫자 배열의 길이가 6인지 확인합니다.
    - 배열의 모든 요소가 숫자로 이루어져 있는지 확인합니다.
    - 모든 숫자가 1부터 45 사이에 속하는지 확인합니다.
    - 숫자에 중복이 없는지 확인합니다.
  - 유효하지 않은 `numbers`가 입력되면 오류가 발생합니다.

- **`getNumbers` (Getter)**

  - 로또 번호 배열을 반환합니다.

- **`printNumbers()`**
  - 로또 번호 배열을 `[n1, n2, n3, ...]` 형식으로 포맷하여 콘솔에 출력합니다.

---

### 4. Result 클래스 🔢

#### 파일명: `Result.js`

- **`Result()` (Constructor)**

  - 로또 당첨 결과를 기록하기 위한 클래스입니다.
  - 1등부터 5등까지 각 등수에 대한 당첨 로또 개수를 초기화합니다.

- **`calcRanking(lottoList, winningNumbers, bonusNumber)`**

  - 당첨 번호와 보너스 번호를 기준으로 등수를 집계합니다.
  - `lottoList`의 로또 번호와 당첨 번호의 일치하는 수의 개수를 확인한 후 `rank()`메서드를 호출하여 해당하는 등수의 카운트를 증가시킵니다.

- **`calcPrizeMoney()`**

  - 각 등수의 당첨 개수에 해당하는 총 상금을 계산하여 `#prizeMoney`에 저장합니다.

- **`calcRateOfReturn(purchaseAmount)`**

  - 구매 금액을 입력받아 수익률을 계산하여 `#rateOfReturn`에 저장합니다.

- **`printResult()`**

  - 각 등수에 대한 당첨 결과와 수익률을 정해진 형식으로 콘솔에 출력합니다.

- **`rank(numbers, matchNumLen, bonusNumber)`**

  - 5개 번호 일치 시 보너스 번호 포함 여부를 확인하여 2등을 판단합니다.
  - 2등이 아닐 경우 `updateRank(matchNumLen)` 메서드를 호출하여 등수를 판단합니다.

- **`updateRank(matchNumLen)`**
  - 일치하는 번호 개수(`matchNumLen`)에 따라 해당하는 등수의 카운트를 증가시킵니다.
