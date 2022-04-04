const Task = (props) => {
    const { id, title, isCompleted, onDelete=()=>{}, onComplete=()=>{} } = props;

    const onTaskDeleteClick = () => {
        onDelete(id)
    }
    const onTaskToggleComplete = () => {
        onComplete(id)
    }
    return (
        <div className="task">
            <div className={`task__text ${isCompleted ? "task_completed" : "task_not-completed" }`} >{title}</div>
            <input className="task__state task__state_complete" type="checkbox" checked={isCompleted} onChange={onTaskToggleComplete}></input>
            <div className="task__state task__state_delete" onClick={onTaskDeleteClick}>x</div>
        </div>
    );
};

export default Task;
