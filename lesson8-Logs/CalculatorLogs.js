const e = require("express");

class Calculator {
    //Logger logger = new SplunkLogger();
    constructor() {}

    _validateInputs(a, b, operator) {
        if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) {
            logger.error(`ERROR: Invalid operands received for operator [${operator}]. Operands must be numbers. Received: a=${a}, b=${b}`);
            metrics.count(CALCULATOR_ERROR_PARAMS, `Invalid operands for operator [${operator}]: a=${a}, b=${b}`);
            return false;
        }
        return true;
    }

    add(a, b) {
        metrics.timingStart(ADD_TIMING)
        console.info(`about to create new password for user {user_id}`);
        if (!this._validateInputs(a, b, '+')) {
            console.error(`ERROR: Invalid operands received for operator [+]. Operands must be numbers. Received: a=${a}, b=${b}`);
            return NaN;
        }
        const result = a + b;
       // console.info(`Received operands ${a} and ${b} with operator [+]. The result is ${result}.`);
       metrics.timingEnd(ADD_TIMING) 
       return result;
    }

    //Timing

//     //api 
//     addNewBook(){
// validate()
// getData()
// formatDa()
// backup()
// sendEmail()
        
//         return result;
//     }

// getData(){
//  s
// result prisma.find(user=1); 
// e
// }

//result = add(2+3)

    // result = trace(add(2,3));
    // result = trace(sub(2,3));


    //info: about to add 2 and 3 
    // 


    // log
    //action --add
    //log
// return action result 

    // log info
    // a+b
    // log info


    // //
    // result = add(2+3);
    // log.info(result is ${result});


    sub(a, b) {
       console.info(`about to create new password for user {user_id}`);
        if (!this._validateInputs(a, b, '-')) {
            return NaN;
        }
        const result = a - b;
        console.info(`Received operands ${a} and ${b} with operator [-]. The result is ${result}.`);
        return result;
    }

    mul(a, b) {
        console.info(`about to create new password for user {user_id}`);
        if (!this._validateInputs(a, b, '*')) {
            return NaN;
        }
        const result = a * b;
        console.info(`Received operands ${a} and ${b} with operator [*]. The result is ${result}.`);
        return result;
    }

    div(a, b) {
        console.info(`about to create new password for user {user_id}`);
        if (!this._validateInputs(a, b, '/')) {
            return NaN;
        }

        if (b === 0) {
            console.error(`ERROR: Division by zero is not allowed. Received operands ${a} and ${b}.`);
            return -1;
        }

        const result = a / b;
        console.info(`Received operands ${a} and ${b} with operator [/]. The result is ${result}.`);
        return result;
    }
}

exports.Calculator = Calculator;