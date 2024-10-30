# javascript-lotto-precourse

## 🛠️ 기능 구현 목록

- [ ] **로또 구입 금액 입력**

  - 로또 구입 금액을 입력 받는다. 구입 금액은 1,000원 단위로 입력 받는다.
    - 1,000원 단위로 나누어 떨어지지 않는 경우: `[ERROR] 1,000원 단위로 나누어 떨어지지 않습니다.`
    - 숫자가 아닌 값이 입력된 경우: `[ERROR] 로또 구입은 숫자만 입력 가능합니다.`
    - 1,000원 이하의 값이 입력될 경우: `[ERROR] 최소 1,000원 이상 구매가 가능합니다.`

- [ ] **당첨 번호 입력**

  - 사용자가 당첨 번호를 입력받는다. 번호는 쉼표(,)를 기준으로 구분한다.
    - 당첨 번호가 숫자가 아닐 경우: `[ERROR] 당첨 번호는 숫자가 아닌 값이 들어올 수 없습니다.`
    - 음수값이 입력될 경우: `[ERROR] 당첨 번호는 음수 값을 허용하지 않습니다.`
    - 쉼표(,) 제외한 특수문자 값이 입력될 경우: `[ERROR] 당첨 번호는 쉼표(,)로만 구분 가능합니다.`
    - 1과 45사이의 숫자가 아닌 값이 입력될 경우: `[ERROR] 1과 45사이의 숫자가 아닌 값은 입력할 수 없습니다.`
    - 당첨 번호가 6개가 아닌 값이 입력될 경우: `[ERROR] 당첨 번호는 6개를 입력해야 됩니다.`

- [ ] **보너스 번호 입력**

  - 사용자가 보너스 번호를 입력받는다. 
    - 보너스 번호가 숫자가 아닐 경우: `[ERROR] 보너스 번호는 숫자가 아닌 값이 들어올 수 없습니다.`
    - 당첨 번호와 중복된 값이 입력될 경우: `[ERROR] 보너스 번호와 당첨 번호는 중복된 값이 들어올 수 없습니다.`
    - 음수값이 입력됐을 경우: `[ERROR] 보너스 번호는 음수 값을 허용하지 않습니다.`
    - 1과 45사이의 숫자가 아닌 값이 들어왔을 경우: `[ERROR] 1과 45사이의 숫자가 아닌 값은 입력할 수 없습니다.`
    - 보너스 번호가 1개가 아닌 값이 입력될 경우: `[ERROR] 보너스 번호는 1개를 입력해야 됩니다.`

- [ ] **발행한 로또 수량 및 번호 출력**

  - 발행한 로또 수량 및 번호를 출력한다. 로또 번호는 오름차순으로 정렬하여 보여준다.
    - `ex. 1개를 구매했습니다.` 
    - `[8, 21, 23, 41, 42, 43]`

- [ ] **당첨 통계 내역 출력**

  - 당첨 통계 내역을 출력한다. 
    - 당첨 내역엔 번호 일치 개수와, 당첨 금액 단위와, 당첨된 갯수를 출력한다.
    - `ex. 3개 일치 (5,000) - 1개`

- [ ] **수익률 출력**

  - 수익률을 출력한다. 수익률은 소수점 둘째 자리에서 반올림 한다.
    - `ex. 총 수익률은 62.5%입니다.`
