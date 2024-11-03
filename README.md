# javascript-lotto-precourse

### 요구사항

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

### 기능목록리스트

1. 로또 생성(Lotto.js)

   - [x] 로또 (1~45) 6자리 생성한다.
   - [x] 오름차순 정렬한다.

2. 로또 계산 및 관리(app.js)

   - [x] 사용자가 입력한 금액을 1000으로 나누어서 로또 개수를 구한다.
   - [x] 구매한 개수만큼 로또 객체를 생성한다.
   - [] 사용자가 입력한 보너스 번호를 당첨번호 배열에 삽입한다.
   - [] 당첨 번호와 로또의 번호들을 비교하여 통계를 낸다.
   - [] 총 수익률을 계산한다.(소숫점 둘째 자리에서 반올림)

3. 사용자 입력(inputView.js)

   - [x] 구입 금액 입력 받는다.
   - [x] 당첨 번호 쉼표(,)기준으로 입력 받는다.
   - [x] 보너스 번호 입력 받는다.

4. 출력(outPutView.js)

   - [x] 구매한 개수 출력
   - [x] 구매한 개수에 따른 로또 번호 출력
   - [] 당첨 통계 출력
   - [] 수익률 출력

### 예외처리

1. 로또 유효성

   - [x] 로또별로 6자리수 중 중복되는 수가 있다면 예외처리한다.

2. 사용자 입력 유효성
   1. 구입금액
      - [x] 구입 금액이 1000으로 나누어떨어지지 않는다면 예외처리한다.
      - [x] 입력한 값이 없다면 예외처리한다.
      - [x] 숫자이외의 값을 입력받으면 예외처리한다.
   2. 당첨번호
      - [x] 숫자, 쉼표(,) 이외의 값을 입력받으면 예외 처리한다.
      - [x] 숫자 6개 이상의 값을 입력받으면 예외처리한다.
      - [x] 공백이 있다면 예외처리한다.
      - [x] 숫자가 중복되었는지 검사한다.
      - [x] 당첨 번호가 1~45인지 검사한다.
   3. 보너스 번호
      - [x] 보너스 번호가 1~45인지 검사한다.
      - [x] 숫자인지 검사한다.
      - [x] 중복인지 검사한다.
