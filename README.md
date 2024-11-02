# javascript-lotto-precourse

## 기능 요구 사항

간단한 로또 발매기를 구현한다.

- 로또 번호의 숫자 범위는 1~45까지이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원
- 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- 로또 1장의 가격은 1,000원이다.
- 당첨 번호와 보너스 번호를 입력받는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

## 기능 목록

- [x] 로또 구입 금액을 입력 받는다.
- - [ ] 구입 금액은 0이상의 숫자만 입력 가능하다.
- - [ ] 구입 금액은 1000원 단위만 가능하다.

- [x] 로또를 발행한다.
- - [x] 로또 번호 6개를 출력한다.
- - [x] 로또 번호는 1부터 45 사이의 숫자여야 한다.
- - [ ] 로또 번호는 중복될 수 없다.

- [ ] 발행한 로또 수량을 출력한다.
- [ ] 발행한 로또 번호를 출력한다.
- - [ ] 로또 번호는 오름차순으로 정렬하여 출력한다.

- [ ] 당첨 번호를 입력 받는다.
- - [ ] 당첨 번호 6개를 쉼표로 구분하여 입력 받는다.
- - [ ] 당첨 번호는 1부터 45 사이의 숫자여야 한다.
- - [ ] 당첨 번호는 중복될 수 없다.

- [ ] 보너스 번호를 입력 받는다.
- - [ ] 보너스 번호는 1부터 45 사이의 숫자여야 한다.
- - [ ] 보너스 번호는 당첨 번호와 중복될 수 없다.

- [ ] 구매한 로또 번호와 당첨 번호를 비교한다.
- - [ ] 로또 번호와 당첨 번호가 일치하는 개수를 계산한다.
- - [ ] 로또 번호와 보너스 번호가 포함되는지 확인한다.
- - [ ] 1등부터 5등까지 당첨 여부를 확인한다.

- [ ] 당첨 금액을 계산한다.
- [ ] 총 수익률을 계산한다.
- - [ ] 총 수익률은 소수점 둘째 자리에서 반올림한다.

- [ ] 당첨 통계를 출력한다.
- - [ ] 당첨 내역을 출력한다.
- - [ ] 총 수익률을 출력한다.

- [ ] 사용자가 잘못된 값을 입력하면 Error를 발생시키고 해당 지점에서 다시 입력받는다.
- - [ ] Error로 시작하는 메세지를 출력한다.
