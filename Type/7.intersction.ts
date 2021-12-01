{
    /*
        Intersctions Types : &
    */

        type Student = {
            name : string;
            score:number;
        }

        type Worker = {
            empolyeeId : number;
            work : ()=> void
        }

        function internWork(person:Student & Worker){
            console.log(person.name,person.empolyeeId,person.work())
        }

        internWork({
            name:'lee',
            score:1,
            empolyeeId:123,
            work:()=>{},
        })
        //전부 확인해야함 모든걸 다가지고있어야함
}