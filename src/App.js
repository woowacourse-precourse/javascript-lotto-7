import {Random, Console} from '@woowacourse/mission-utils'
import Lotto from "./Lotto.js";

const winPriceString = ["2,000,000,000", "30,000,000", "1,500,000", "50,000", "5,000"];
const winPriceNumber = [2000000000, 30000000, 1500000, 50000, 5000];
const firRankMatch = 6;
const maxRank = 5, secRankMatch = 5;

const moneyUnit = 1000;

class App {
    async run() {

        let correctInput = false;

        let totalMoney = 0;
        while (!correctInput) {
            totalMoney = await Console.readLineAsync("구매할 금액을 입력해주세요.\n");
            if (totalMoney % moneyUnit !== 0) {
                Console.print("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
                continue;
            }
            correctInput = true;
        }

        const lottoCount = totalMoney / moneyUnit;
        Console.print(`${lottoCount}개를 구매했습니다.`);

        const lottoNumber = [];
        for (let i = 0; i < lottoCount; i++) {
            lottoNumber.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
        }

        lottoNumber.map((lotto) => {
            const output = Object.values(lotto.getNumber()).join(', ');
            Console.print(`[${output}]`);
        })
        Console.print("");

        correctInput = false;
        let winString = "";
        let winNumber;
        while (!correctInput) {
            winString = await Console.readLineAsync("당첨 번호를 입력해주세요 : ");
            winNumber = winString.split(',');

            if(winNumber.length !== firRankMatch){
              Console.print("[ERROR] : 당첨번호는 6개 숫자여야합니다.");
              correctInput = false;
              continue;
            }

            winNumber.map((num) => {
                num = Number.parseInt(num);
            })

            if (!isUniqueNumber(winNumber) || !checkNumberRange(winNumber)) {
                correctInput = false;
                continue;
            }
            correctInput = true;

        }
        const winLotto = new Lotto(winNumber);

        let bonusNumber;
        correctInput = false;
        let flag = 0;
        while (!correctInput) {
            flag = 0;
            bonusNumber = await Console.readLineAsync("보너스 번호를 입력해주세요 : ");
            if (flag === 0 && isNaN(bonusNumber)) {
                Console.print("[ERROR] : 로또 번호는 숫자여야합니다.");
                flag = 1;
            }
            const minNum = 1;
            const maxNum = 45;
            winNumber.map((winNum) => {
                if (flag === 0 && winNum === bonusNumber) {
                    Console.print("[ERROR] : 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
                    flag = 2;
                }
                if (flag === 0 && (bonusNumber < minNum || bonusNumber > maxNum)) {
                    Console.print(`[ERROR] : 보너스 번호는 ${minNum}부터 ${maxNum}까지의 숫자여야 합니다.`);
                    flag = 3;
                }
            })
            if (flag === 0) {
                correctInput = true;
            }
        }

        Console.print("당첨 통계\n---");

        const winList = new Array(maxRank).fill(0);
        lottoNumber.map((lotto) => {
            const rank = convertMatchCountToRank(lotto, winLotto, bonusNumber);
            if (rank <= maxRank) {
                winList[rank - 1]++;
            }

        });

        let result = "";
        let earnMoney = 0;

        winList.map((winEntry, index) => {
            let matchBonus = " ";
            const rank = index + 1;
            let matchCount = convertRankToMatchCount(rank);
            if (matchCount === -secRankMatch) {
                matchBonus = ", 보너스 볼 일치 ";
                matchCount = secRankMatch;
            }
            earnMoney += winPriceNumber[index] * winEntry;

            const resultEntry = `${matchCount}개 일치${matchBonus}(${winPriceString[index]}원) - ${winEntry}개`;
            result = resultEntry + "\n" + result;
        })
        Console.print(result);

        Console.print(`총 수익률은 ${calRevenueRate(totalMoney, earnMoney)}%입니다.`);
    }
}


function isUniqueNumber(numbers) {
    let flag = 0;
    numbers.map((num, index) => {
        if (isNaN(num)) {
            flag = 1;
        } else {
            if (checkDupNumber(num, index, numbers) === 2) {
                flag = 2;
            }
        }
    })

    if (flag === 1) {
        Console.print("[ERROR] : 로또 번호는 숫자여야합니다.");
    }
    if (flag === 2) {
        Console.print("[ERROR] : 로또 번호는 중복될 수 없습니다.");
    }
    return flag === 0;
}

function checkDupNumber(target, targetIndex, numbers) {
    let flag = 0;
    numbers.map((num, index) => {
        if (num === target && targetIndex !== index) {
            flag = 2;
        }
    })
    return flag;
}

function checkNumberRange(numbers) {
    let flag = 0;
    const minNum = 1;
    const maxNum = 45;
    numbers.map((num) => {
        if (num > maxNum || num < minNum) {
            Console.print("[ERROR] : 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
            flag = 1;
        }
    })
    return flag === 0;
}

function calRevenueRate(costMoney, earnMoney) {
    const RevenueRate = (earnMoney / costMoney) * 100;
    return RevenueRate.toFixed(1);
}

function convertRankToMatchCount(rank) {
    const tool = 8;
    const secWin = 2;
    const firWin = 1;

    let matchCount = tool - rank;
    if (rank === secWin)
        return -5;//일단 5등처리
    if (rank === firWin)
        return 6;

    return matchCount;
}

function convertMatchCountToRank(lotto, winLotto, bonusNumber) {
    const tool = 8;
    let matchCount = lotto.isLottoWin(lotto, winLotto);

    if (matchCount === firRankMatch) {
        matchCount++;
    }
    if (matchCount === secRankMatch && lotto.isBonus(bonusNumber)) {
        matchCount++;
    }

    return (tool - matchCount);
}

export default App;
