# javascript-lotto-precourse

## 📈 구현할 기능 목록

- **입력**

  - [ ] 로또를 위한 구입 금액 입력받기
  - [ ] 로또 당첨번호 입력받기(번호는 쉼표를 기준으로 구분한다.)
  - [ ] 로또 보너스 번호 입력받기

- **출력**

  - [ ] 구매한 로또 수량 출력하기
  - [ ] 발행한 로또 번호 출력하기
  - [ ] 당첨 내역(통계) 출력하기
  - [ ] 수익률 출력하기(소수점 둘째자리에서 반올림 하기)

- **기능**

  - [ ] 입력받은 금액을 1000원으로 나눠서 로또 수량으로 반환하는 기능 구현하기
  - [ ] 1부터 45까지 6개의 숫자를 랜덤으로 반환하는 기능 구현하기
    - 우테코 라이브러리 사용하기
  - [ ] 당첨번호 비교 후, 당첨된 매수 반환하는 기능 구현하기
  - [ ] 수익률 계산하는 기능 구현하기
    - [ ] 세자리 마다 쉼표로 구분하기
    - [ ] 소수점 둘째 자리에서 반올림 하기
    - [ ] 수익률이 정수일 경우 소수점 첫째 자리에 0을 표시한다(ex: 100.0%)

## 🎯 예외 예상 상황 목록

- 로또를 위한 구입 금액 입력 부분

  - [ ] 숫자가 아닌 것을 입력했을 경우
    - [ ] 에러를 반환(구현 후 추가할 예정입니다.)
  - [ ] 0 이하의 숫자를 입력했을 경우
    - [ ] 에러를 반환(구현 후 추가할 예정입니다.)
  - [ ] 입력을 하지 않았을 경우
    - [ ] 에러를 반환(구현 후 추가할 예정입니다.)
  - [ ] 1,000원으로 나누어 떨어지지 않는 경우
    - [ ] 에러를 반환(구현 후 추가할 예정입니다.)
  - [ ] 10만원 이상의 금액을 입력했을 경우
    - [ ] 에러를 반환(구현 후 추가할 예정입니다.)

- 로또 당첨번호 입력 부분

  - [ ] 1이상 45 이하 숫자가 아닌 경우
    - [ ] 에러를 반환(구현 후 추가할 예정입니다.)
  - [ ] (쉼표로 구분한 당첨번호가) 6개가 아닌 경우
    - [ ] 에러를 반환(구현 후 추가할 예정입니다.)
  - [ ] 당첨번호를 중복되게 입력한 경우
    - [ ] 에러를 반환(구현 후 추가할 예정입니다.)

- 로또 보너스 번호 입력

  - [ ] 숫자가 아닌 것을 입력했을 경우
    - [ ] 에러를 반환(구현 후 추가할 예정입니다.)
  - [ ] 1이상 45 이하 숫자가 아닌 경우
    - [ ] 에러를 반환(구현 후 추가할 예정입니다.)
  - [ ] 당첨번호랑 중복일 경우
    - [ ] 에러를 반환(구현 후 추가할 예정입니다.)
