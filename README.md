# javascript-lotto-precourse

## ✅ 기능 구현 목록

- [x] 로또 구입 금액 입력받기
  - [x] 1,000원으로 나누어 떨어지지 않으면 예외 처리
  - [x] 숫자가 아닌 수가 입력되면 예외 처리
  - [x] 양수가 아니면 예외 처리
- [x] 로또 발행하기
  - [x] 구입 금액만큼 로또 발행하기
  - [x] 하나의 로또는 1~45 사이의 중복되지 않는 6개의 수여야 함
  - [x] 오름차순으로 정렬
- [x] 발행한 로또 출력하기
- [x] 당첨 번호 입력받기
  - [x] 1~45 사이로 입력받기
  - [x] 중복되지 않게 하기
  - [x] 숫자인지 확인하기
  - [x] 6개인지 확인하기
  - [x] `,`로 구분
- [x] 보너스 번호 입력받기
  - [x] 당첨 번호와 중복 X, 1~45 사이의 수
  - [x] 숫자인지 확인
- [x] 발행한 로또와 당첨 번호 비교 (당첨 통계)
  - [x] 일치한 번호 개수마다 일치한 로또 개수 저장하기
- [x] 수익률 계산하고 출력
  - [x] 소수점 둘째 자리에서 반올림하기
- [x] 에러 문구 확인하기

## 💻 구현 내용

## ⭐️ 결과 ⭐️

<img width="361" alt="스크린샷 2024-11-04 오전 4 03 24" src="https://github.com/user-attachments/assets/43a02e05-f954-4bc7-b1ee-bb2254fbdf06">

### 🚨 오류 발생 시

<img width="544" alt="스크린샷 2024-11-04 오전 4 05 20" src="https://github.com/user-attachments/assets/7c639652-ea38-4f0f-a67c-adf73e6c688f">

## 🤔 테스트

LottoResultCalculator 클래스를 테스트하는 코드를 만들어 테스트해보았습니다.

- `calculateResult` 메서드 테스트: 각 로또 번호와 당첨 번호를 비교하여 당첨 등수별로 개수를 정확히 계산하는지 검증
- `calculateRate` 메서드 테스트: 구매 금액과 총 상금을 기반으로 수익률이 정확히 계산되는지 확인
- `printLottoResult` 및 `printReturnOfRate` 출력 테스트: 당첨 결과와 수익률이 올바른 형식으로 출력되는지 검증

### 테스트 결과

<img width="743" alt="스크린샷 2024-11-04 오후 1 44 43" src="https://github.com/user-attachments/assets/3c80414e-f4a3-462b-98a3-d5e3984fe16d">
<img width="357" alt="스크린샷 2024-11-04 오후 1 45 15" src="https://github.com/user-attachments/assets/b6b4f6de-b827-478e-83b6-24821853777b">
