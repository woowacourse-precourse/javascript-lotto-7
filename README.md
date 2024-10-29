## 로또
### 개요
사용자는 금액을 지불하고 1000원 당 로또 1장을 구매할 수 있습니다.
로또는 1~45 범위의 중복되지 않는 무작위 숫자를 6개 뽑아 가집니다.
사용자가 숫자 6개, 보너스 번호 1개를 당첨 번호로 지정합니다.
사용자가 구매한 로또의 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력합니다.
- 1등: 6개 번호 일치 / 2,000,000,000원
- 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
- 3등: 5개 번호 일치 / 1,500,000원
- 4등: 4개 번호 일치 / 50,000원
- 5등: 3개 번호 일치 / 5,000원


### 기능 정리
#### 요구사항
- [x] 사용자의 입력을 받는다.
- [ ] 사용자 로또를 발행한다.
- [ ] 발행한 로또 수량, 오름차순으로 정렬한 번호를 출력
- [ ] 로또 번호를 추첨한다.
- [ ] 번호를 비교하여 당첨 여부를 확인한다.
- [ ] 수익률을 구한다.
- [ ] 당첨 내역과 수익률을 출력한다.
#### 예외처리
- [x] 입력이 빈 경우
- [ ] 로또 번호의 개수가 6 초과인 경우
- [ ] 로또 번호에 중복된 숫자가 있는 경우
- [x] 구입 금액이 로또 가격으로 나누어 떨어지지 않는 경우
- [x] 구입 금액이 0이거나 음수인 경우
- [x] 구입 금액에 숫자가 아닌 문자가 포함된 경우
- [x] 당첨 번호 및 보너스 번호가 1~45 범위를 벗어난 경우
- [x] 당첨 번호가 6개가 아닌 경우
- [x] 당첨 번호 입력에 숫자와 쉼표 이외의 문자가 있는 경우
- [x] 당첨 번호에 중복이 있는 경우
- [x] 보너스 번호에 숫자 이외의 문자가 있는 경우
- [x] 보너스 번호가 정수가 아닌 경우
- [x] 보너스 번호가 당첨 번호와 중복되는 경우
#### 고려사항
- 0원을 입력했을 때 ⟶ 수익률을 출력해야 하므로 에러로 판단
- 잘못된 값을 입력했을 때 throw하는 것이 아닌 메시지만 발생 시키고 다시 입력받음