import React, { FC,ChangeEvent,useState } from 'react'
import './App.css'
import {ITask} from './Interfaces'

const  Dashboard =()=>{

    const [task,setTask]=useState<string>("");
    const [deadline,setDeadline]=useState<number>(0);
    const [todoList,setTodoList]=useState<ITask[]>([]);

    
    const handleChange=(event:ChangeEvent<HTMLInputElement>):void=>{
            setTask(event.target.value)

    };

    const tasks=[];
    const addTaskk=()=>{
        tasks.push(task)
        console.log(task)
    }
    //const addTask=():void=>{
    //    const newTask={taskName:task,deadline:deadline};
    //    setTodoList([...todoList,newTask]);
    //    console.log(todoList);
    //};
    return (
        <div className='Dashboard'>
            <div className='containerTaskInput'>
                <input type="text" placeholder="Write something.." className='inputTask' name="task"  onChange={handleChange}></input>
                <button className='buttonAdd' onClick={addTaskk} > + </button>
            </div>
            <div className='containerTask'>
                <p className='taskLabel'>Complate the project</p>
                <button className='buttonDelete'> - </button>
            </div>
            <div className='containerTask'>
                <p className='taskLabel'>Complate the project</p>
                <button className='buttonDelete'> - </button>
            </div>
            <div className='containerTask'>
                <p className='taskLabel'>Complate the project</p>
                <button className='buttonDelete'> - </button>
            </div>
        </div>
    )
}

export default Dashboard;