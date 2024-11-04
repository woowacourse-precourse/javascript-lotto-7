# javascript-lotto-precourse

## 💡 구현할 기능 목록 💡

### 📍 Model

1. **Lotto**: 로또 번호 생성 및 검증
   - [x] 1~45 범위의 중복되지 않는 6개의 숫자를 생성한다.
   - [x] 생성된 숫자 배열을 검증하여 6개의 숫자가 포함되도록 한다.
2. **LottoStore**: 로또 발행 및 구입 내역 저장
   - [x] 입력된 구입 금액에 맞춰 로또 발행 수량을 계산한다.
   - [x] 로또 번호 목록을 저장하고, 당첨 번호와 보너스 번호 정보를 저장한다.
3. **WinningNumbers**: 당첨 번호 및 보너스 번호 관리
   - [x] 당첨 번호 및 보너스 번호를 저장하고, 중복 여부와 범위를 검증한다.
4. **ResultCalculator**: 당첨 결과 계산 및 수익률 산출
   - [x] 로또 번호와 당첨 번호를 비교하여 등수를 계산한다.
   - [x] 당첨 통계와 수익률을 계산하여 반환한다.

### 📍 View

1. **InputView**: 입력 처리
   - [x] 구입 금액, 당첨 번호, 보너스 번호 입력 받아서 Model에 전달한다.
2. **OutputView**: 결과 출력
   - [x] 발행된 로또 번호를 오름차순으로 정렬하여 출력한다.
   - [x] 당첨 내역과 수익률을 지정된 형식에 맞게 출력한다.

### 📍 Controller

1. **LottoController**: 프로그램 흐름 관리
   - [x] 구입 금액을 입력받아 로또 발행 개수를 계산하고, 로또 번호를 생성하여 Model에 저장한다.
   - [x] 입력받은 당첨 번호와 보너스 번호를 저장하고 검증한다.
   - [x] ResultCalculator를 사용하여 당첨 결과를 계산하고 수익률을 산출하여 View에 출력하도록 한다.

## ⚠️ 예외처리 목록 ⚠️

📍 **구입 금액 입력**

- 금액이 1,000원 단위가 아닌 경우
  - [x] `[ERROR] 구입 금액은 1,000원 단위여야 합니다.`
- 입력 값이 숫자가 아닌 경우
  - [x] `[ERROR] 구입 금액은 숫자여야 합니다.`
- 입력 값이 1,000원 미만인 경우
  - [x] `[ERROR] 구입 금액은 1,000원 이상이어야 합니다.`
- 입력 값이 비어있는 경우
  - [x] `[ERROR] 입력 값이 비어있습니다`

📍 **당첨 번호 입력**

- 당첨 번호가 6개가 아닌 경우
  - [x] `[ERROR] 당첨 번호는 6개여야 합니다.`
- 각 번호가 1~45 범위 밖인 경우
  - [x] `[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.`
- 당첨 번호에 중복된 숫자가 있는 경우
  - [x] `[ERROR] 당첨 번호에는 중복된 숫자가 없어야 합니다.`
- 당첨 번호의 구분자가 잘못된 경우
  - [x] `[ERROR] 번호 구분자는 쉼표(,)만 유효합니다.`

📍 **보너스 번호 입력**

- 보너스 번호가 1~45 범위 밖인 경우
  - [x] `[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.`
- 보너스 번호가 당첨 번호와 중복될 경우
  - [x] `[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.`

## 📁 파일구조 📁

```python
├── src/
│   ├── constants/
│   │   └── Constants.js
│   ├── controllers/
│   │   └── LottoController.js
│   ├── models/
│   │   ├── Lotto.js
│   │   ├── LottoStore.js
│   │   ├── WinningNumbers.js
│   │   └── ResultCalculator.js
│   ├── utils/
│   │   └── Validator.js
│   ├── views/
│   │   ├── InputView.js
│   │   └── OutputView.js
│   │── App.js
│   └── index.js
├── __tests__/
│   └── ApplicationTest.js
│   └── LottoStoreTest.js
│   └── LottoTest.js
│   └── ResultCalculatorTest.js
│   └── ValidatorTest.js
│   └── WinningNumbersTest.js
├── README.md
```
