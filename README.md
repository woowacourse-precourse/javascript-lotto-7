# javascript-lotto-precourse

## 기능 요구 사항

- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑음 (발행 숫자 범위는 1 ~ 45)
- 금액을 1000원 단위로 입력받고, (금액 / 1000)개의 로또를 발행
- 당첨번호를 입력 받고, 당첨 여부를 계산 (당첨 번호는 6개의 발행 숫자와 1개의 보너스 번호)
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력
- 구매한 로또의 출력은 오름차순으로 정렬되어야 함

### 실행 예시

```
구입금액을 입력해 주세요.
8000

8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]

당첨 번호를 입력해 주세요.
1,2,3,4,5,6

보너스 번호를 입력해 주세요.
7

당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

## 프로그래밍 요구 사항

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 App.js의 run()이다.
- package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
- 3항 연산자를 쓰지 않는다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
- else를 지양한다.
- 구현한 기능에 대한 단위 테스트를 작성한다. 단, UI(System.out, System.in, Scanner) 로직은 제외한다.

## 구현 기능 목록

- [x] 로또 구매 금액 입력
- [x] 구매 금액에 맞게 로또를 구매하고 번호를 생성
- [x] 구매한 로또를 오름차순으로 정렬하여 출력
- [x] 당첨 번호와 보너스 번호를 입력
- [x] 입력된 번호를 구분자를 단위로 구분
- [x] 당첨 여부를 계산
- [x] 당첨된 결과를 출력
- [x] 수익률을 계산하여 출력

## 예외 목록

- [x] 입력된 금액이 숫자가 아닌 경우
- [x] 금액이 음수가 입력된 경우
- [x] 금액이 1,000원 단위로 나누어 떨이지지 않은 경우
- [x] 당첨 번호에 숫자, 구분자 이외에 다른 숫자가 입력된 경우
- [x] 당첨 번호가 정수가 아닌 숫자가 입력된 경우
- [x] 당첨 번호가 6개가 입력되지 않은 경우
- [x] 당첨 번호에서 중복된 숫자가 입력된 경우
- [x] 당첨 번호의 숫자 범위가 1 ~ 45를 벗어난 경우
- [x] 보너스 번호가 숫자가 아닌 경우
- [x] 보너스 번호가 정수가 아닌 숫자가 입력된 경우
- [x] 보너스 번호의 숫자 범위 1 ~ 45를 벗어난 경우
- [ ] 보너스 번호가 당첨 번호에 포함된 경우
