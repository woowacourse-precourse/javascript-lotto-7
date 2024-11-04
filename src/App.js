import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    const 구매금액 = await this.구매금액가져오기();
    const 티켓수 = 구매금액 / 1000;
    const 티켓들 = this.전체티켓들만들기(티켓수);
    this.보너스번호생성기(티켓들);
    this.티켓들출력(티켓들);
    MissionUtils.Console.print("당첨번호를 입력해주세요");
    const 당첨번호 = await this.당첨번호가져오기();
    MissionUtils.Console.print("보너스 번호를 입력해주세요");
    const 보너스번호 = await MissionUtils.Console.readLineAsync("");
    this.로또번호와당첨번호비교(티켓들, 당첨번호);
  }

  async 구매금액가져오기() {
    const input = await MissionUtils.Console.readLineAsync("");
    const amount = parseInt(input, 10);
    return amount;
  }

  로또번호생성기() {
    const 로또번호리스트 = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      6
    );
    return 로또번호리스트.sort((a, b) => a - b);
  }

  보너스번호생성기(로또번호리스트) {
    const 가능한번호 = Array.from({ length: 45 }, (_, i) => i + 1).filter(
      (num) => !로또번호리스트.includes(num)
    );
    const 보너스번호 = MissionUtils.Random.pickNumberInList(가능한번호);
    MissionUtils.Console.print(`${보너스번호}38번째줄`);
    return 보너스번호;
  }

  전체티켓들만들기(갯수) {
    const tickets = [];
    for (let i = 0; i < 갯수; i++) {
      tickets.push(this.로또번호생성기());
    }
    return tickets;
  }

  보너스점수빼기(전체티켓) {
    const tickets = 전체티켓.forEach((티켓) => {
      티켓.numbers.join(", ");
    });
    MissionUtils.Console.print(`${tickets} 52번째줄`);
    return tickets;
  }

  티켓들출력(티켓들) {
    MissionUtils.Console.print(`${티켓들.length}개를 구매했습니다.`);
    티켓들.forEach((티켓) =>
      MissionUtils.Console.print(`[${티켓.join(", ")}]`)
    );
  }

  async 당첨번호가져오기() {
    const 입력값 = await MissionUtils.Console.readLineAsync("");
    const 당첨번호 = 입력값.split(",").map((num) => parseInt(num.trim(), 10));
    return 당첨번호;
  }

  로또번호와당첨번호비교(티켓들, 당첨번호) {
    let 일치갯수 = 0;
    MissionUtils.Console.print(
      `${티켓들.forEach((티켓) => {
        티켓.numbers;
      })} 64번째줄`
    );
    티켓들.forEach((티켓) => {
      if (당첨번호.includes(티켓.numbers)) {
        MissionUtils.Console.print(`${티켓.numbers} 64번째줄`);
        일치갯수++;
      }
    });
    return 일치갯수;
  }

  등수선정() {
    let 등수;
    switch (일치개수) {
      case 6:
        등수 = 1;
        break;
      case 5:
        if (bonusNumber === this.보너스번호) {
          등수 = 2;
        } else {
          등수 = 3;
        }
        break;
      case 4:
        등수 = 4;
        break;
      case 3:
        등수 = 5;
        break;
    }
  }
  등수인덱스리스트만들기() {
    const 등수인덱스리스트 = [0, 0, 0, 0, 0];
    for (let i = 0; i < 로또번호출력횟수; i++) {
      if (등수 === 1) {
        등수인덱스리스트[4] += 1;
      } else if (등수 === 2) {
        등수인덱스리스트[3] += 1;
      } else if (등수 === 3) {
        등수인덱스리스트[2] += 1;
      } else if (등수 === 4) {
        등수인덱스리스트[1] += 1;
      } else if (등수 === 5) {
        등수인덱스리스트[0] += 1;
      }
    }
    return 등수인덱스리스트;
  }
  당첨통계출력(등수인덱스리스트) {
    MissionUtils.Console.print(`
      당첨통계
      ---
      3개 일치 (5,000원) - ${등수인덱스리스트[0]}개
      4개 일치 (50,000원) - ${등수인덱스리스트[1]}개
      5개 일치 (1,500,000원) - ${등수인덱스리스트[2]}개
      5개 일치, 보너스 볼 일치 (30,000,000원) - ${등수인덱스리스트[3]}개
      6개 일치 (2,000,000,000원) - ${등수인덱스리스트[4]}개
      `);
  }
  총액산출(등수인덱스리스트) {
    const 총액 =
      5000 * 등수인덱스리스트[0] +
      50000 * 등수인덱스리스트[1] +
      1500000 * 등수인덱스리스트[2] +
      30000000 * 등수인덱스리스트[3] +
      2000000000 * 등수인덱스리스트[4];
    return 총액;
  }
  수익률출력(총액) {
    const 수익률 =
      Math.round((parseInt(총액) / this.inputMoney) * 100 * 10) / 10;
    MissionUtils.Console.print(`총 수익률은 ${수익률}%입니다.`);
  }
}

export default App;
