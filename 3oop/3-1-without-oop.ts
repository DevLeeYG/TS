//절차지향적으로 만들기 위해 우선 커피만드는 함수를 만들어보자
/*1.우선 얼마나 많은 샷을 만들건지 샷이라는 인자를 만들고 
  2.커피 컵을 리턴을 해줘야한다
  3.얼마나 커피를 추가해서 만들어야할까?
*/

{   
    type CoffeeCup ={
        shots : number; //샷이 얼마나 많이들어있나?
        hasMilk : boolean//우유가 들어있나?
    }

    const BEANS_GRAMM_PER_SHOT:number = 7 // 1샷당 얼마나 많은 커피량이 필요할까?

    let coffeeBeans : number = 0 //그램수로 만들어보자


    function makeCoffee(shots:number):CoffeeCup{ //커피컵이라는걸 명시해준다

        if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT){
            throw new Error('커피콩의 양이 충분하지 않습니다')// coffeeBeans의 양이 충분하지 않을때
        }

        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT // 커피를 사용한만큼 coffeeBeans에서 줄여준다

        return {
            shots:shots,
            hasMilk:false
        }

    }
    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT

    const coffee = makeCoffee(5)

    console.log(coffee)
}