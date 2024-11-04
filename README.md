# javascript-lotto-precourse

## 통합된 기능 구현 목록

- [x] 로또 구입 금액 입력 처리

  - 구입 금액을 입력받고 1,000원 단위로 나누어 떨어지는지 검증
  - 구입 금액에 따라 구매 가능한 로또 개수를 계산 (로또 1장당 1,000원)
  - 금액 입력이 올바르지 않을 경우 `[ERROR]` 메시지를 출력하고 재입력 받기
  - 예외 상황:
    - 구입 금액이 1,000 단위로 나누어 떨어지지 않거나 숫자가 아닌 문자가 포함된 경우

- [ ] 로또 자동 발행 기능

  - 입력받은 구입 금액에 따라 구매 가능한 로또 수만큼 번호 생성
  - 각 로또 번호는 1~45 사이의 중복되지 않는 6개의 숫자로 구성
  - 생성된 번호 배열은 오름차순으로 정렬하여 저장
  - 발행된 로또 수량 및 번호를 출력

- [ ] 당첨 번호 및 보너스 번호 입력 처리

  - 당첨 번호(6개)와 보너스 번호(1개)를 입력받고 검증
  - 각 번호는 1~45 범위 내에 있어야 하며 중복이 없어야 함
  - 예외 상황 시 `[ERROR]` 메시지 출력 후 재입력 받기
  - 예외 상황:
    - 당첨 번호가 6개가 아닌 경우
    - 보너스 번호가 1개가 아닌 경우
    - 당첨 번호와 보너스 번호가 1~45 범위를 벗어나거나 중복된 경우

- [ ] 당첨 내역 계산 기능

  - 발행된 로또 번호와 당첨 번호, 보너스 번호를 비교하여 각 로또의 당첨 여부 확인
  - 등수에 따라 일치하는 번호 개수와 당첨 금액을 계산
  - 등수 기준:
    - 1등: 6개 번호 일치 - 2,000,000,000원
    - 2등: 5개 번호 + 보너스 번호 일치 - 30,000,000원
    - 3등: 5개 번호 일치 - 1,500,000원
    - 4등: 4개 번호 일치 - 50,000원
    - 5등: 3개 번호 일치 - 5,000원
  - 당첨 내역을 통계 형태로 출력

- [ ] 수익률 계산 및 출력 기능

  - 당첨 금액 합계를 바탕으로 수익률을 계산
  - 수익률은 구매 금액 대비 총 수익의 백분율로, 소수점 둘째 자리에서 반올림하여 출력

- [ ] 예외 처리 및 오류 메시지 출력 기능

  - 각 입력 단계에서 형식 및 범위 검증을 수행하여 오류 시 `[ERROR]`로 시작하는 메시지 출력
  - 오류 발생 시 해당 입력 단계부터 다시 입력받기

- [ ] 테스트 코드 작성

  - 기능 목록 테스트 작성

- [ ] 코드 리팩토링
  - 함수 분리
  - 3항 연산자, else문 지양
  - indent 3이하로 구현
