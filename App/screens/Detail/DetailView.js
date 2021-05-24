import React from 'react';
import { TaskForm } from '../../components'
import { useSelector } from 'react-redux'
import { getTaskByIdSelector } from '../../redux/reducers/task.slice'
import { useTheme } from 'react-native-paper';

const DetailView = ({ taskId }) => {

  const task = useSelector(getTaskByIdSelector(taskId))
  const theme = useTheme()
    return (
      <TaskForm updating task={task} theme={theme}/>
    )
}

export default React.memo(DetailView)