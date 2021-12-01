/*
Union Types :Or
 */
{
    type Derection = 'left' | 'right' | 'up' | 'down';

    function move(derection :Derection){
        
        console.log(derection)
    }
    move('up')
    //모든 케이스중에 하나를 담을때

    type TileSize = 8|16|32;
    const tile : TileSize = 16

    //유니온타입은 매우 많이 쓰인다

    //function : Login ->success, fail
    /*
    로그인이 성공 아니면 실패할때 네트워크 리소스를 리턴하거나, 실패시에는 실패를 리턴하는 함수
*/

    // type Success = {
    //     response:{
    //         body:string;
    //     }
    // }

    // type Fail ={
    //     reason:string;
    // }

    // type LoginState = Success | Fail

    // function network(id:string , password:string):LoginState{
    //     return {
    //         response:{
    //             body:'logged in!'
    //         }
    //     }
    // }

    type Success ={
        response:{
            body:'smaile'
        }
    }
    type Fail ={
        reason:string;
    }

    type LoginState = Success | Fail

   
    function printLogin(state:LoginState){
        
        if('response' in state){
            console.log(state.response.body)
        }else{
            console.log(state.reason)
        }

    }
 //현재 방법은 좋지 않다

 


}