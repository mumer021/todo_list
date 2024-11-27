"use client";
import { useState } from "react";

export default function Home() {
  const [list,updatelist]=useState<string[]>([]);
  const [task,updatetask]=useState('');

  const addTask=()=>{
    // if (list.length===0) {return}
    updatelist((prevlist:string[])=>[...prevlist,task])
    updatetask('')
  }


  const delTask=(index_rem:number)=>{
    // for (let i=index;i<list.length;i++){
    //   list[i]=list[i+1]
    //   updatelist(list)
    //   }
    updatelist((prevlist)=>prevlist.filter((_,index)=>index!==index_rem))
    }
  
    
    
  
  
  
  return (
    <div className="font-serif min-h-screen max-w-[700px] m-auto p-[10px] bg-amber-200 border-[6px] border-solid border-black">
      <h1 className="text-6xl text-center">To-Do-List</h1>
      <div className="flex mt-[40px] ">
        <input
          className="flex-grow border-solid border-2 border-indigo-900"
          type="text"
          placeholder="Type a task"
          name="task"
          onChange={(e)=>updatetask(e.target.value)}
        />
        <button 
        className="bg-red-600 text-stone-50 ml-[10px] p-[5px] border-[4px] border-solid border-white hover:text-2xl hover:bg-orange-500"
        onClick={addTask}>Add task
        </button>
      </div>
      
      {
      list.length>0 && (
      
      <ul>
       {
        //  {names.map((name, index) => (
        //   <li key={index} style={{ marginBottom: "10px" }}>
        //     {name}
        //   </li>
        // ))}
         
       list.map((name:string,index:number) => (
              
                <li 
                  className="mt-[40px] ml-[20px] list-disc"
                   key={index}>
                  <div className="flex items-center">
                    <div className="italic">
                      {name} 
                    </div>
                    <button 
                      className=" bg-green-600 text-stone-50 ml-[10px] p-[5px] border-[4px] border-solid border-white hover:text-2xl hover:bg-blue-500"
                      onClick={()=>{delTask(index)}}>Delete task
                    </button>
                  </div>
                  
                </li>
          ))
          
       }
        
        
        
      
      </ul>
      )
    }
    </div>
  )
}
