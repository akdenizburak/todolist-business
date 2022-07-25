import React, { FC, ChangeEvent, useState } from 'react'
import '../Styles/App.css'
import { ITask } from '../Interfaces'
import TodoTask from '../Components/TodoTask';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(1);
    const [todoList, setTodoList] = useState<ITask[]>([]);


    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value)
        }
        else {
            setDeadline(Number(event.target.value))
        }
    };

    const addTask = (): void => {
        const newTask = { taskName: task, deadline: deadline };
        if(deadline>0){
            setTodoList([...todoList, newTask]);
            setTask("");
        }
        else{
            alert("Geçersiz Deadline!")
        }
    };

    const enterKey = (e: any) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addTask();
        }
    }

    const deleteTask = (taskNameToDelete: string): void => {
        setTodoList(todoList.filter((task) => {
            return task.taskName != taskNameToDelete
        }))
    };
    const navigate=useNavigate();

    return (
        <div className='Dashboard'>
            <Button variant="contained" size="large" color="error" onClick={()=>{navigate("/login")}}>Log Out</Button>
            <div className='containerTaskInput'>
                <input type="text" placeholder="Write something.." className='inputTask' name="task" value={task} onChange={handleChange} onKeyPress={enterKey}></input>
                <input type="number"  placeholder="Deadline in Days.." className='inputDeadline' name="deadline" value={deadline} onChange={handleChange} ></input>
                <button className='buttonAdd' onClick={addTask} > + </button>
            </div>
            <div className='containerTask'>
                <p className='taskLabel'>{
                    todoList.map((task: ITask, key: number) => {
                        return <TodoTask key={key} task={task} deleteTask={deleteTask} />
                    })
                }</p>
            </div>
        </div>
    )
}

export default Dashboard;