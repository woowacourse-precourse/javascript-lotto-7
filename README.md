# javascript-lotto-precourse

## ✅ 기능 구현 목록

- [x] 로또 구입 금액 입력받기
  - [x] 1,000원으로 나누어 떨어지지 않으면 예외 처리
  - [x] 숫자가 아닌 수가 입력되면 예외 처리
  - [x] 양수가 아니면 예외 처리
- [x] 로또 발행하기
  - [x] 구입 금액만큼 로또 발행하기
  - [x] 하나의 로또는 1~45 사이의 중복되지 않는 6개의 수여야 함
  - [x] 오름차순으로 정렬
- [x] 발행한 로또 출력하기
- [x] 당첨 번호 입력받기
  - [x] 1~45 사이로 입력받기
  - [x] 중복되지 않게 하기
  - [x] 숫자인지 확인하기
  - [x] 6개인지 확인하기
  - [x] `,`로 구분
- [x] 보너스 번호 입력받기
  - [x] 당첨 번호와 중복 X, 1~45 사이의 수
  - [x] 숫자인지 확인
- [x] 발행한 로또와 당첨 번호 비교 (당첨 통계)
  - [x] 일치한 번호 개수마다 일치한 로또 개수 저장하기
- [x] 수익률 계산하고 출력
  - [x] 소수점 둘째 자리에서 반올림하기
- [x] 에러 문구 확인하기

## 💻 구현 내용

기능들을 최대한 class로 구현하여 모듈화 해 App.js에서의 가독성이 좋고 유지 보수성이 좋게 구현해 보았습니다.

### App.js

- 전체적인 흐름을 관리합니다.
- `generateLottoNumbers` 메서드를 사용해 1~45 사이의 중복되지 않는 6개의 숫자를 오름차순으로 정렬하여 반환하게 하였습니다.

### Input.js

- 해당 미션의 입력값을 관리합니다.
- 매개 변수로 validation을 입력받아 해당 입력값에 대한 유효성 검증을 하도록 합니다.
- `inputValue` 메서드는 입력 메시지를 매개변수로 받아 메시지를 출력해 사용자가 해당 메시지에 맞게 입력하도록 하고 유효성 검증이 완료된 값을 저장합니다.
- `getLottoCount`와 `changeArray`와 같은 메서드를 만들어 각 입력값에 맞게 값을 저장하도록 하였습니다.

### Lotto.js

- 랜덤한 6개의 숫자를 매개변수로 입력받아 해당 번호가 로또에 적합한지 검증하고 저장하는 `Lotto` 클래스가 있습니다.

### LottoResultCalculator.js

- 로또 결과를 계산하는 `LottoResultCalculator` 클래스가 있습니다.
- `calculateResults` 메서드는 `getRank` 메서드를 통해 로또 번호와 당첨 번호, 보너스 번호를 비교하여 각 등수에 맞게 일치하는 개수를 증가시키고 총 수익액을 구합니다.
- `calculateRate` 메서드는 구입 금액을 매개변수로 받아 총 수익률을 계산합니다.
- `printLottoResult`와 `printReturnOfRate`는 당첨 통계와 총 수익률을 출력합니다.

### message.js

- 해당 파일에 공통적으로 사용하는 메시지와 에러 메시지를 저장하여 관리하고 다른 파일에서 사용할 수 있도록 합니다.

### validate.js

- 로또 프로그램의 유효성 검사를 수행하는 모듈로, 사용자가 입력한 값에 대한 검사들을 수행합니다.
- `validatePurchaseAmount`는 구매 금액의 유효성을 검사합니다.
  - `checkDivisibleByThousand`는 구매 금액이 1,000원 단위로 나누어 떨어지는지 확인
  - `checkIsNumber`는 값이 숫자인지 확인
  - `checkIsPositive`는 값이 0보다 큰 양수인지 확인
- `validateWinningNum`은 당첨 번호의 유효성을 검사합니다.
  - `checkIsNumber`는 배열 내 모든 값이 숫자인지 확인
  - `checkRange`는 각 숫자가 1~45 범위 내에 있는지 확인
  - `checkIsSixElements`는 입력된 번호가 정확히 6개인지 확인
  - `checkDuplication`은 배열 내 중복된 값이 없는지 확인
- `validateBonusNum`은 보너스 번호의 유효성을 검사합니다.
  - `checkIsNum`은 값이 숫자인지 확인
  - `checkRange`는 숫자가 1~45 사이인지 확인
  - `checkNotInWinnigNum`는 보너스 번호가 당첨 번호 배열 `winnigNum`에 포함되지 않았는지 확인

## ⭐️ 결과 ⭐️

<img width="361" alt="스크린샷 2024-11-04 오전 4 03 24" src="https://github.com/user-attachments/assets/43a02e05-f954-4bc7-b1ee-bb2254fbdf06">

### 🚨 오류 발생 시

<img width="544" alt="스크린샷 2024-11-04 오전 4 05 20" src="https://github.com/user-attachments/assets/7c639652-ea38-4f0f-a67c-adf73e6c688f">

## 🤔 테스트

LottoResultCalculator 클래스를 테스트하는 코드를 만들어 테스트해보았습니다.

- `calculateResult` 메서드 테스트: 각 로또 번호와 당첨 번호를 비교하여 당첨 등수별로 개수를 정확히 계산하는지 검증
- `calculateRate` 메서드 테스트: 구매 금액과 총 상금을 기반으로 수익률이 정확히 계산되는지 확인
- `printLottoResult` 및 `printReturnOfRate` 출력 테스트: 당첨 결과와 수익률이 올바른 형식으로 출력되는지 검증

### 테스트 결과

<img width="743" alt="스크린샷 2024-11-04 오후 1 44 43" src="https://github.com/user-attachments/assets/3c80414e-f4a3-462b-98a3-d5e3984fe16d">
<img width="357" alt="스크린샷 2024-11-04 오후 1 45 15" src="https://github.com/user-attachments/assets/b6b4f6de-b827-478e-83b6-24821853777b">
