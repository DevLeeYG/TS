{
    //ts 의 꽃
    /*
    새로운 타입을 내가 정의할수있다 
     */

    type Text = string // 텍스트란 타입은 문자열이다

    const name : Text = 'ellie'
    const address : Text = 'korea'

    type Num = number;
    type Student = {
        name:string,
        age:number
    }

    const student:Student ={
        name:'123',
        age:123,
    }

    // String Literal types

    type Name = 'name';

    let lee : Name

    //lee에는 name만 쓸수있다
}