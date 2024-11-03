import {Console} from "@woowacourse/mission-utils";

export const countOutput = (amount, content) => {
    return Console.print('\n' + amount / 1000 + content);
}

export const lottosOutput = (amount, lottos) => {
    for (let i = 0; i < amount / 1000; i++) {
        Console.print(lottos[i]);
    }
}