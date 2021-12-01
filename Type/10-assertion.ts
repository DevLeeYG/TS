{
    /**
     * Type Assertions === 똥
     */

    //불가피할때 써야할때

    function jsTrFunc():any{
        return 'hello'
    }

    const result = jsTrFunc();
    //ts 현재 문자열타입이 아니라서 문자 api를 사용할수 없다
    //그래서 문자열타입이라는걸 확실하게 안다면 어썰션을 쓸수있다
    (result as string)

    console.log(result.length) === console.log((<string>result).length)

    const wrong : any =5;
    console.log((wrong as Array<number>).push(1)); // 안됨
    
    // ! == 절대적으로 확신할때

    
}