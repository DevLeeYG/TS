{
    /**
     * Enum// 여러가지의 관련된  상수 값을 한곳에 모아서 관리
     JS에는 이 기능이 없어 TS에서 쓸수있다
    */

     const MAX_NUM = 6;
     const MAX_STUDENTS_PER_CLASS = 10;
     const MONDAY = 0;
     const TUESDAY = 1;
     const WEDNESDAY = 2;

    //이것을 한곳에 묶으려면?

    const DAYS_ENUM = Object.freeze({'MONDAY' : 0,'TUESDAY':1,"WEDNESDAY":2})
//상수값을 모았다

//TS더 간편하게

enum Days{ // 값을 저장하지 않는다면
    Monday, // 0
    Tuesday, //1
    Wednesday,//순으로 지정되며
    Thursday= 1,
    Friday='friday',
    Saturday='saturday',
    Sunday='sunday'// 이렇게 따로 지정해줄수있다 문자열이는 넘버형이든
}
console.log(Days.Friday)

const day = Days.Monday

console.log(day)


//타입스크립트에서 이넘은 많이 쓰지 않는 걸 추천한다
// 이넘은 지정된값을 바꿀수 있어 타입스크립트를 쓰는 의미가 없다

// 타입스크립트에서는 유니온 타입을 많이 써서 활용한다

type Daysss = 'Monday' | 'Tuesday' 

//이넘은 유니온타입으로 대채될수있다 유니온으로 지정하면 타입보존할수있다.
}