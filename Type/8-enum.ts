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

enum Days{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
console.log(Days.Friday)

const day = Days.Monday

console.log(day)




}