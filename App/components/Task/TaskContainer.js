import React from 'react'
import TaskView from './TaskView'

const TaskContainer = ({ task, handleMenuOpen, showDetail }) => {
    return (
        <TaskView 
        task={task}
        handleMenuOpen={handleMenuOpen}
        showDetail={showDetail}/>
    )
}

export default React.memo(TaskContainer)