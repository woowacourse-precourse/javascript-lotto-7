
class InputValidator {
     validateCost(cost) {
        if(cost % 1000 !== 0){
            throw new Error('[ERROR] 입력 금액은 1000의 배수여야 합니다. \n');
        }
    }
}

export default InputValidator;