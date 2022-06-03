// function identity<T>(arg: T): T {
//     return arg;
//   }


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