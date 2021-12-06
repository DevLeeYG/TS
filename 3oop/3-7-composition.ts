//구성
//필요한것들을 가져와서 조립해나가는걸 말합니다 

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
  //싼 우유 거품기
    class CheapMilkSteamer{
        private steamMilk():void{
            console.log('Steaming some milk...')
        }
        makeMilk(cup:CoffeeCup):CoffeeCup{
            this.steamMilk()
            return{
                ...cup,
                hasMilk:true
            }
        }
    }

    class AutomaticSugarMixer{
        private getSugar(){
            console.log('Getting some sugar from candy')
            return true
        }

      addSugar(cup:CoffeeCup):CoffeeCup{
          const sugar = this.getSugar()
          return {
              ...cup,
              hasSugar:sugar,
          }
      }
    }

    class CaffeLatteMachine extends CoffeeMachine{ 

      constructor(beans: number,public readonly seriaNumber:string,private milkFrother:CheapMilkSteamer){
        super(beans)
      }


      makeCoffee(shots:number):CoffeeCup{//상속에서 메이크 커피 함수를 가지고옴
        const coffee = super.makeCoffee(shots)
        
       return this.milkFrother.makeMilk(coffee)
      }

    }

    class SweetCoffeMaker extends CoffeeMachine{

        constructor(private beans:number,private sugar:AutomaticSugarMixer){
            super(beans)
        }
        
       makeCoffee(shots:number):CoffeeCup{
           const coffee = super.makeCoffee(shots)
          return this.sugar.addSugar(coffee)
       }
    }

class SweetCoffeeMaker extends CoffeeMachine{
    getSugar(){
        console.log('Getting some sugar')
    }

    makeCoffee(shots:number):CoffeeCup{
        const coffee = super.makeCoffee(shots)
        this.getSugar();
        return {
            ...coffee,
            hasSugar:true,
        }
    }

class SweetCaffeLatteMachine extends CoffeeMachine{
    constructor(
        private beans: number,
        private milk: CheapMilkSteamer,
        private sugar:AutomaticSugarMixer,
    ){
        super(beans)
    }
    makeCoffe(shots:number):CoffeeCup{
        const coffee = super.makeCoffee(shots);
        const sugarAdded = this.sugar.addSugar(coffee);
        return this.milk.makeMilk(sugarAdded)
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