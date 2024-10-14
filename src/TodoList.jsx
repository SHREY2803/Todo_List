import React, { useState } from 'react';


function ToDoList(){
    const [tasks,setTasks] = useState([]);
    const [newtasks,setNewTasks] = useState([]);

    function handleInputChange(e) {
        setNewTasks(e.target.value);
        
    }
    function addTask(){
        if(newtasks.trim()!== ""){
            setTasks(t=>[...t,newtasks]);
            setNewTasks("");
        }
    }
    function deleteTask(index){
        const delTask = tasks.filter((_,i) => i!== index)
        setTasks(delTask    )

    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]]
            setTasks(updatedTask)
        }
        
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]]
            setTasks(updatedTask)
        }
    }

    return(
        <div>
            <div className="todo-list">
                <h1>To-Do-List</h1>

                <div className='sample'>
                    <input type="text" 
                    placeholder='Enter a task...' 
                    value={newtasks} 
                    onChange={handleInputChange}/>

                    <button className='add-button' onClick={addTask}>
                        Add
                    </button>
                </div>
                <ol>
                    {tasks.map((task,index)=>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button'
                                            onClick={()=>deleteTask(index)}> Delete
                        </button>
                        <button className='move-button'
                                            onClick={()=>moveTaskUp(index)}> 👆
                        </button>
                        <button className='move-button'
                                            onClick={()=>moveTaskDown(index)}> 👇
                        </button>

                    </li>
                    )}
                </ol>
            </div>
        </div>
    )
}
export default ToDoList;