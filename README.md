# javascript-lotto-precourse

### 🙏🏻 프리코스 3주차: 로또

#### 💻 기능 요구사항 분석

- 로또 구입 금액 입력 받기
- `구입 가격 / 1000` 을 통해 발행할 로또 개수 구하기
- 발행할 로또 수 만큼 로또 발행하기  
  하나의 로또를 발행할 때 아래의 사이클이 실행된다.
  1. 중복되지 않게 `1 ~ 45` 사이의 숫자 6개를 뽑는다.
  2. 로또 번호를 오름차순으로 정렬하여 배열에 저장한다.
  3. 해당 로또 번호를 `[8, 21, 23, 41, 42, 43]` 형태로 출력한다.
- 당첨 번호 입력 받기(**중복** 되지 않게, `1 ~ 45`사이)
  1. `,`를 기준으로 6개의 숫자 입력 받기
  2. 보너스 번호 입력 받기
- 각 발행된 로또를 당첨 번호와 비교하여 아래 표를 기준으로 당첨 내역을 확인한다.
- 당첨 내역을 출력한다.
- 수익률을 계산해 소수점 둘째 자리에서 반올림하여 출력한다. (ex. 100.0%, 51.5%, 1,000,000.0%)  
  수익률 = `총 당첨 금액 / 로또 구매 금액 * 100`

- 예외처리
  1. 구입 금액이 1,000원 단위가 아닐 경우
  2. 번호 입력 받을 시 중복된 입력을 받았을 경우
  3. 번호 입력 받을 시 `1 ~ 45` 사이의 숫자가 아닌 경우
  4. 번호 입력 받을 시 6개 이상의 숫자일 경우

### 로또 당첨 기준 및 당첨금액

| 등수 | 기준                        | 당첨금액        |
| ---- | --------------------------- | --------------- |
| 1등  | 6개 번호 일치               | 2,000,000,000원 |
| 2등  | 5개 번호 + 보너스 번호 일치 | 30,000,000원    |
| 3등  | 5개 번호 일치               | 1,500,000원     |
| 4등  | 4개 번호 일치               | 50,000원        |
| 5등  | 3개 번호 일치               | 5,000원         |

#### 💻 프로그래밍 요구 사항

- indent depth 3 넘지 않도록 구현(2까지 허용)
- 3항 연산자 사용 금지
- else 지양
- 함수가 한 가지 일만 하도록 작게 구현
- 함수의 길이가 15라인을 넘어가지 않도록 구현
- Jest를 이용하여 테스트
- 단위 테스트 작성

### 실행결과

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
