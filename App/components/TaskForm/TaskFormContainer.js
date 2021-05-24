import React from 'react';
import TaskFormView from './TaskFormView'

const TaskFormContainer = ({ updating = false, task, theme}) => {
   return ( <TaskFormView updating={updating} task={task} theme={theme}/>)
}

export  default React.memo(TaskFormContainer)