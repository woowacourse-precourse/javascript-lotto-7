# javascript-lotto-precourse

- 로또를 구매하면, 구입 금액에 따라 여러장의 로또를 발행한다
- 1~45 사이의 번호 6개와 보너스 번호 1개를 뽑고, 당첨인지 확인한다
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원

## 기능 목록

### 로또 구입하기

- [x] 로또 구입 금액을 입력 받는다

### 로또 발행하기

- [x] 로또 구입 금액만큼 로또를 발행한다
- [x] 로또 발행 개수를 출력한다
- [x] 로또 번호는 오름차순으로 정렬하여 보여준다
- [ ] 중복되지 않은 6개의 숫자를 뽑고 저장한다

### 당첨 번호 입력받기

- [x] 당첨 번호를 입력 받는다
- [ ] 보너스 번호를 입력받는다

### 당첨 내역 확인하기

- [ ] 발행한 로또를 하나씩 순회하며 당첨 번호와 보너스 번호와 일치하는지 확인한다
- [ ] 일치하는 번호의 개수와 당첨된 로또의 개수를 저장하여 당첨 내역을 출력한다
- [ ] 수익률을 계산하여 출력한다

## 테스트 코드 작성

**입력 유효성 검사**

- [x] 입력 받은 금액이 1000원 단위가 아닐 경우
- [ ] 당첨 번호가 ,으로 나누어지지 않을 경우
- [ ] 당첨 번호와 보너스 번호가 1과 45 사이의 숫자가 아닐 경우
- [ ] 당첨 번호가 6개가 아닐 경우
- [ ] 당첨 번호가 중복될 경우

**기능 테스트**

- [x] 금액에 맞는 개수의 로또를 발행한다
- [x] 중복되지 않은 6개의 번호를 뽑는다
- [ ] 입력 받은 당첨 번호를 나누어서 배열에 저장한다
- [ ] 당첨 번호와 보너스 번호와 일치하는 개수를 확인한다
- [ ] 당첨 내역을 확인한다
- [ ] 수익률을 계산한다

**게임 결과**

- [ ] 로또를 발행하고 당첨 내역을 출력한다
- [ ] 예외 상황에서 Error을 발생시킨다

## 목표 설정

- 함수를 묶은 클래스를 만든다
- 기능 목록에 예외 사항을 함께 정리한다
- 필요 시 상수를 정의하고 사용한다
- 하나의 함수가 한 기능만 하도록 한다
- 클래스와 객체에 대한 단위 테스트 코드를 작성한다
