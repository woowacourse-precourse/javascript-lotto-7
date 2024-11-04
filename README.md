# javascript-lotto-precourse

## 주요 기능
1. **로또 구입 금액 입력**  
   사용자는 1,000원 단위의 금액을 입력하여 로또를 구매합니다.
   - 금액이 1,000원 단위가 아닌 경우 예외가 발생합니다.
   - 입력이 올바르지 않은 경우 에러 메시지를 출력합니다.

2. **로또 발행**  
   입력된 금액에 맞게 로또를 발행합니다.
   - 1개의 로또는 1~45 사이의 중복되지 않는 6개의 숫자로 구성됩니다.
   - 발행된 로또 번호는 오름차순으로 정렬됩니다.

3. **당첨 번호 입력**  
   사용자는 쉼표로 구분된 6개의 당첨 번호와 보너스 번호를 입력합니다.
   - 입력된 번호가 1~45 범위를 벗어나거나 중복된 경우 예외가 발생합니다.

4. **당첨 결과 확인**  
   발행된 로또 번호와 당첨 번호를 비교하여 당첨 결과를 출력합니다.
   - 각 당첨 등수(1등 ~ 5등)에 맞는 로또 개수를 출력합니다.
   - 총 수익률을 계산하여 출력합니다.

5. **에러 메시지 출력**  
   잘못된 입력이 들어오면 "[ERROR]"로 시작하는 메시지를 출력합니다.

## 파일 구조 및 역할
### **LottoTest.js**
`Lotto.js` 클래스의 단위 테스트를 작성한 파일입니다.

**주요 역할:**
- 번호 개수가 6개가 아니면 예외가 발생하는지 테스트합니다.
- 중복된 번호가 있으면 예외가 발생하는지 확인합니다.
- 번호가 1~45 범위를 벗어나면 예외가 발생하는지 검증합니다.
- `getNumbers` 메서드가 올바르게 번호를 반환하는지 테스트합니다.
- `getMatchCount` 메서드는 일치하는 번호의 개수를 올바르게 반환하는지 테스트합니다.
- `hasBonusNumber` 메서드가 보너스 번호를 올바르게 확인하는지 테스트합니다.

### **App.js**
프로그램의 전체 흐름을 관리하는 클래스입니다.

**주요 역할:**
- 사용자로부터 입력을 받아 로또를 발행합니다.
- 당첨 번호와 보너스 번호를 입력받고, 로또 번호와 비교해 당첨 결과를 출력합니다.
- 예외 발생 시 에러 메시지를 출력합니다.

### Lotto.js
로또 번호의 유효성을 검사하고, 당첨 결과를 계산하는 클래스입니다.

**주요 역할:**
- **유효성 검사**: 로또 번호가 6개인지 확인하고, 중복된 번호가 있는지 검사하며, 번호가 1~45 범위 내에 있는지 확인합니다.
- **로또 번호 반환**: `getNumbers()` 메서드를 통해 로또 번호를 반환합니다.
- **일치하는 번호 개수 확인**: `getMatchCount(winningNumbers)` 메서드를 통해 로또 번호와 당첨 번호를 비교하여 일치하는 번호의 개수를 반환합니다.
- **보너스 번호 확인**: `hasBonusNumber(bonusNumber)` 메서드를 통해 로또 번호에 보너스 번호가 포함되어 있는지 확인합니다.


## 예외 처리
프로그램은 잘못된 입력이 들어오면 "[ERROR]"로 시작하는 메시지를 출력합니다.

**예외 상황:**
- 구입 금액이 1,000원 단위가 아닌 경우
- 로또 번호의 개수가 6개가 아닌 경우
- 로또 번호에 중복된 숫자가 있는 경우
- 번호가 1~45 범위를 벗어나는 경우
- 보너스 번호가 1~45 범위를 벗어나는 경우
