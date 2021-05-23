import React from 'react';
import TaskFormView from './TaskFormView'

const TaskFormContainer = ({ updating = false, task}) => {
   return ( <TaskFormView updating={updating} task={task}/>)
}

export  default React.memo(TaskFormContainer)