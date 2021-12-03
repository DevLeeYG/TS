{
    type CoffeeCup = {
      shots: number;
      hasMilk: boolean;
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

    const machine = new CoffeeMachine(23)
    const latteMachine = new CaffeLatteMachine(23 ,'ssss')
    const coffee = latteMachine.makeCoffee(1)
    console.log(coffee)
    console.log(latteMachine.seriaNumber)
  }
  
  //상속을 이용해 공통적인걸 재사용하면서 자식클래스의에서 따로 기능을 추가해서 다른걸 만들어볼수 있다
  // super를 이용해 부모의 함수를 가져올수있다