# javascript-lotto-precourse

## 구현 기능 목록

- [x] 1. 구입 금액 입력
  - [x] `구입금액을 입력해 주세요.` 안내 텍스트 출력
  - [x] 구입 금액 입력 받기
- [x] 2. 구입 금액 검증
  - [x] 양수인지 검증
  - [x] 1,000원 단위인지 검증
- [x] 3. 발행한 로또 수량 및 번호 출력
  - [x] `n개를 구매했습니다.` 텍스트 출력
  - [x] n개 로또의 수량 번호 오름차순 출력
  - 예시
  ```
  2개를 구매했습니다.
  [8, 21, 23, 41, 42, 43]
  [3, 5, 11, 16, 32, 38]
  ```
- [x] 4. 당첨 번호 입력
  - [x] `당첨 번호를 입력해 주세요.` 안내 텍스트 출력
  - [x] 당첨 번호 입력 받기
- [x] 5. 당첨 번호 검증
  - [x] 각 당첨 번호가 쉼표를 기준으로 구분 되어 있는지 검증
  - [x] 당첨 번호가 6개 인지 검증
  - [x] 각 당첨 번호가 숫자인지 검증
  - [x] 각 당첨 번호가 중복되는지 검증
  - [x] 각 당첨 번호가 로또 번호 숫자 범위(1 ~ 45) 내에 있는지 검증
- [x] 6. 보너스 번호 입력
  - [x] `보너스 번호를 입력해 주세요.` 안내 텍스트 출력
  - [x] 보너스 번호 입력 받기
- [x] 7. 보너스 번호 검증
  - [x] 숫자인지 검증
  - [x] 로또 번호 숫자 범위(1 ~ 45) 내에 있는지 검증
- [x] 8. 당첨 내역 출력
  - [x] `n개 일치 (금액) - k개` 와 같은 형식으로 출력
  - 예시
  ```
  당첨 통계
  ---
  3개 일치 (5,000원) - 1개
  4개 일치 (50,000원) - 0개
  5개 일치 (1,500,000원) - 0개
  5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
  6개 일치 (2,000,000,000원) - 0개
  ```
- [x] 9. 수익률 출력
  - [x] 소수점 둘째자리에서 반올림
  - [x] `총 수익률은 n%입니다.` 와 같은 형식으로 출력
  - 예시
  ```
  총 수익률은 62.5%입니다.
  ```

## Project Tree

```
javascript-lotto-7
├─ .npmrc
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ App.js
│  ├─ components
│  │  ├─ Lotto.js
│  │  ├─ LottoController.js
│  │  ├─ LottoDisplayHandler.js
│  │  └─ LottoTicketsGenerator.js
│  ├─ index.js
│  ├─ resources
│  │  └─ Constants.js
│  └─ utils
│     ├─ ArrayUtils.js
│     ├─ io
│     │  ├─ Input.js
│     │  └─ Output.js
│     ├─ isEmpty.js
│     └─ validation
│        ├─ bonusNumberValidator.js
│        ├─ purchaseAmountValidator.js
│        └─ winningNumberValidator.js
└─ __tests__
   ├─ integration
   │  └─ ApplicationTest.js
   └─ unit
      ├─ class
      │  └─ LottoTest.js
      └─ feature
         ├─ BonusNumberInputTest.js
         ├─ BonusNumberValidationTest.js
         ├─ LottoTicketsOutputTest.js
         ├─ PurchaseAmountInputTest.js
         ├─ PurchaseAmountValidationTest.js
         ├─ RateOfReturnOutputTest.js
         ├─ WinningNumberInputTest.js
         ├─ WinningNumberValidationTest.js
         └─ WinningResultOutputTest.js

```
