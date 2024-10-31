# javascript-lotto-precourse

## 📜기능 목록

### 1. 입력 유효성 검사 🆗

#### **파일명**: `Validation.js`

- **`validatePurchaseAmount(purchaseAmount)`** - 로또 구입 금액 입력에 대한 유효성 검사를 수행합니다.

  - **비어있는 경우**: `[ERROR] 입력이 없습니다.` 에러 발생

  - **숫자 이외의 문자가 포함된 경우**: `[ERROR] 숫자 이외의 문자가 입력되었습니다.` 에러 발생

  - **1,000원으로 나누어 떨어지지 않는 경우**: `[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.` 에러 발생

- **`validateWinningNumber(winningNumber)`** - 당첨 번호 입력에 대한 유효성 검사를 수행합니다.

  - **비어있는 경우**: `[ERROR] 입력이 없습니다.` 에러 발생

  - **쉼표, 숫자, 공백 이외의 문자가 포함된 경우**: `[ERROR] 잘못된 입력입니다.` 에러 발생

  - **6개가 아닌 경우**: `[ERROR] 로또 번호는 6개여야 합니다.` 에러 발생

  - **1보다 작거나 45보다 큰 수가 포함된 경우**: `[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.` 에러 발생

  - **중복된 숫자가 있는 경우**: `[ERROR] 중복된 숫자가 있습니다.` 에러 발생

- **`validateBonusNumber(bonusNumber)`** - 보너스 번호 입력에 대한 유효성 검사를 수행합니다.

  - **비어있는 경우**: `[ERROR] 입력이 없습니다.` 에러 발생

  - **숫자 외의 문자가 포함된 경우**: `[ERROR] 숫자 이외의 문자가 입력되었습니다.` 에러 발생

  - **1보다 작거나 45보다 큰 경우**: `[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.` 에러 발생

---

### 2. 로또 발행 🎰

#### **파일명**: `Lotto.js`

- **`getLottoPurchaseCount(purchaseAmount)`** - 구입 금액에 해당하는 로또 개수를 반환한다. 로또 1장의 가격은 1,000원이다.

  - 예시:

    `12000` → `12`

- **`lottoNumberGenerator(purchaseCount)`**

  - 구매한 수량 만큼 로또를 발행한다.

- **`printLottoNumber(lotto)`** - 발행한 로또 수량 및 번호를 출력한다. 로또 번호는 오름차순으로 정렬하여 보여준다.

- **`compareLottoNumber(lotto)`** - 당첨 번호와 일치하는 숫자 개수를 리턴한다.

- **`printLottoResult()`** - 당첨 내역을 출력한다.

- **`caculateProfitRatio()`** - 수익률을 리턴한다.
