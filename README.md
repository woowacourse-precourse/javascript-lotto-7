# javascript-lotto-precourse

## 로또 기능 구현 목록

### 입출력 목록

- [x] 로또 구입 금액 입력 받기 (`구입금액을 입력해 주세요.`)
  - [x] 구입 금액은 1,000원 단위, 나누어 떨어지지 않으면 예외 처리
- [x] 발행한 로또 수량 및 번호 출력
  ```
  8개를 구매했습니다.
  [8, 21, 23, 41, 42, 43]
  [3, 5, 11, 16, 32, 38]
  [7, 11, 16, 35, 36, 44]
  [1, 8, 11, 31, 41, 42]
  [13, 14, 16, 38, 42, 45]
  [7, 11, 30, 40, 42, 43]
  [2, 13, 22, 32, 38, 45]
  [1, 3, 5, 14, 22, 45]
  ```
  - [x] 로또 번호의 숫자 범위는 1~45
  - [x] 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑음
- [x] 당첨 번호 입력 받기 (`당첨 번호를 입력해 주세요.`)
  - [x] 번호는 쉼표를 기준으로 구분
  - [x] 숫자 범위는 1~45
  - [x] 중복되지 않는 6개의 숫자
- [x] 보너스 번호 입력 받기 (`보너스 번호를 입력해 주세요.`)
  - [x] 당첨 번호와 중복되지 x
- [x] 당첨 내역 출력
  ```
  당첨 통계
  ---
  3개 일치 (5,000원) - 1개
  4개 일치 (50,000원) - 0개
  5개 일치 (1,500,000원) - 0개
  5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
  6개 일치 (2,000,000,000원) - 0개
  ```
- [ ] 수익률 출력 (소수점 둘째 자리에서 반올림, ex. 100.0%, 51.5%, 1,000,000.0%)

- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받음

### 프로그래밍 요구 사항

- indent depth 3넘지 않도록
- 3항 연산자 쓰지 않는다.
- 함수의 길이 15라인 넘지 않도록
  - 함수가 한가지 일만 하도록 최대한 작게 만들어라.
- else 지양
- 구현한 기능에 대한 단위 테스트 작성
- 제공된 `Lotto` 클래스를 사용하여 구현
  - `numbers` 이외의 필드를 추가할 수 없다.
  - `numbers`의 접근 제어자인 `#`은 변경할 수 없다.
  - `Lotto`의 패키지를 변경할 수 있다.
