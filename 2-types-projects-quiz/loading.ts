{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(a:ResourceLoadState){
 
    if(a.state ==='loading'){
     console.log(`👀 loading...`)
    }
    else if(a.state === 'success'){
      console.log(`😃 ${a.response.body}`)
    }else if(a.state === 'fail'){
      console.log(`😱 ${a.reason}`)
    }
  
  }




  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
  

  
}
