# javascript-lotto-precourse

## 기능 목록

- 유저는 로또 구입 금액을 입력한다.
  - 구입 금액은 1000원 단위로 입력받으며 나누어 떨어지지 않으면 예외처리 한다
  - 입력값이 자연수가 아닐 시 예외처리한다.
- 당첨 번호를 입력받는다.
  - 쉼표 기준으로 입력받는다.
  - 번호가 1~45를 범위에 없다면 예외처리한다.
  - 당첨번호가 6개가 아니라면 예외처리한다.
- 보너스 번호를 입력받는다.
  - 당첨 번호 값과 동일한 validation 을 진행한다.
  - 당첨번호와 보너스 번호 중 중복된 번호가 있다면 예외처리한다.
- 1~45 내의 랜덤 숫자를 총 6개 뽑아 로또를 발행한다.
- 발행한 로또 수량 만큼 반복한다.
- 발행한 로또와 당첨번호를 비교하여 당첨 내역에 저장한다.
- 발행한 로또 목록 중 당첨 내역을 출력한다.
- 당첨 총 금액을 구입 금액과 비교하여 수익률을 반환한다.
