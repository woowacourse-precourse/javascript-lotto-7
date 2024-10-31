# javascript-lotto-precourse

## ✏️ 1. 기능 요구사항

- 예외사항에 대해서는 ❌ 표시를 하였음
- 미구현 기능은 ⬜, 구현기능은 ✅ 표시를 하였음

⬜ 1. 로또 구입 금액을 입력 받는다.

       1000으로 나누어 떨어져야 한다.

- ❌ 0일 경우
- ❌ 1000의 배수가 아닐 경우

⬜ 2. 당첨 번호를 입력받는다.

       2-1) 로또 번호의 숫자 범위는 1 ~ 45까지 이다.
       2-2) 번호는 쉼표(,)를 기준으로 구분하며, 공백을 포함하여 입력 시 공백을 제거해준다.
       2-3) 잘못된 입력을 했다면 [ERROR]로 시작하는 메시지와 함께 Error를 발생시키고 해당 지점부터 다시 입력받는다.

- ❌ 숫자가 중복되는 경우
- ❌ 입력된 숫자가 6개가 아닐 경우
- ❌ 정수가 아닐 경우
- ❌ 주어진 범위를 벗어나는 숫자일 경우

⬜ 3. 보너스 번호를 입력받는다.

- ❌ 앞서 입력받은 로또 번호와 중복되는 경우
- ❌ 정수가 아닐 경우
- ❌ 주어진 범위를 벗어나는 숫자일 경우

⬜ 4. (구입금액 / 1000)회 만큼 입력을 받았다면 주어진 API를 이용하여 발행한 로또 수량 및 번호를 출력한다. 이 때, 로또 번호는 오름차순으로 정렬하여 보여준다.

       3개를 구매했습니다.
       [8, 21, 23, 41, 42, 43]
       [3, 5, 11, 16, 32, 38]
       [7, 11, 16, 35, 36, 44]

⬜ 5. 앞서 입력한 당첨번호와 보너스번호를 발행한 로또와 비교를 하여 통계를 낸다.

       1등: 6개 번호 일치 / 2,000,000,000원
       2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
       3등: 5개 번호 일치 / 1,500,000원
       4등: 4개 번호 일치 / 50,000원
       5등: 3개 번호 일치 / 5,000원

⬜ 6. 당첨 내역을 출력한다.

       3개 일치 (5,000원) - 1개
       4개 일치 (50,000원) - 0개
       5개 일치 (1,500,000원) - 0개
       5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
       6개 일치 (2,000,000,000원) - 0개

⬜ 7. 수익률은 소수점 둘째 자리에서 반올림하여 출력한다.

       총 수익률은 62.5%입니다.

## 🚨 2. 고려해야할 점(❕) & 추가된 프로그래밍 요구 사항(❗)

       ❕ 주어진 LottoTest를 보니 Lotto 클래스를 통해 인스턴스를 만들 때 배열을 넘겨주어야 한다.

       ❕ 수동 로또가 아니라 자동 로또이다. 프로그램을 사용하는 사람은 당첨될 번호를 입력하는 것이다.
           즉, Lotto 클래스는 유효한 당첨 번호인지 확인하는 클래스인 것이다.

       ❕ 보너스 번호는 일반적으로 메인 번호 세트와는 별도로 제일 마지막에 추출한다.
           (Lotto 클래스에서 보너스 번호까지 검증해줄 필요가 없다는 뜻)

       ❗ 메서드의 길이가 15라인을 넘어가지 않도록 구현한다.

       ❗ else를 지양하며, 단위 테스트를 작성한다

       ❗ Lotto 클래스에 numbers 이외의 필드를 추가할 수 없고, 패키지는 변경할 수 있다.
