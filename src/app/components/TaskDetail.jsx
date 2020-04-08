import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as mutations from '../store/Mutations';

const TaskDetail = ({ 
  id, 
  task, 
  isComplete, 
  groups, 
  setTaskName, 
  setTaskComplete, 
  setTaskGroup,
  comments
}) => (
  <div>
  <div>
    <input onChange={setTaskName} value={task.name} />
    <div>
      <button onClick={()=> setTaskComplete(id, !isComplete)}>{isComplete ? "Reopen Task" : "Complete Task"}</button>
    </div>
    <div>
      <select onChange={setTaskGroup} value={task.group}>
        {groups.map((group) => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
        ))}
      </select>
    </div>
    <div>
      <Link to="/dashboard">
        <button>Done</button>
      </Link>
    </div>
  </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  let task = state.tasks.find((task) => task.id === id);
  let groups = state.groups;

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete,
  };
};

function mapDispatchToProps(dispatch, ownProps){
  let id = ownProps.match.params.id;
  return {
      setTaskComplete(id,isComplete){
          dispatch(setTaskComplete(id,isComplete));
      },
      setTaskGroup(e){
          dispatch(setTaskGroup(id,e.target.value));
      },
      setTaskName(e){
          dispatch(setTaskName(id,e.target.value));
      },
  }
}

export const ConnectTaskDetail = connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
