import React from 'react';
import { ITask } from '../Interfaces';
import '../Styles/App.css'

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div className='containerTaskItem'>
            <div className='containerLeft'>
                <br />Görev: {task.taskName}<br /> Deadline: {task.deadline}
            </div>
            <div className='containerRight'>
                <hr />
                <button className='buttonDelete' onClick={() => {
                    completeTask(task.taskName);
                }
                }> - </button>
            </div>
        </div>
    )
}

export default TodoTask;