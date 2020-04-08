export const REQUEST_TASK_CREATION = "REQUEST_TASK_CREATION";
export const CREATE_TASK = "CREATE_TASK";
export const SET_TASK_COMPLETE = "SET_TASK_COMPLETE";
export const SET_TASK_NAME = "SET_TASK_NAME";
export const SET_TASK_GROUP = "SET_TASK_GROUP";

export const requestTaskCreation = (groupId) => ({
  type: REQUEST_TASK_CREATION, groupId
});

export const setTaskComplete = (id, isComplete = true)=>({
    type: SET_TASK_COMPLETE,
    taskId: id,
    isComplete
});

export const createTask = (taskId, groupId, ownerId)=>({
    type:CREATE_TASK,
    taskId,
    groupId,
    ownerId
});

export const setTaskGroup = (taskId, groupId)=>({
    type:SET_TASK_GROUP,
    taskId,
    groupId
});

export const setTaskName = (taskId, name)=>({
    type:SET_TASK_NAME,
    taskId,
    name
});
