# javascript-lotto-precourse

# 로또 발매기 구현

## 기능 요구 사항
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

## 입출력 요구 사항
<입력>
- 로또 구입 금액을 입력받는다. 구입 금액은 1,000 원 단위로 입력 받으며, 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
- 당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.
- 보너스 번호를 입력받는다.

<출력>
- 발행한 로또 수량 및 번호를 출력한다. 로또 번호는 오름차순으로 정렬하여 보여준다.
- 당첨 내역을 출력한다.
- 수익률은 소수점 둘째 자리에서 반올림한다.
- 예외 상황 시 에러 문구를 출력해야 한다.

## 프로그래밍 요구 사항
- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다. 또한 한 가지 일만 잘 하도록 구현한다.
- else를 지양한다. (if 조건절에서 값을 return하는 방식으록 구현하면 else를 사용하지 않아도 된다.)
- 구현한 기능에 대해 단위 테스트를 작성한다.

## 실제 구현
1. 사용자에게 처리 결과를 보여주는 Output 모듈
    - 사용자가 구매한 개수를 출력하는 메서드
    - 로또 당첨 결과를 출력하는 메서드
2. 실제로 로직을 처리하는 Logic 모듈
    - 사용자의 입력을 콤마를 기준으로 구분하는 메서드
    - 당첨 결과를 계산하는 메서드
    - 수익률을 계산하는 메서드
3. 자주 사용하는 값, 에러 메시지를 모아주는 Enum 모듈
    - 에러 메시지
    - 로또에 관련된 값
    - 상금에 관련된 값
4. 사용자로부터 입력을 받는 Input 모듈
    - 구매 수량을 입력받는 메서드
    - 당첨 번호를 입력받는 메서드
    - 보너스 번호를 입력받는 메서드
5. 사용자로부터 받은 값을 검증하는 Validation 모듈
    - 입력 받은 구매 수량이 올바른지 판단하는 메서드
    - 입력 받은 당첨 번호가 올바른지 판단하는 메서드
    - 입력 받은 보너스 번호가 올바른지 판단하는 메서드
6. Lotto 객체를 생성하는 Generation 모듈
    - 사용자가 입력한 구매 금액만큼 Lotto 객체를 생성하는 메서드