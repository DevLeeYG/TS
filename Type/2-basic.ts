{
    //js
//     function jsAdd(num1,num2){
//         return num1+num2;
//     }
//     //위코드를 변환해보자
//     //ts 

//     function tsAdd(num1:number,num2:number):number{
//         return num1+num2
//     }
//     //number타입을받아 number만 리턴할수있다
    
//     //js
//     function jsFetchNum(id){
//         //code ...
//         //code ...
//         //code ...
//         //프로미스를 리턴하는 타입
//         return new Promise((resoleve,reject)=>{
//             resoleve(100)
//         })
//     }
// //ts

//     function tsFetchNum(id:string):Promise<number>{
//         //code ...
//         //code ...
//         //code ...
//         //프로미스를 리턴하는 타입
//         return new Promise((resoleve,reject)=>{
//             resoleve(100)
//         })
//     }

    //최신 자바스크립트 문법자체는 타입스크립트에서 사용가능하며 타입스크립트에서 사용하는것도 사용
    //js=>ts
    

    //1
    //Optinal parameter

    function printName(firstName:string,lastName?:string){
        console.log(firstName);
        console.log(lastName);
    }
    //인수가 2개라면 2가지를 제공해야됩니다 ->자바스크립트에서는 될것이다
    printName('Lee','e')

    //전달해도 되고 전달하지 않아도 되는 함수를 만들때는 '?'를 써주면된다
    //lastName?:string 문자열을 전달해도되고 아니여도 된다


    //Default parameter //전달해주지않았을대 기본값

    function printMessage(message:string ='default message'){
        console.log(message)
    }
    printMessage() //

    //Rest parameter 

    function addNumber(...numbers:number[]):number{
        return numbers.reduce((a,b)=>a+b)
    }
    console.log(addNumber(1,2,3,4,5,6))
}