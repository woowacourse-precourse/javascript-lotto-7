# javascript-lotto-precourse
# 스스로 정한 규칙
- 로또의 당첨 번호 및 보너스 번호는 서로 중복될 수 없다.
- 로또 구입 금액은 1,000원 이상이어야 한다.

# 기능 구현 목록
## 입력
- [x] 로또 구입 금액
    - 1000원 단위로 입력 받는다
- [x] 당첨 번호 입력
    - 쉼표를 기준으로 구분
    - 6개의 숫자를 입력
    - 1~45의 숫자가 중복된 수 없이 입력
- [x] 보너스 번호 입력
    - 1~45의 숫자만 입력됨
    - 당첨 번호와 중복될 수 없음
## 출력
- [x] 로또 구매 결과 출력
  - "1개를 구매했습니다.`\n` [8, 21, 23, 41, 42, 43]\n"
- [x] 로또 당첨 통계 출력
  - "당첨 통계`\n`---`\n`3개 일치 (5,000원) - 1개\n"

## 게임

### 로또 generator
- [x] 구입 금액에 따른 로또 객체 생성(발행)
    - 생성 시 `pickUniqueNumbersInRange` 메서드로 랜덤 변수 생성
    - 랜덤 변수는 오름차순으로 정렬하여 저장

### Result Calculator
- [x] 각 로또 인스턴스의 성과 측정
  - [x] `ResultCalculator`에서 `lotto`에 번호를 요청한다.
- [x] 측정된 성과에 따른 결과 저장
  - [x] `lotto`의 번호에 따라 결과를 산정하고, `PrizeResults`에 이를 저장한다.
- [x] (성과 / (`로또 제너레이터`가 입력 받은 구입 금액)) * 100으로 수익률  산정

## 입력 예외 처리
- [x] 로또 구입 금액이 정수가 아닌 경우
- [x] 로또 구입 금액이 '0'으로 시작하는 경우
- [x] 1000원으로 나누어 떨어지지 않는 경우
    - [x] 숫자 외 문자가 포함된 경우 예외 처리
    - [x] 0을 제외한 1000으로 나누어 떨어지지 않는 경우 예외 처리

- [x] 쉼표로 구분된 수의 개수가 6개가 아닌 경우
- [x] 쉼표로 구분된 수 중 1~45의 숫자가 아닌 경우
  
- [x] 보너스 번호가 1~45 범위를 벗어나는 경우
- [x] 보너스 번호가 정수 외 다른 문자를 포함하는 경우
- [x] 보너스 번호에 당첨 번호 속 번호가 포함된 경우

## 로또 예외 처리
- [x] 번호가 총 6개가 아닌 경우
- [x] 중복된 번호가 존재하는 경우
- [x] 번호가 1~45 범위를 벗어나는 경우

# 각 객체의 역할
### Lotto
- `lotto`: 로또 번호를 저장한다. 게임 매니저에서 번호를 요구하면 반환한다.
- `lottoGenerator`: 구입 금액에 맞게 로또 객체를 생성한다.

### Calculator
- `ResultCalculator`: 각 로또의 당첨 내역을 산정한다. 
- `PrizeResults`: 전체 로또의 당첨 내역을 취합한다.
- `StatisticCalculation`: 전체 당첨 내역의 통계를 산정한다.

### Utility
- `InputView`: 로또 구입 금액, 당첨 번호, 보너스 번호를 입력하는 기능이 존재한다.
- `OutputView`: 로또 구매 결과 및 당첨 통계 출력 기능이 존재한다.

# 폴더 구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📂Lotto
 ┃ ┃ ┣ 📜Lotto.js                  // 로또 객체 관리 컴포넌트
 ┃ ┃ ┗ 📜LottoGenerator.js         // 로또 객체 생성 컴포넌트
 ┃ ┣ 📜PrizesResult.js             // 각 로또 성과 합 관리 컴포넌트
 ┃ ┣ 📜ResultCalculator.js         // 개별 로또 성과 산정 컴포넌트
 ┃ ┗ 📜StatisticCalculation.js     // 로또 성과 합을 통한 당첨 통계 산정 컴포넌트
 ┣ 📂resources   
 ┃ ┣ 📂ERROR   
 ┃ ┃ ┣ 📜BONUSNUMBER.js            // 보너스 번호 관련 에러 메시지 정의 파일
 ┃ ┃ ┣ 📜INPUTMONEY.js             // 구매 금액 관련 에러 메시지 정의 파일
 ┃ ┃ ┣ 📜LOTTONUMBERS.js           // 생성 로또 번호 관련 에러 메시지 정의 파일
 ┃ ┃ ┗ 📜WINNINGNUMBERS.js         // 당첨 번호 관련 에러 메시지 정의 파일
 ┃ ┣ 📜REGEX.js                    // 정규 표현식 정의 파일
 ┃ ┣ 📜RULES.js                    // 로또 규칙 관련 상수 정의 파일
 ┃ ┗ 📜VIEWMESSAGES.js             // UI 메시지 정의 파일
 ┣ 📂utils   
 ┃ ┣ 📂io   
 ┃ ┃ ┣ 📜InputView.js              // 사용자 입력 처리 기능
 ┃ ┃ ┗ 📜OutputView.js             // 컨텐츠 출력 기능
 ┃ ┗ 📂validator   
 ┃ ┃ ┣ 📜validateBonusNumber.js    // 입력된 보너스 번호의 타당성 검증 기능
 ┃ ┃ ┣ 📜validateInputMoney.js     // 입력된 구매 금액의 타당성 검증 기능
 ┃ ┃ ┣ 📜validateLottoNumbers.js   // 생성된 로또 번호의 타당성 검증 기능
 ┃ ┃ ┗ 📜validateWinningNumbers.js // 입력된 당첨 번호의 타당성 검증 기능
 ┣ 📜App.js
 ┗ 📜index.js
 ```