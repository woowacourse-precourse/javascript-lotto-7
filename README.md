# 🎰 로또

## ✨ 기능 소개

- 구매 금액을 입력하여 금액에 맞는 개수의 로또를 발행합니다.
- 당첨 번호와 보너스 번호를 입력해서 발행된 로또의 당첨 통계와 수익률을 확인할 수 있습니다.

## 📷 동작 스크린샷

### 정상 동작
![normal](https://github.com/user-attachments/assets/4dc43e4f-7ede-43b5-913d-6fd41050dac6)

### 에러 동작
![error](https://github.com/user-attachments/assets/2a5fce32-17a7-4b11-b597-66f6ee8f8bdd)

## 📋 기능 목록

### 입력

- [x] 로또 구입 금액 입력
- [x] 당첨 번호 입력
- [x] 보너스 번호 입력
- [x] 오류가 발생한 경우 메시지 출력하고 다시 입력 받기

### 출력

- [x] 발행한 로또 개수 출력
- [x] 발행한 로또 번호 출력 (각 번호는 오름차순이어야 한다.)
- [x] 당첨 내역 출력 (등수별 당첨 개수, 당첨금액)
- [x] 수익률 출력

### 로또

- [x] 로또 구입 금액에 따라 로또 발행
- [x] 로또 번호 생성 (1~45 사이의 정수, 중복되지 않아야 한다.)
- [x] 로또 번호 정렬 (오름차순)
- [x] 당첨 여부와 등수 확인
- [x] 수익률 계산

### 예외 처리

- 공통
  - [x] 빈 입력인 경우 예외 처리
- 로또 구입 금액
  - [x] 숫자가 아니거나 숫자로 변환할 수 없는 경우 예외 처리
  - [x] 1000원 미만인 경우 예외 처리
  - [x] 1000원 단위가 아닌 경우 예외 처리
- 당첨 번호
  - [x] 6개가 아닌 경우 예외 처리
  - [x] 숫자가 아니거나 숫자로 변환할 수 없는 경우 예외 처리
  - [x] 1~45 사이의 정수가 아닌 경우 예외 처리
  - [x] 중복된 숫자가 있는 경우 예외 처리
- 보너스 번호
  - [x] 1개가 아닌 경우 예외 처리
  - [x] 숫자가 아니거나 숫자로 변환할 수 없는 경우 예외 처리
  - [x] 1~45 사이의 정수가 아닌 경우 예외 처리
  - [x] 당첨 번호와 중복된 숫자가 있는 경우 예외 처리
- 로또 발행
  - [x] 로또 번호가 6개가 아닌 경우 예외 처리
  - [x] 로또 번호가 1~45 사이의 정수가 아닌 경우 예외 처리
  - [x] 로또 번호에 중복된 숫자가 있는 경우 예외 처리
 
## 📁 폴더 구조

```
.
├── README.md
├── __tests__
│   ├── ApplicationTest.js
│   ├── domains
│   │   ├── LottoNumberGeneratorTest.js
│   │   ├── LottoPurchaseManagerTest.js
│   │   ├── LottoStatisticsTest.js
│   │   ├── LottoTest.js
│   │   └── WinningResultCheckerTest.js
│   ├── ui
│   │   ├── LottoInputTest.js
│   │   └── LottoOutputTest.js
│   ├── utils
│   │   ├── CustomErrorTest.js
│   │   └── retryAsyncWithLogTest.js
│   └── validation
│       ├── bonusNumberValidationTest.js
│       ├── inputValidationTest.js
│       ├── lottoNumberValidationTest.js
│       ├── purchaseValidationTest.js
│       └── winningNumbersValidationTest.js
└── src
    ├── App.js
    ├── LottoMachine.js (로또 기능들을 연결하는 모듈)
    ├── constants (여러 모듈에서 쓰이는 상수들)
    │   ├── LotteryPrizeTable.js (로또 당첨 규칙)
    │   ├── LottoNumberRule.js (로또 번호 규칙)
    │   └── SingleLottoPrice.js (로또 1개 가격)
    ├── domains (핵심 기능과 관련된 모듈)
    │   ├── Lotto.js (로또 객체)
    │   ├── LottoNumberGenerator.js (로또 번호 생성)
    │   ├── LottoPurchaseManager.js (로또 구매)
    │   ├── LottoStatistics.js (전체 로또 당첨 통계)
    │   └── WinningResultChecker.js (로또 당첨 여부 판정)
    ├── index.js
    ├── types.js
    ├── ui (입출력 모듈)
    │   ├── Input.js
    │   ├── LottoInput.js (로또 서비스에 필요한 입력)
    │   ├── LottoOutput.js (로또 서비스에 필요한 출력)
    │   └── Output.js
    ├── utils (여러 곳에서 사용되는 모듈 / 함수)
    │   ├── CustomError.js
    │   ├── checkRuleSet.js (규칙 세트를 모두 검사하는 함수)
    │   ├── getLogSpy.js
    │   ├── mockQuestions.js
    │   └── retryAsyncWithLog.js (에러가 나는 경우 출력 후 재시도하는 함수)
    └── validations
        ├── bonusNumberValidation.js (보너스 번호의 유효성 검사 모듈)
        ├── inputValidation.js (기본 입력 유효성 검사 모듈)
        ├── lottoNumberValidation.js (로또 번호의 유효성 검사 모듈)
        ├── purchaseValidation.js (구매 금액의 유효성 검사 모듈)
        └── winningNumbersValidation.js (당첨 번호의 유효성 검사 모듈)
```

## ✅ 테스트 결과
![application_test](https://github.com/user-attachments/assets/ee086a98-c0a1-4d06-86de-b9296d7a4ffb)
![domain_test](https://github.com/user-attachments/assets/2abdc515-038e-4235-a21d-dccc608bbf50)
![ui_test](https://github.com/user-attachments/assets/de00438b-755a-4ec7-8adc-d777f7844927)
![utils_test](https://github.com/user-attachments/assets/5d84d3a6-c071-45d2-aa02-eb527bc37cd6)
![validation_test](https://github.com/user-attachments/assets/d3102548-a544-47be-8266-867b6c8eea95)

