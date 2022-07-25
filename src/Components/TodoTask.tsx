import React from 'react';
import { ITask } from '../Interfaces';
import '../Styles/App.css'

interface Props {
    task: ITask;
    deleteTask(taskNameToDelete: string): void;
}

const completeTask = (event:any) => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
    } else {
      event.target.style.setProperty('text-decoration', 'line-through');
    }
  };

const TodoTask = ({ task, deleteTask }: Props) => {
    return (
        <div className='containerTaskItem'>
            <div className='containerLeft' onClick={
                    completeTask                
                }>
                <br />Görev: {task.taskName}<br /> Deadline: {task.deadline}
            </div>
            <div className='containerRight'>
                <hr />         
                <button className='buttonDelete' onClick={() => {
                    deleteTask(task.taskName);
                }
                }> X </button>
            </div>
        </div>
    )
}

export default TodoTask;