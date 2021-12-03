{
    type CoffeeCup = {
      shots: number;
      hasMilk: boolean;
    };
  
    class CoffeeMaker {
     private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
     private coffeeBeans: number = 0; // instance (object) level
     //protected// 마찬가지로 외부에서는 접근못하지만 커피메이커를 상속받은 곳에서는 접근할수있다
     private constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
      }
  
      static makeMachine(coffeeBeans: number): CoffeeMaker {
        return new CoffeeMaker(coffeeBeans);
      }

     public fillCoffeeBeans(beans : number){ //퍼블릭상태는 따로 키워드를 작성하지 않다ㅗ 괜찮다

        if(beans<0){
            throw new Error('커피콩은 0갯수 보다 많아야합니다')
        }
        this.coffeeBeans += beans

      }
  
      makeCoffee(shots: number): CoffeeCup {
        if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
          throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
        return {
          shots,
          hasMilk: false,
        };
      }
    }
  
    const maker = CoffeeMaker.makeMachine(32)
    
    maker.fillCoffeeBeans(32)
    
    //현재 외부에서 설정을 변경해서 유효하지 않게 만드는것을 방지하기 위해 가려보자
    //방법 public
    //    priavate //내가 얼마큼의 커피로 만드는지 보여주고싶지않다면?<-
    // ex 고양잉의 마음이나 상태를 내마음대로 조절할수 없기때문이다
    //    protected

  }

  //encapulation -> 캡슐화는 클래스를 만들때 외부에서 보일수 있는 (접근할수있는것은 무엇인지) 
  //내부적으로 가지고있어야하는 데이터는 무엇인지 결정할수있다
  //외부에 노출해도 되고 안되는 것은 무엇인지 잘 판단해야한다
  // 노출되선 안되는것은 아무래도 내부의 상태를 외부에서 멋대로 변경하면 안되는 것이 있겟다
  