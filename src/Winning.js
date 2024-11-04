class Winning {
    #numbers;
    #bonus;

    constructor(numbers, bonus) {
        this.#numbers = this.#validateNumbers(numbers);
        this.#bonus = bonus;
    }

    #validateNumbers(numbers) {
        numbers = numbers.map(num => Number(num));
        return numbers;
    }

    static match(object, target, find) {
        const MATCH_NUMBER = [0, 0];
        find.#numbers.forEach((number) => {
            if (target.includes(number)) {
                MATCH_NUMBER[0] += 1;
            }
        });
        if (target.includes(find.#bonus)) {
            MATCH_NUMBER[1] += 1;
        }
        if (MATCH_NUMBER[0] == 3) {
            object[0].count += 1;
        }
        if (MATCH_NUMBER[0] == 4) {
            object[1].count += 1;
        }
        if (MATCH_NUMBER[0] == 5) {
            if (MATCH_NUMBER[1] == 0) {
                object[2].count += 1;
            } else {
                object[3].count += 1;
            }
        }

        if (MATCH_NUMBER[0] == 6) {
            object[4].count += 1;
        }
    }

}

export default Winning;