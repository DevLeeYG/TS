{
    //Array 타입 지정해보자

    const fruits :string[] = ['apple','banana']
    const scores : number []=[1,2,3]
    // 또는
    //:Array<number>
    // readonly 를 타입 앞에 붙여주면 절대 변경할수 없고 읽을수만 있다

    function prArr(fruits:readonly string[]){

    }

    //Tuple ->서로다른 타입을 함께 가질수 있는 타입

    let student:[string,number] //권장하지 않습니다

    student = ['name',123] //ex
    
    const [name,age] = student

    console.log(name)
    console.log(age)

    
}