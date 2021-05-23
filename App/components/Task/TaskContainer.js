import React from 'react'
import TaskView from './TaskView'

const TaskContainer = ({ taskId, handleMenuOpen }) => {
    return (
        <TaskView 
        taskId={taskId}
        handleMenuOpen={handleMenuOpen}
        />
    )
}

export default React.memo(TaskContainer)