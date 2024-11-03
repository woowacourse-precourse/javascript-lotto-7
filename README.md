## 🔎 **기능 구현 목록**
1. **로또 구입 금액 입력**
   - 사용자가 로또 구입 금액을 입력한다.
   - 구입 금액이 1,000원 단위로 입력되어야 하며, 1,000원 단위로 나누어 떨어지지 않으면 에러를 발생시킨다.

2. **로또 번호 발행**
   - 입력된 구입 금액에 따라 발행할 로또 개수를 계산하고, 각각의 로또 번호를 생성한다.
   - 각 로또 번호는 1~45 사이의 중복되지 않는 6개의 숫자로 구성되며, 오름차순으로 정렬하여 저장한다.

3. **로또 번호 출력**
   - 발행된 로또 개수와 각 로또 번호를 출력한다.

4. **당첨 번호 및 보너스 번호 입력**
   - 사용자가 6개의 당첨 번호와 1개의 보너스 번호를 입력한다.
   - 입력된 번호는 1~45 범위 내의 중복되지 않는 숫자여야 하며, 형식에 맞지 않을 경우 에러를 발생시킨다.

5. **당첨 결과 계산**
   - 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 일치하는 번호의 개수에 따라 당첨 등수를 판별한다.
   - 각 등수에 해당하는 로또 개수를 집계한다.
     - 1등: 6개 번호 일치 (2,000,000,000원)
     - 2등: 5개 번호 일치 + 보너스 번호 일치 (30,000,000원)
     - 3등: 5개 번호 일치 (1,500,000원)
     - 4등: 4개 번호 일치 (50,000원)
     - 5등: 3개 번호 일치 (5,000원)

6. **수익률 계산 및 출력**
   - 당첨된 금액의 총합을 구입 금액과 비교하여 수익률을 계산한다.
   - 수익률은 소수점 둘째 자리에서 반올림하여 출력한다.

7. **예외 처리**
   - 사용자 입력에 대한 다양한 예외 상황을 처리하고, 해당 상황에 맞는 `[ERROR]` 메시지를 출력한다.
     - **구입 금액 입력 관련 에러 처리**
       - 구입 금액이 빈 경우
         - 예: `""`
         - **처리**: `[ERROR] 구입 금액을 입력해야 합니다.`
       - 구입 금액이 숫자가 아닌 경우
         - 예: `"one thousand"`, `"1천"`
         - **처리**: `[ERROR] 구입 금액은 숫자여야 합니다.`
       - 구입 금액이 0 또는 음수인 경우
         - 예: `0`, `-1000`
         - **처리**: `[ERROR] 구입 금액은 1,000원 이상의 양수여야 합니다.`
       - 구입 금액이 1,000원 단위로 나누어 떨어지지 않는 경우
         - 예: `10500`
         - **처리**: `[ERROR] 구입 금액은 1,000원 단위여야 합니다.`

     - **당첨 번호 및 보너스 번호 입력 관련 에러 처리**
       - 당첨 번호가 빈 경우
         - 예: `""`
         - **처리**: `[ERROR] 당첨 번호를 입력해야 합니다.`
       - 당첨 번호 입력 시 숫자가 아닌 값이 포함된 경우
         - 예: `"1,2,three,4,5,6"`, `"1,2,@,4,5,6"`
         - **처리**: `[ERROR] 당첨 번호는 1에서 45 사이의 숫자여야 합니다.`
       - 당첨 번호에 중복된 숫자가 포함된 경우
         - 예: `"1,2,3,3,4,5"`
         - **처리**: `[ERROR] 당첨 번호에 중복된 숫자가 포함되어 있습니다.`
       - 당첨 번호가 1~45 범위를 벗어나는 경우
         - 예: `1,2,3,4,5,26`
         - **처리**: `[ERROR] 당첨 번호는 1에서 45 사이의 숫자여야 합니다.`
       - 당첨 번호 개수가 6개가 아닌 경우
         - 예: `"1,2,3,4,5"` (5개), `"1,2,3,4,5,6,7"` (7개)
         - **처리**: `[ERROR] 당첨 번호는 6개여야 합니다.`
       - 보너스 번호가 빈 경우
         - 예: `""`
         - **처리**: `[ERROR] 보너스 번호를 입력해야 합니다.`
       - 보너스 번호가 1~45 범위를 벗어나는 경우
         - 예: `0`, `46`, `100`
         - **처리**: `[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.`
       - 보너스 번호가 당첨 번호와 중복되는 경우
         - 예: 당첨 번호 `"1,2,3,4,5,6"`, 보너스 번호 `3`
         - **처리**: `[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.`

