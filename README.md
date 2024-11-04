# javascript-lotto-precourse

**우아한테크코스 프리코스 3주차 과제입니다.**

**본 과제는 로또 구입 금액만큼 랜덤 값으로 로또를 발행한 후, 로또 당첨 기준에 따른 로또 당첨 내역과 수익률을 보여주는 간단한 로또 발매기를 구현하는 과제입니다.**

## 📖 3주차 학습 내용 정리

[@sooyeoniya - 3주차 학습 내용 정리](https://www.notion.so/sooyeoniya/3-13428d20974f80348541fe137384c848)

## ✅ 기능 목록

### ✔️ 입력

  - [x] 로또 구입 금액을 입력 받기
  - [x] 당첨 번호를 입력 받기
    - [x] 쉼표(,) 기준으로 분리 후 공백 제거
  - [x] 보너스 번호 입력 받기

### ✔️ 기능

  - [x] 로또 구입 금액에 따른 발행한 로또 수량 계산
  - [x] 1 ~ 45 사이의 중복되지 않는 숫자 6개를 로또 수량만큼 뽑아서 오름차순으로 저장
  - [x] 미리 정해 둔 당첨 기준과 금액에 따라 각 로또 별 당첨 내역 저장
  - [x] 전체 로또 당첨 내역에 따라 총 수익률 계산
    - [x] 로또 구입 금액 대비 당첨 금액 백분율 계산
    - [x] 수익률은 소수점 둘째 자리에서 반올림

### ✔️ 출력

  - [x] 로또 구입 금액을 입력 받은 후 발행한 로또 수량 및 번호 출력
  - [x] 당첨 번호와 보너스 번호 입력 받은 후 당첨 통계 출력
    - [x] 각 당첨 기준 별 로또 당첨 개수 출력
    - [x] 출력 형식에 맞게 총 수익률 출력

### ✔️ 예외 처리
  - [x] 입력 값 오류 시 에러 메시지 출력 후 해당 지점에서 재입력 받기

    **로또 구입 금액 입력**
    - [x] 숫자인지 확인
    - [x] 정수인지 확인
    - [x] 1,000원 이상인지 확인
    - [x] 1,000원 단위인지 확인
    - [x] 최댓값 제한: `2,000,000,000원`을 초과하는지 확인

    **당첨 번호 입력**
    - [x] 로또 숫자가 총 6개인지 확인
    - [x] 모든 번호가 숫자인지 확인
    - [x] 모든 번호가 정수인지 확인
    - [x] 모든 번호가 1 부터 45 사이의 숫자인지 확인
    - [x] 중복된 숫자가 있는지 확인
  
    **보너스 번호 입력**
    - [x] 숫자인지 확인
    - [x] 정수인지 확인
    - [x] 1 부터 45 사이의 숫자인지 확인
    - [x] 당첨 번호에 있는 숫자들과 중복되는지 확인

### ✔️ 테스트 코드

  - [x] 통합 테스트

      - 기능 테스트
      - 예외 테스트

  - [x] 단위 테스트

      - [x] **Lotto 테스트**
          - 로또 당첨 번호 유효성 검사
          - 로또 당첨 번호 반환 검사

      - [x] **LottoBonus 테스트**
          - 보너스 번호 유효성 검사
          - 보너스 번호 반환 검사

      - [x] **LottoCount 테스트**
          - 로또 구입 금액 유효성 검사
          - 로또 구입 개수 반환 검사

      - [x] **LottoIssuance 테스트**
          - 발행된 로또 반환 검사

      - [x] **LottoRevenue 테스트**
          - 수익률 반환 검사

      - [x] **LottoStatistics 테스트**
          - 로또 당첨 내역 반환 검사

## 🏛️ 프로젝트 구조
```
__tests__
├── ApplicationTest.js
├── LottoBonusTest.js
├── LottoCountTest.js
├── LottoIssuanceTest.js
├── LottoRevenueTest.js
├── LottoStatisticsTest.js
└── LottoTest.js

src
├── App.js
├── constants
│   └── constants.js
├── controller
│   ├── LottoCoreController.js
│   ├── LottoInputController.js
│   └── LottoProcessController.js
├── domain
│   ├── Lotto.js
│   ├── LottoBonus.js
│   ├── LottoCount.js
│   ├── LottoIssuance.js
│   ├── LottoRevenue.js
│   └── LottoStatistics.js
├── index.js
├── utils
│   ├── inputPipe.js
│   ├── parser.js
│   └── validateCondition.js
├── validations
│   ├── BonusNumberValidations.js
│   ├── CommonValidations.js
│   ├── LottoNumbersValidations.js
│   └── LottoPurchasePriceValidations.js
└── view
    ├── InputView.js
    └── OutputView.js
```
