# javascript-lotto-precourse

## 🎱 로또

**📌 로또 발매기 구현**

> 사용자가 입력한 구입금액만큼 로또를 발행하고, 사용자가 입력한 당첨 번호와 비교하여 당첨 내역과 수익률을 알려주는 프로그램

**로또 발매기 주요 기능**

- 로또 구입금액 입력받기
- 발행한 로또 보여주기
- 당첨 번호 입력받기
- 보너스 번호 입력받기
- 당첨내역 보여주기
- 수익률 보여주기

### 구현 기능 목록

- [x] **구입금액 입력받기**

  - 사용자가 잘못된 값을 입력할 경우, 예외 처리

- [x] **로또 발행하기**

  - 구입 로또 개수 결정
  - 로또 생성

- [x] **발행 로또 출력하기**

- [x] **당첨 번호 입력받기**

  - 사용자가 잘못된 값을 입력할 경우, 예외 처리

- [x] **보너스 번호 입력받기**

  - 사용자가 잘못된 값을 입력할 경우, 예외 처리

- [x] **당첨 번호 비교**

  - [x] 당첨 번호와 비교
  - [x] 보너스 번호와 비교

- [ ] **등수 계산**

- [ ] **당첨 결과 저장**

  - [ ] 당첨 등수 저장
  - [ ] 당첨 금액 합산

- [ ] **당첨 내역 출력하기**

- [ ] **수익률 계산**

- [ ] **수익률 출력하기**

### 예외 상황

- [x] **구입금액 입력받기**
  - 입력하지 않음
  - 숫자가 아님
  - 1000원 단위가 아님
- [x] **당첨 번호 입력받기**
  - 입력하지 않음
  - 숫자가 아닌 문자가 있음
  - 1~45 사이의 수가 아님
  - 중복이 있음
  - 6개가 아님
- [x] **보너스 번호 입력받기**
  - 입력하지 않음
  - 숫자가 아님
  - 1~45 사이의 수가 아님
  - 당첨 번호와 중복이 있음
