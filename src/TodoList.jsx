import React, { useState } from 'react';


function ToDoList(){
    const [tasks,setTasks] = useState(["Eat breakfast","Take a shower", "Walk the Dog"]);
    const [newtasks,setNewTasks] = useState([]);

    function handleInputChange(e) {
        setNewTasks(e.target.value);
    }
    function addTask(){

    }
    function deleteTask(index){

    }
    function moveTaskUp(index){
        
    }
    function moveTaskDown(index){

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