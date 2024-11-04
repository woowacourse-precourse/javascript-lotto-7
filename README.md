# javascript-lotto-precourse

## 구현할 기능 정리 및 설계

### 기능 목록

- [ ] **로또 구입 금액 입력 받기**

  입력한 금액이 숫자가 아닌 경우 에러 처리

  - [ ] **발행한 로또의 개수 구하기**

    1000원에 한 장 -> 입력값이 1000으로 나누어 떨어지지 않는 경우 에러 처리

- [ ] **입력한 개수만큼 로또 발행**

  - 중복되지 않는 6자리의 번호를 뽑는다.
  - 이때, 번호는 양의 정수이면서 1이상 45이하여야 한다.
  - 로또 번호는 오름차순으로 정렬한다.
  - 이 과정을 발행해야 하는 로또의 수만큼 진행한다.

- [ ] **발행한 로또 수량 및 번호 출력**

- [ ] **당첨 번호 입력 받기**

  - 쉼표(,)를 기준으로 번호를 입력 받는다.
  - 중복되는 번호가 존재하는 경우, 에러 처리한다.
  - 이때, 번호는 양의 정수이면서 1이상 45이하여야 한다.
  - 쉼표(,) 앞뒤에 공백이 포함된 경우는 에러 케이스로 분류하지 않는다. (ex. 1, 2, 3, 4, 5, 6)

- [ ] **보너스 번호 입력 받기**

  - 당첨 번호 6개 중 어떠한 것과도 일치하면 안된다.
  - 양의 정수이면서 1이상 45이하여야 한다.

- [ ] **당첨 내역 계산**

  - 로또 하나 당 당첨 번호와 비교하여 일치하는 개수를 센다.
  - 아래 기준에 맞추어 1~5등에 각각 해당하는 로또의 개수를 구한다.

  > 1등: 6개 번호 일치 / 2,000,000,000원 <br/>
  > 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원 <br/>
  > 3등: 5개 번호 일치 / 1,500,000원 <br/>
  > 4등: 4개 번호 일치 / 50,000원 <br/>
  > 5등: 3개 번호 일치 / 5,000원 <br/>

- [ ] **당첨 통계 출력**

계산한 당첨 내역을 형식에 맞추어 출력한다.

- [ ] **수익률 계산**

  - 수익률 = (당첨 금액 / 총 구입 금액) \* 100
  - 수익률은 소수점 둘째자리에서 반올림한다. (수익률이 소수가 아닌 경우, 소수점 아래는 0으로 표현한다. - ex. 100.0%)

<br/>

### Lotto.js

- '로또 한 장'의 역할을 하는 객체 -> 로또 번호 6자리를 담고 있음

- Lotto 클래스의 생성자는 객체 생성 시에 전달받은 numbers 배열에 대해 유효성 검사를 먼저 수행한 후, 유효한 경우에만 #numbers에 할당한다.

- 로또의 번호 6개를 담은 `numbers` 배열과 로또의 유효성을 검사하는 `validate` 메소드는 private으로, Lotto 클래스 내에서만 사용 가능하다.

- 내부에 추가할 기능들 :
  - 추가 유효성 검사 (중복 검사, 각 번호가 양의 정수인지 검사, 범위 안에 속하는 숫자인지 검사)
  - 일치하는 번호의 개수 구하기
