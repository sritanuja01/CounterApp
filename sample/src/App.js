import './App.css'
import React,{useState} from 'react'
function App()
{
    //let count=0
    let [count,setCounter]=useState(0)
    return(
        <div className='Wrapper'>
            <h1>Counter App</h1>
            <div className='control'>
            <button className="plus" disabled={count>=10}
            onClick={()=>
            {
                if(count<=10)
                    {
                        setCounter(count+1)
                       
                    }
                    else
                    {
                        alert("count is 10 recahed max limit")
                    }
            }
            }>+</button>
            <p>{count}</p>
            <button className="minus"  disabled={count<=0} onClick={()=>
                {
                    if(count>0)
                    {
                        setCounter(count-1)
                        console.log(count-1)
                    }
                    else
                    {
                        alert("reached min limit")
                    }
                }
            }>-</button>
            <button className="reset" onClick={()=>
                {
                    setCounter(0)
                    alert("reset done")
                }
            }>Reset</button>
            </div>
        </div>
    )

}

export default App