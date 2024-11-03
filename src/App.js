import {Console} from "@woowacourse/mission-utils";
import LottoList from "./LottoList.js";

const informmessage = "구입금액을 입력해 주세요.\n";
class App {
  ll;

  async getinput(){
    let budget;
    let ll;
    while(true){
      budget = await Console.readLineAsync(informmessage);
      try{ll = new LottoList(budget);}
      catch{continue;}
      break;
    }
    return ll;
  }
  async winnnumbersinput(){
    while(true) {
      try {await this.ll.setwinnumbers();}
      catch {continue;}
      break;
    }
  }
  async bonusnumbersinput(){
    while(true) {
      try {await this.ll.setbonusnumber();}
      catch {continue;}
      break;
    }
  }

  async run() {


    this.ll = await this.getinput();
    await this.winnnumbersinput();
    await this.bonusnumbersinput();
    this.ll.printbuylotto();
    this.ll.allwincheck();
    this.ll.printwinner();
  }
}

export default App;
