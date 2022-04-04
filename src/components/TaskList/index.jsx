import Task from 'components/Task'

const TaskList = (props) => {
    const {tasks = [], onDelete=()=>{}, onComplete=()=>{}} = props


    return (<div className='task-list'>
        {tasks.map(task => <Task key={task.id} {...task} onDelete={onDelete} onComplete={onComplete}></Task>)}
    </div>)
}

export default TaskList