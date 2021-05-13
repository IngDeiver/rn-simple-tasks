import React from 'react'
import TaskView from './TaskView'

const TaskContainer = ({ task, handleMenuOpen }) => {
    return (
        <TaskView 
        task={task}
        handleMenuOpen={handleMenuOpen}
        />
    )
}

export default React.memo(TaskContainer)