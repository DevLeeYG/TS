/**
 * Let's make a calculatordd 🧮
 */

//타입을 지정해주자 add, substract, muliply, divide , 'remainder,



type operation = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder'


function calculate( a:operation, left : number , right : number):number{

    let num = 0

    if(a === 'add'){
        return num = left + right
    }else if(a==='substract'){
        return  num = left - right
    }else if(a==='multiply'){
        return  num = left * right;
    }else if(a==='divide'){
        return  num = left / right
    }else if(a==='remainder'){
        return  num = left % right
    }
    
    return num
}


console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
