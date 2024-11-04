# javascript-lotto-precourse

## 기능 요구 사항

간단한 로또 발매기를 구현한다.

### 로또

- [x] 로또 번호의 숫자 범위는 1~45 로 설정한다.
- [x] 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.

### 당첨

- [x] 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- [x] 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
  - [x] 1등: 6개 번호 일치 / 2,000,000,000원
  - [x] 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - [x] 3등: 5개 번호 일치 / 1,500,000원
  - [x] 4등: 4개 번호 일치 / 50,000원
  - [x] 5등: 3개 번호 일치 / 5,000원

### 입력 플로우

- [x] 로또 구입 금액을 입력할 수 있다.
  - 로또 구입 금액을 입력 받는다. 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
- [x] 로또 구입 금액을 입력하면, 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- [x] 당첨 번호와 보너스 번호를 입력받는다.
- [x] 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.

### 에러 핸들링

- [x] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.
  - 에러가 메시지를 표시해주지만 다시 입력 프롬프트 창을 표시한다.
