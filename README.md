# javascript-lotto-precourse

## 구현 기능 목록

### Order

- [x] 로또 구입 금액을 입력 받는다.
- [x] 유효한 로또 구입 금액이 입력됐는지 확인한다.
- [x] 로또 구입 금액을 바탕으로 구입 금액에 해당하는 만큼 로또를 발행한다.
- [x] 당첨 번호를 입력 받는다.
- [x] 유효한 당첨 번호가 입력됐는지 확인한다.
- [x] 보너스 번호를 입력 받는다.
- [x] 유효한 보너스 번호가 입력됐는지 확인한다.
- [x] 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 계산한다.
- [ ] 당첨 내역 및 수익률을 반환하고 로또 게임을 종료한다.

## 구현 후

### 📁 Structure

```bash
src
├── lib
│   ├── Module.js
│   ├── testUtils.js
│   ├── utils.js
│   ├── Validator.js
│   └── view.js
├── lottery-machine
│   ├── lottery-machine.controller.js
│   ├── lottery-machine.model.js
│   ├── lottery-machine.module.js
│   ├── lottery-machine.service.js
│   └── lottery-machine.view.js
├── validation
│   ├── bonus-number-validation.strategy.js
│   ├── purchase-amount-validation.strategy.js
│   ├── validation.context.js
│   ├── validation.strategy.js
│   └── winning-numbers-validation.strategy.js
├── App.js
├── index.js
└── Lotto.js
test
├── bonus-number-validation.strategy.test.js
├── lottery-machine.service.test.js
├── Module.test.js
├── purchase-amount-validation.strategy.test.js
├── utils.test.js
└── winning-numbers-validation.strategy.test.js
```

### 📝 Description

- `MVC(Model-View-Controller)` 패턴을 적용하여 예측가능한 구조를 만들기 위해 노력하였습니다.
- `Service Layer`을 추가하여 비지니스 로직을 분리하기 위해 노력했습니다.
- `Strategy Pattern`을 활용하여 유효성 검증 로직을 분리하고 유연하게 관리할 수 있게 만들기 위해 노력했습니다.
- `OOP(Object-Oriented Programming)` 관점에서 문제를 해결하기 위해 노력했습니다.
- `선언적인(Declarative)` 코드를 작성하기 위해 노력했습니다.
- 가능한 모든 함수에 테스트를 작성하기 위해 노력했습니다.
- `type-safe`한 코드를 작성하기 위해 노력했습니다.
- 가능한 작은 함수를 만들기 위해 노력했습니다.

### ♻️ Object

