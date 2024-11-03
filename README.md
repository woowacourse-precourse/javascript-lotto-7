# javascript-lotto-precourse

- 기간: 2024.10.29 15:00 ~ 2024.11.05 00:00
- 미션: 로또
- Node.js 20.17.0 버전 이상
- Git 커밋 단위는 기능 목록 단위로 추가
  - AngularJS Git Commit Message Conventions을 참고
- 자바스크립트 코드 컨벤션 지키기(Airbnb JavaScript Style Guide)

### 학습 목표

- 관련 함수를 묶어 클래스 만들기, 객체들이 협력하여 하나의 큰 기능을 수행하도록
- 클래스, 함수에 대한 단위 테스트
- 2주차 공통 피드백 최대한 반영

## 구현할 기능 목록

- 로또 구입 금액 입력 받기(사용자)
  - 1,000원 단위로 입력, 1,000원으로 나누어 떨어지지 않는 경우 예외 처리

- 로또 번호 입력 받기(사용자)
  - 번호는 쉼표(,)를 기준으로 구분, 번호의 숫자 범위는 1~45까지, 중복 X

- 보너스 번호 입력 받기(사용자)

- 발행한 로또 수량 및 번호 출력
  - 로또 번호는 오름차순으로 정렬

- 로또 수량 만큼 로또 당첨 번호 추첨하기
  - 중복되지 않는 숫자 6개와 보너스 번호 1개 무작위로 뽑기, 중복 X
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 20,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원

- 당첨 번호와 사용자 구매 로또 번호 비교하기
  - 당첨 내역 출력
  - 수익률 출력(소수점 둘째 자리에서 반올림)
  - 로또 게임 종료

- 사용자가 **잘못된 값을 입력**한 경우
  - "[ERROR]"로 시작하는 메시지와 함께 Error 발생
  - 애플리케이션 종료