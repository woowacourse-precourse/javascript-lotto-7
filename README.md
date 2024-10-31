# javascript-lotto-precourse

첫번째는 구현, 구현, 구현

- [x] 아무 도움 없이 처음부터 끝까지 구현에 성공하고, 테스트도 성공한다. : 2시간 55분 소요로 통과

본격적인 리펙토링

- [] View, Model, Controller를 구분한다.
- [x] View에서 Input, Output을 구분한다.
- [x] Validation logic을 만들고 분리한다.
- [x] View에서 Error를 발생하고, 메시지를 재시작하는 로직을 구현해본다.
- [ ] lotteryNumbers, bonusNumber, paidAmount를 어디에 보관할지 고민해본다.

lotto 클래스

- [] lotto class에 validation을 더 추가한다.
- [] lotto가 정렬되어있는지 확인한다.
- [] lotto 클래스의 unit Test를 작성한다.

LotteryFactory 클래스

- [] lotteryFactory의 validation 더 추가한다
- [] lotteries의 길이를 확인한다.
- [] lottoFactory의 unit Test를 작성한다.

lotteryNumbers 클래스

- [x] lotteryNumber가 중복된 수가 있는지 확인한다.
- [x] 정확한 값이 입력되었는지 확인한다.
- [x] 트림 기능을 넣는것을 고민해본다.
- [x] 중복자를 검출하는것을 고민해본다.
- [x] lotteryNumbers의 unitTest를 작성한다
- [ ] lotteryNumbers의 unitTest를 보충한다.

validateBonusNumber

- [x] 보너스가 중복되는 것을 방지한다.
- [x] 보너스 넘버 validation의 유닛 테스트를 작성한다.

prizeCaluationService 클래스

- [] 클래스를 생성한다.

pickRank 클래스

- [] unit Test를 통해서, 확실히 rank를 받는지 확인한다.

lotteryNotes

- [] 발리데이션을 진행한다. parseInt가 잘 먹히는지 확인한다.

발리데이션

- [] Validation logic을 구분하고, 어디에 붙일지 생각해본다
- [x] validateMoney의 유닛테스트 작성
- [ ] trim을 도입할지 결정한다.

validator

- [x] 발리데이터를 리펙터링 하여, 함수의 줄 수를 줄인다.

간단한 로또 발매기를 구현 확인한다.

- [] 로또 번호의 숫자 범위는 1~45까지이다.
- [] 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- [] 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- [] 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
- [] 1등: 6개 번호 일치 / 2,000,000,000원
- [] 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
- [] 3등: 5개 번호 일치 / 1,500,000원
- [] 4등: 4개 번호 일치 / 50,000원
- [] 5등: 3개 번호 일치 / 5,000원
- [] 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- [] 로또 1장의 가격은 1,000원이다.
- [] 당첨 번호와 보너스 번호를 입력받는다.
- [] 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- [] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

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

## 당첨 통계

3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
