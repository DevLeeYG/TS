/**
 * Let's make a game 🕹
 */

type xy = {
    x:number,
    y:number,
}

let position:xy = {
    x : 0,
    y : 0,
}

function move(a:string){

    if(a==='up'){
        position.y++;
    }else if(a==='down'){
        position.y--;
    }else if(a==='left'){
        position.x--;
    }else if(a==='right'){
        position.x++;
    }

}



console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

//우선 타입을 만들어보자
//전역에 변수 선언후에 클로저를 형성해서 작동해보자
