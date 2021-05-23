import React from 'react';
import { TaskForm } from '../../components'
import { useSelector } from 'react-redux'
import { getTaskByIdSelector } from '../../redux/reducers/task.slice'

const DetailView = ({ taskId }) => {

  const task = useSelector(getTaskByIdSelector(taskId))

    return (
      <TaskForm updating task={task}/>
    )
}

export default React.memo(DetailView)