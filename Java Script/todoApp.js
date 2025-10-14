let todo = [] ;

let req = prompt("please enter your request") ; 

while(true) 
{
    if(req == "quit")
    {
        console.log("user quited") ; 
        break ; 
    }

    if ( req == "add")
    {
        let task = prompt("enter the task that you waana add") ; 
        todo.push(task) ; 
        console.log("task is added" ) ; 
    }

    else if (req == "delete")
    {
        let idx = prompt("enter the task idx that you waana delete");
        todo.splice(idx,1) ; 
        console.log("the task delete") ; 

    }

    else if ( req == "list")
    {
        console.log("____________________") ; 
        for(let i = 0 ; i < todo.length ; i++) 
        {
            console.log(i ,". ", todo[i]) ; 
        }
        console.log("____________________") ; 

    }

    else 
    {
        console.log("wrong request please enter the right request");
    }
    
    req = prompt("please enter your request") ; 

}