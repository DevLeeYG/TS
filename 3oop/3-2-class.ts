//절차지향적으로 만들기 위해 우선 커피만드는 함수를 만들어보자
/*1.우선 얼마나 많은 샷을 만들건지 샷이라는 인자를 만들고 
  2.커피 컵을 리턴을 해줘야한다
  3.얼마나 커피를 추가해서 만들어야할까?
*/

// 우선 클래스를 만들자
{   
    type CoffeeCup ={
        shots : number; //샷이 얼마나 많이들어있나?
        hasMilk : boolean//우유가 들어있나?
    }
    //클래스를 만단다는것은 서로관련있는 데이터나 함수들을 묶어놓는 기능을 하는것
    //청사진 템플릿을 만드는 기능도 한다
    class CoffeeMaker{
        //클래스안에서 멤버변수를 작성할때에는 변수 키워드를 작성하지않고
        //function 키워드도 사용하지 않는다
        static BEANS_GRAMM_PER_SHOT:number = 7 // 1샷당 얼마나 많은 커피량이 필요할까?//class level
        coffeeBeans : number = 0 //그램수로 만들어보자 //instance(object) level  스태틱의 유무
        
        //클래스안에 있는 변수에 접근할때는 this. 을 붙여서 해주자

        constructor(coffeeBeans:number){ //클래스를 가지고 오브젝트의 인스턴스를 만들때 호출되는 함수이다.(중요)

            this.coffeeBeans = coffeeBeans//this는 클래스 안에 있는걸 가르킴
        }

        static makeMachine(coffeeBeans:number):CoffeeMaker{

            return new CoffeeMaker(coffeeBeans)
        }
    
         static makeCoffee(shots:number):CoffeeCup{ //커피컵이라는걸 명시해준다
    
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error('커피콩의 양이 충분하지 않습니다')// coffeeBeans의 양이 충분하지 않을때
            }
    
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT // 커피를 사용한만큼 coffeeBeans에서 줄여준다
            
            return {
                shots:shots,
                hasMilk:false
            }
    
        }

    }

const maker = new CoffeeMaker(32)//new 라는것은 클래스의 인스턴스를 만든다는것이고,괄호는 생성자를 호출하는것(constructer)
          
    //maker라는 오브젝트안에는 콩이 32가 들어간다


    
}