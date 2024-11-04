# javascript-lotto-precourse

간단한 로또 발매기를 구현합니다.
사용자에게 로또 구입 금액과 당첨 번호를 입력 받고, 구입한 금액만큼 로또를 발행하여 당첨 번호를 기준으로 한 당첨 여부를 출력합니다.

## 기능 목록

### 유저 입력 처리

로또 총 구입 금액과 당첨 번호, 보너스 번호를 입력받습니다.

- [x] 사용자에게 로또 구입 금액을 입력 받습니다.

  - [x] 천 단위 구분 기호(`,`) 및 띄어쓰기를 허용합니다. (ex- `1,000` -> `1000`, `10 000 000` -> `10000000`)
  - [x] 로또 구입 금액은 숫자로 입력되어야 합니다. `"만원"` 등 한글로 단위를 입력하는 경우는 허용하지 않고 예외 처리합니다.
  - [x] 로또 구입 금액은 `1,000`으로 나누어 떨어지는 양의 정수여야 합니다. 빈 값, 음수, `1,000`으로 나누어 떨어지지 않는 경우 예외 처리합니다.

- [x] 사용자에게 당첨 번호를 입력받습니다.

  - [x] 당첨 번호는 쉼표(`,`)를 기준으로 구분합니다. 이외의 구분자는 허용하지 않습니다.
  - [x] 총 6개의 당첨 번호를 입력받습니다. 6개 미만 또는 초과인 경우 예외 처리합니다.
  - [x] 당첨 번호는 서로 다른 숫자여야 합니다. 중복된 값이 입력된 경우 예외 처리합니다.
  - [x] 당첨 번호는 모두 1~45 사이의 정수여야 합니다. 해당하지 않는 경우 예외 처리합니다.

- [x] 사용자에게 보너스 번호를 입력받습니다.

  - [x] 보너스 번호는 1~45 사이의 정수여야 합니다. 해당하지 않는 경우 예외 처리합니다.
  - [x] 보너스 번호는 앞서 입력한 당첨 번호에 포함되지 않은 숫자여야 합니다. 중복된 값이 입력된 경우 예외 처리합니다.

### 로또 발행 및 출력

구입 금액에 맞게 로또를 발행하고 출력합니다.

- [x] 구입 금액에 맞춰 로또를 발행합니다. (ex-`10000`원 입력시 10장 발행)

  - [x] 구입 금액은 로또 한 장 당 `1,000`원이며 모든 금액을 소진합니다.
  - [x] 1매 발행시마다 1~45 사이의 서로 다른 숫자 6개를 랜덤하게 저장합니다.

- [x] 발행한 로또 정보를 출력합니다.

  - [x] 사용자가 구매한 로또의 장수를 출력합니다.
  - [x] 발행된 로또 번호 리스트를 모두 출력합니다.
  - [x] 1매당 로또 번호는 오름차 순으로 정렬하여 출력합니다. (ex- `[1, 3, 6, 32, 44, 45]`)

### 당첨 확인 및 통계 결과 출력

입력된 당첨 번호와 발행된 로또 번호를 비교하고, 당첨 통계 결과를 출력합니다.

- [ ] 발행된 로또 번호와 입력된 당첨 번호를 비교합니다.

  - [ ] 사용자가 입력한 당첨 번호와 보너스 번호를 통해 당첨 여부를 확인합니다. 당첨 규칙은 아래를 따릅니다.

  ```
  1등: 6개 번호 일치
  2등: 5개 번호 + 보너스 번호 일치
  3등: 5개 번호 일치
  4등: 4개 번호 일치
  5등: 3개 번호 일치
  ```

- [ ] 총 수익률을 계산합니다.

  - [ ] 로또 구매 금액과 총 당첨 금액을 비교하여 수익률을 출력합니다. 당첨 금액은 아래와 같습니다.

  ```
  1등: 2,000,000,000원
  2등: 30,000,000원
  3등: 1,500,000원
  4등: 50,000원
  5등: 5,000원
  ```

  - [ ] 수익률은 소수점 둘째 자리에서 반올림합니다. (ex- `66.66666` -> `66.6`)

- [ ] 당첨 통계 결과를 출력합니다.

  - [ ] 당첨 개수를 등수 별로 안내합니다.
  - [ ] 총 수익률을 출력합니다.

### 공통 에러 처리

- [x] 사용자가 잘못된 값을 입력할 경우 “[ERROR]”로 시작하는 메시지와 함께 Error를 발생시킵니다.
- [x] 에러 발생시, 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받습니다.
