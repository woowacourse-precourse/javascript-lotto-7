import { Random } from '@woowacourse/mission-utils'
import { minimum_random,maximum_random,random_number_count } from '../constants/RandomNumbers';

class Random{
#lotto_list

    constructor(lotto_list){
        this.#check_unique_lotto_list(lotto_list);
        this.#lotto_list = lotto_list;
    }

    #check_unique_lotto_list(lotto_list){
        const unique_list=new Set();
        lotto_list.forEach(lotto => {
            lotto.forEach(number => unique_list.add(number));
        });

        if(unique_list.size !== lotto_list.flat().length){
            throw new Error("[ERROR]")
        }
    }

    make_random_number(count){
        const lotto_list=[];
        // for (count;count>0;count--){
        //     const list_data=[]
        //     for (let i=this.count;i>0;i--){
        //         list_data.append(Random.pickUniqueNumbersInRange(minimum_random,maximum_random,random_number_count));
        //     }
        //     list_data.sort((a,b)=>a-b);
        //     lotto_list.push(list_data);
        // }
        for (let i = 0; i< count; i++){
            const numbers = this.make_single_random_number();
            lotto_list.push(numbers);
        }
        return lotto_list
    }

    make_single_random_number(){
        const numbers = new Set();
        while (numbers.size<6){
            const num = Random.pickUniqueNumbersInRange(minimum_random,maximum_random,random_number_count)
            numbers.add(num)
        }
        return Array.from(numbers).sort((a, b)=> a-b);
    }

    // make_random_number(){
    //     const numbers=new Set();
    //     while (numbers.size<random_number_count){
    //       const num = Math.floor(Math.random()*45)+1
    //       numbers.add(num);
    //     }
    //     return new Lotto(Array.from(numbers));
    // }
    
    //   make_lotto(){
    //     for (let i=0;i<)
    //   }
}

export default Random;