//다형성

{
    type CoffeeCup = {
      shots: number;
      hasMilk?: boolean;
      hasSugar?:boolean
    };
  
    interface CoffeeMaker {
      makeCoffee(shots: number): CoffeeCup;
    }
  
 
   
    class CoffeeMachine implements CoffeeMaker {
      private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
      private coffeeBeans: number = 0; // instance (object) level
      
      public constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
      }
  
      static makeMachine(coffeeBeans: number): CoffeeMachine {
        return new CoffeeMachine(coffeeBeans);
      }
  
      fillCoffeeBeans(beans: number) {
        if (beans < 0) {
          throw new Error('value for beans should be greater than 0');
        }
        this.coffeeBeans += beans;
      }
  
      clean() {
        console.log('cleaning the machine...🧼');
      }
  
      private grindBeans(shots: number) {
        console.log(`grinding beans for ${shots}`);
        if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
          throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      }
  
      private preheat(): void {
        console.log('heating up... 🔥');
      }
  
      private extract(shots: number): CoffeeCup {
        console.log(`Pulling ${shots} shots... ☕️`);
        return {
          shots,
          hasMilk: false,
        };
      }
  
      makeCoffee(shots: number): CoffeeCup {
        this.grindBeans(shots);
        this.preheat();
        
        return this.extract(shots);
      }
    }
  
    class CaffeLatteMachine extends CoffeeMachine{ 

      constructor(beans: number,public readonly seriaNumber:string){
        super(beans)
      }

 private steamMilk():void{
   console.log('Steaming some milk..')
 }
      makeCoffee(shots:number):CoffeeCup{//상속에서 메이크 커피 함수를 가지고옴
        const coffee = super.makeCoffee(shots)
        this.steamMilk()
        return {
         ...coffee,
          hasMilk:true
        }
      }

    }

    class SweetCoffeMaker extends CoffeeMachine{
        
       makeCoffee(shots:number):CoffeeCup{
           const coffee = super.makeCoffee(shots)
           return {
               ...coffee,
               hasSugar:true,
           }
       }
    }

    const machines : CoffeeMaker[]= [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16,'1'),
        new SweetCoffeMaker(16),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16,'1'),
        new SweetCoffeMaker(16)
]
    machines.forEach(machine =>{
        console.log('---------------------')
        machine.makeCoffee(1)
        
    })
  
  }

  /**
   * 하나의 인터페이스나 부모의 클래스를 상속한 자식클래스들이 인터페이스와 부모클래스들에 있는 함수들을 다른방식으로 다양한게
   * 구성함으로 써 조금더 다형성을 만들어봄을 말한다
   * 이처럼 인터페이스와 부모클래스에 있는 동일은 함수api를 통해 각각에 구현사항을 신경쓰지않고 약속된 한가지 api를 호출함으로써
   * 사용하는사람이 간편하게 사용할수 있도록 도와주는것
   */