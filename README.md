# javascript-lotto-precourse

### 기능 요구 사항

1. 로또 번호의 숫자 범위는 1~45까지이다.
2. 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
3. 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
4. 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
   - 1등: 6개 번호 일치 / 2,000,000,000원
   - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
   - 3등: 5개 번호 일치 / 1,500,000원
   - 4등: 4개 번호 일치 / 50,000원
   - 5등: 3개 번호 일치 / 5,000원
5. 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
6. 로또 1장의 가격은 1,000원이다.
7. 당첨 번호와 보너스 번호를 입력받는다.
   사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
   사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

### 사용자 입력 (제약사항)

- [x] 구입금액 입력(1,000단위)
- [x] 당첨번호 입력 (6자리, 쉼표로 구분,1~45)
- [x] 보너스 번호 입력 (숫자 하나, 1~45)

### 출력

- [x] `${구입 금액에 맞는 발행한 로또 수량}개를 구매했습니다.` 출력
- [x] `[1,2,3,4,5,6]\n[1,2,3,4,5,6]` n차원 배열 형태로 출력
- [x] `3~6개 일치 (5,000/50,000/1,500,000/30,000,000/2,000,000,000) - ${당첨 갯수}개` 출력
- [x] `총 수익률은 ${수익률}`%입니다. 출력
- [x] 에러를 출력

### 입력 에러 출력

- [x] 금액이 1,000으로 나누어 떨어지지않는 경우 - `[ERROR] 금액은 1,000으로 나뉘어 떨어져야합니다.`
- [x] 숫자가 1~45의 범위를 벗어난 경우 - `[ERROR] 숫자는 1~45사이의 수입니다.`
- [x] 당점번호의 수가 6개가 아닌경우 - `[ERROR] 로또 번호는 6개입니다.`
- [x] 입력한 로또 번호가 중복될 경우 - `[ERROR] 로또 번호는 중복될 수 없습니다.`
- [x] 콤마가 아닌 다른 구분자가 들어간 경우 - `[ERROR] 로또 번호는 콤마로 구분됩니다.`
