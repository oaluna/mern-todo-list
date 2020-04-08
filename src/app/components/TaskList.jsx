import React from 'react'
import { connect } from 'react-redux'
import { requestTaskCreation } from '../store/Mutations'
import { Link } from 'react-router-dom'

export const TaskList = ({ tasks, name, id, createNewTask })=>(
    <div>
        <h3>
        {name}
        </h3>
        <div>
            {tasks.map(task=>(
                <Link to={`/task/${task.id}`} key={task.id}>
                <div>
                     {task.name}
                </div>
                </Link>
                ))}
            <button onClick={()=>createNewTask(id)}>
                Add New
            </button>
        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => {
    let groupId = ownProps.id
    return {
        name:ownProps.name,
        id: groupId,
        tasks: state.tasks.filter(task=>task.group === groupId)
    }
}

const mapDispatchToProps = (dispatch, {id})=>({
    createNewTask(){
        dispatch(requestTaskCreation(id));
    }
});

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);