import React from 'react';
import { TaskForm } from '../../components'

const DetailView = ({ taskId }) => {
    return (
      <TaskForm/>
    )
}

export default React.memo(DetailView)