```mermaid
classDiagram
    class Module {
        - models: Array
        - views: Array
        - controllers: Array
        - services: Array
        - providers: Array
    }

    class LotteryMachineModel {
        - #purchaseAmount: number
        - #winningNumbers: Array<number>
        - #bonusNumber: number
        - #lotteryTickets: Array<LotteryModel>
        + getPurchaseAmount() number
        + setPurchaseAmount(purchaseAmount: number)
        + getWinningNumbers() Array<number>
        + setWinningNumbers(winningNumbers: Array<number>)
        + getBonusNumber() number
        + setBonusNumber(bonusNumber: number)
        + getLotteryTickets() Array<LotteryModel>
        + getLotteryTicketCounts() number
        + getLotteryTicketNumbers() Array<number[]>
        + setLotteryTicket(lotteryTicket: LotteryModel)
    }

    class LotteryMachineView {
        + getLotteryPurchaseAmount() Promise<string>
        + getLotteryWinningNumbers() Promise<string>
        + getLotteryBonusNumber() Promise<string>
        + printLineBreak()
        + printErrorMessage(message: string)
        + printPurchaseLotteryTicketCounts(lotteryTicketCounts: number)
        + printPurchaseLotteryTickets(lotteryTickets: Array<number[]>)
        + printPurchaseLotteryTicketInfo(lotteryTicketCounts: number, lotteryTickets: Array<number[]>)
        + printWinningStatisticsInfo()
        + printWinningStatistics(winningStatistics: WinningStatistics, winningAmount: WinningAmount)
        + printTotalReturnRate(totalReturnRate: number)
    }

    class LotteryMachineController {
        - #lotteryMachineView: LotteryMachineView
        - #lotteryMachineService: LotteryMachineService
        + init() async
    }

    class LotteryMachineService {
        - #lotteryMachineModel: LotteryMachineModel
        - #lotteryMachineValidator: ValidationContext
        + inputPurchaseAmount(purchaseAmount: string)
        + inputWinningNumbers(winningNumbers: string)
        + inputBonusNumber(bonusNumber: string)
        + generateLotteryTickets() Object
        + generateWinningStatistics() Object
        + calculateTotalReturnRate(winningStatistics: WinningStatistics, winningAmount: WinningAmount) number
    }

    class PurchaseAmountValidationStrategy {
        - #purchaseAmount: string
        - #parse: (purchaseAmount: string) => number
        + validate()
        - #isNotEmpty(purchaseAmount: string) boolean
        - #isPositiveInteger(purchaseAmount: string) boolean
        - #isNotZero(purchaseAmount: number) boolean
        - #isDivisible(purchaseAmount: number) boolean
        - #isInMaxSafeInteger(purchaseAmount: number) boolean
        - #validatePurchaseAmount(validator: Validator) Validator
        - #validateParsedPurchaseAmount(validator: Validator) Validator
    }

    class WinningNumbersValidationStrategy {
        - #winningNumbers: string
        - #parse: (winningNumbers: string) => Array<number>
        + validate()
        - #isNotEmpty(winningNumbers: string) boolean
        - #isValidRange(winningNumbers: Array<number>) boolean
        - #isValidLength(winningNumbers: Array<number>) boolean
        - #isNotDuplicated(winningNumbers: Array<number>) boolean
        - #isPositiveInteger(winningNumbers: Array<number>) boolean
        - #validateWinningNumbers(validator: Validator) Validator
        - #validateParsedWinningNumber(validator: Validator)
    }

    class BonusNumberValidationStrategy {
        - #bonusNumber: string
        - #parse: (bonusNumber: string) => number
        - #winningNumbers: Array<number>
        + validate()
        - #isNotEmpty(bonusNumber: string) boolean
        - #isPositiveInteger(bonusNumber: string) boolean
        - #isNotZero(bonusNumber: number) boolean
        - #isValidRange(bonusNumber: number) boolean
        - #isNotDuplicated(bonusNumber: number) boolean
        - #validateBonusNumber(validator: Validator) Validator
        - #validateParsedBonusNumber(validator: Validator) Validator
    }

    class LotteryModel {
        + getLotteryNumbers() Array<number>
    }

    class ValidationContext {
        + validate(strategy)
    }

    class Validator {
        + validate(value)
        + with(condition, options)
    }

    class ValidationStrategy {
        <<abstract>>
        + validate()
    }

    Module --> LotteryMachineModel : contains
    Module --> LotteryMachineView : contains
    Module --> LotteryMachineController : contains
    Module --> LotteryMachineService : contains
    Module --> ValidationContext : contains

    LotteryMachineModel --> LotteryModel : uses
    LotteryMachineModel <|-- LotteryMachineService : interactsWith
    LotteryMachineService --> PurchaseAmountValidationStrategy : uses
    LotteryMachineService --> WinningNumbersValidationStrategy : uses
    LotteryMachineService --> BonusNumberValidationStrategy : uses
    LotteryMachineService --> ValidationContext : validatesWith
    LotteryMachineController --> LotteryMachineView : uses
    LotteryMachineController --> LotteryMachineService : uses
    PurchaseAmountValidationStrategy --> Validator : uses
    PurchaseAmountValidationStrategy <|-- ValidationStrategy : extends
    WinningNumbersValidationStrategy --> Validator : uses
    WinningNumbersValidationStrategy <|-- ValidationStrategy : extends
    BonusNumberValidationStrategy --> Validator : uses
    BonusNumberValidationStrategy <|-- ValidationStrategy : extends
    ValidationContext <|-- LotteryMachineService : utilizes
```
