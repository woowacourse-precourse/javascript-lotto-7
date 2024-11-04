import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoResult from "./LottoResult.js";
import LottoMachine from "./LottoMachine.js"
import { LOTTO_PRICE } from "./Constants.js";

// 로또 게임의 메인 흐름을 관리
class LottoGame {
    // 로또 게임의 초기화 작업
    constructor(){
        this.lottoMachine = new LottoMachine(); //로또 번호 생성기(인스턴스 생성)
        this.lottoResult = new LottoResult();  //결과 계산기
    }
    // 비동기 작업을 수행하기 위한 메서드
    async start(){
        try
        {
            const amount = await this.inputPurchaseAmount(); //구입 금액 입력 및 검증

            // 로또 발행
            const purchasedLottos = this.purchaseLottos(amount);
            
            this.printPurchasedLottos(purchasedLottos);

            // 당첨 번호 및 보너스 번호 입력
            const { winningNumbers, bonusNumber } = await this.inputWinningNumbers();

            // 당첨 결과 계산
            this.lottoResult.calculateRank(purchasedLottos, winningNumbers, bonusNumber);

            // 당첨 결과 및 통계 출력
            this.printLottoStatistics(this.lottoResult.getStatistics(), amount);
            
        } catch (error) 
        {
            MissionUtils.Console.print(error.message);
        }
    }
    //구입 금액 입려받고 유효성 검사.
    async inputPurchaseAmount(){
        const amountStr = await MissionUtils.Console.readLineAsync("구입 금액을 입력해 주세요: ");
        const amount = parseInt(amountStr, 10); //문자열을 정수로 변환

        if(isNaN(amount) || amount % LOTTO_PRICE !== 0) {
            throw new Error("[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.");
        }
        return amount;
    }

    purchaseLottos(amount){ //구매한 로또 배열 반환
        const lottoCount = amount / LOTTO_PRICE;
        
        const lottos = []; // 스택에 저장
        
        for(let i = 0; i < lottoCount; i++){
            const numbers = this.lottoMachine.generateLotto(); // 로또 번호 생성
            lottos.push(numbers);
        }
        
        return lottos;
    }

    //당첨 번호 입력받기
    async inputWinningNumbers() {
        //사용자 입력 변수 선언
        const WinningNumbersStr = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요. ");
        const bonusNumberStr = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요. ");

        const winningNumbers = WinningNumbersStr.split(",").map(Number); // , 단위로 나눈 뒤 매핑
        const bonusNumber = parseInt(bonusNumberStr, 10); //정수로만 바꾸기

        this.validateWinningNumbers(winningNumbers, bonusNumber); // 유효성 검사

        return { winningNumbers, bonusNumber };
    }

    // 순회하면 유효성 검사
    validateWinningNumbers(winningNumbers, bonusNumber){
        if (winningNumbers.length !== 6 || new Set(winningNumbers).size !== 6){
            throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 중복되지 않는 숫자 6개여야 합니다.");
        }
        if (!this.isValidLottoNumber(bonusNumber)){
            throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
        }
        winningNumbers.forEach(num =>{
            if(!this.isValidLottoNumber(num)){
                throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다. ");
            }
        });
    }
    
    isValidLottoNumber(num) {
        return num >= 1 && num <= 45;
    }

    printPurchasedLottos(lottos) {
        MissionUtils.Console.print(`${lottos.length}개를 구매했습니다.`);
        lottos.forEach(lotto => {
            
            MissionUtils.Console.print(`[${lotto.sort((a,b) => a - b).join(", ")}]`); // 오름차순으로 출력된다.
        });
    }

    printLottoStatistics(statistics, purchaseAmount) {
        MissionUtils.Console.print("당첨 통계");
        MissionUtils.Console.print("-----------");

        Object.entries(statistics.rankCounts).forEach(([rank,count]) => {
            MissionUtils.Console.print(`${rank}등: ${count}개`);
        });

        const profitRate = this.lottoResult.calculateProfit(purchaseAmount);
        MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
    }
}

export default LottoGame;
