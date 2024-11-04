# javascript-lotto-precourse

## 기능 목록

1. 로또 구입 금액 입력받기
   1. 앞뒤 공백 제거
   2. 로또 구입 금액 문자 유효성 검사(1000 단위의 숫자인지)
   3. 잘못 입력했을 경우에 ERROR 발생 시키고, 다시 이어서 입력 받기.
2. 구입한 금액 만큼, 로또 번호 1 ~ 45 중 중복되지 않게 6개의 랜덤 숫자 발행
3. 발행한 숫자들을 화면에 출력하기
4. 당첨 번호 입력 받기
   1. 쉼표(,)를 기준으로 구분하여 입력 받기.
   2. 앞 뒤 공백 제거
   3. 당첨 번호 유효성 검사(1 ~ 45 사이 자연수 숫자, 중복이 없는지)
   4. 잘못 입력했을 경우에 ERROR 발생 시키고, 다시 이어서 입력 받기.
5. 보너스 번호 입력 받기
   1. 앞 뒤 공백제거
   2. 보너스 번호 유효성 검사(1 ~ 45 사이 자연수, 당첨번호와 중복 없는지)
   3. 잘못 입력했을 경우에 ERROR 발생 시키고, 다시 이어서 입력 받기.
6. 각 발행한 로또가 당청번호와 일치하는지 확인
   - 각 로또가 몇 개씩 일치하는지 계산.
7. 당첨 통계 출력(각 몇 개씩 나왔는지 금액과 함께 보여줌)
   - 3개 일치
   - 4개 일치
   - 5개 일치
   - 5개 일치, 보너스 일치
   - 6개 일치
8. 총 수익률 계산
9. 총 수익률 출력
   1. 소수점 둘째 자리에서 반올림 하기. ex) 100.0%

## 예외사항

- 구입할 로또 금액이 1000원 단위로 떨어지지 않는 경우
- 구입금액이 숫자가 아닌 경우.
- 로또 번호가 1 ~ 45 사이 숫자가 아닌 경우
- 로또 번호에 중복된 숫자가 있는 경우.
- 당첨 번호가 1 ~ 45 숫자가 아닌 경우
- 당첨번호가 숫자가 아닌 문자인 경우.
- 보너스번호가 당첨 번호 와 중복된 숫자인 경우

## 테스트를 하는 이유

- 예외가 생길 수 있는 경우를 생각해서 테스트를 하다보면 놓친 예외가 있기 때문에 구현한 기능의 문제를 빨리 파악할 수 있다고 생각합니다.