---

## ✅ **과제 제출 전 체크 리스트**

### **기본 기능 구현 체크리스트**

1. **로또 구입 금액 입력**
    - [X]  구입 금액이 1,000원 단위로 입력되었는가?
    - [x]  구입 금액이 빈 경우 [ERROR] 메시지를 출력하는가?
    - [x]  구입 금액이 숫자가 아닌 경우 [ERROR] 메시지를 출력하는가?
    - [x]  구입 금액이 0 또는 음수일 경우 [ERROR] 메시지를 출력하는가?
    - [x]  1,000원 단위가 아닌 입력에 대해 [ERROR] 메시지를 출력하는가?
  
2. **로또 번호 발행**
    - [X]  로또 번호가 1~45 범위의 중복되지 않은 6개의 숫자로 발행되는가?
    - [x]  구입 금액에 따라 올바른 개수의 로또 번호가 발행되었는가?

3. **로또 번호 출력**
    - [X]  발행된 로또 번호가 오름차순으로 정렬되어 출력되는가?

4. **당첨 번호 및 보너스 번호 입력**
    - [X]  당첨 번호가 빈 경우 [ERROR] 메시지를 출력하는가?
    - [X]  당첨 번호에 숫자가 아닌 값이 포함된 경우 [ERROR] 메시지를 출력하는가?
    - [x]  당첨 번호에 중복된 숫자가 포함된 경우 [ERROR] 메시지를 출력하는가?
    - [x]  당첨 번호가 1~45 범위를 벗어나는 경우 [ERROR] 메시지를 출력하는가?
    - [x]  당첨 번호가 6개가 아닌 경우 [ERROR] 메시지를 출력하는가?
    - [X]  보너스 번호가 빈 경우 [ERROR] 메시지를 출력하는가?
    - [x]  보너스 번호가 1~45 범위를 벗어나는 경우 [ERROR] 메시지를 출력하는가?
    - [x]  보너스 번호가 당첨 번호와 중복되는 경우 [ERROR] 메시지를 출력하는가?

5. **당첨 결과 계산**
    - [X]  사용자가 구매한 로또 번호와 당첨 번호를 비교하여 정확한 등수를 판별하는가?
    - [x]  각 당첨 등급에 맞는 당첨 내역이 제대로 집계되는가?

6. **수익률 계산 및 출력**
    - [X]  구입 금액 대비 총 당첨 금액을 바탕으로 수익률을 올바르게 계산하는가?
    - [x]  수익률이 소수점 둘째 자리에서 반올림되어 출력되는가?

### **입출력 및 결과 출력 체크리스트**

- [x]  사용자 입력은 `@woowacourse/mission-utils`의 `Console.readLineAsync()`를 사용했는가?
- [x]  결과 출력은 `Console.print()`를 사용했는가?
- [x]  결과가 예시와 동일하게 출력되는가? (예: `"pobi : --"` 형식으로 출력)
- [x]  모든 사용자 입력에 대해 적절한 에러 메시지를 출력하는가?

### **프로그래밍 요구 사항 체크리스트**

- [x]  Node.js 20.17.0 버전 이상에서 실행할 수 있는가?
- [x]  프로그램의 시작점이 `App.js`의 `run()` 메서드로 되어 있는가?
- [x]  프로그램 종료 시 `process.exit()`를 호출하지 않았는가?
- [x]  `package.json`을 변경하지 않았는가?
- [x]  외부 라이브러리를 사용하지 않고 구현했는가?

### **테스트 체크리스트**

- [x]  구현한 모든 기능에 대해 테스트 케이스를 작성하였는가?
- [x]  모든 테스트 케이스가 성공하는가?
- [x]  예외 상황에 대한 테스트도 제대로 처리하였는가? (에러 메시지 출력 포함)

