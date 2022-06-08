/**
 * 함수의 기능은 똑같은데, 매개변수의 타입과 반환하는 타입이 다르다는 이유로 여러개의 함수를 구현할때
 * 이러한 방식은 제네릭 기법을 사용하여 한 개의 함수로 구현할 수 있습니다.
 */



// function identity<T>(arg: T): T {
//     return arg;
//   }

function NumberReturnFunc(arg: number): number {
  return arg;
}

// string 타입의 매개변수를 return하는 함수
function StringReturnFunc(arg: string): string {
  return arg;
}

// boolean 타입의 매개변수를 return하는 함수
function BooleanReturnFunc(arg: boolean): boolean {
  return arg;
}

function GenericReturnFunc<T>(arg: T): T {
  return arg;
}



console.log(GenericReturnFunc<number>(1))


  console.log(identity('124'))

  console.log(identity<string>('124'))
  
  //꺽쇠에 타입을 명시하지 않아도 된다 하지만 유추하지 못하는 경우 타입을 정해주면된다.


  function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
  
    return arg;
  }

  console.log(loggingIdentity<number>([1,2,3]))


  function identity<Type>(arg: Type): Type {
    return arg;
  }


  let myIdentity: <Type>(arg: Type) => Type = identity;

  console.log(myIdentity(3))
  
  //myIdentity 에 합수를 타입으로 넣어놨다


  function InputType<Type>(arg: Type): Type {
    return arg;
  }
   
  let myInputType: <Input>(arg: Input) => Input = InputType;


  console.log(myInputType<Input>(5))