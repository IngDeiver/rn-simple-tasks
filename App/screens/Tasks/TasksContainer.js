import React from 'react';
import Tasks from './TasksView';
import { useSelector, useDispatch } from 'react-redux'
import { fetchTasks, selectTaskById} from '../../redux/reducers/task.slice'

const TasksContainer = ({ route }) => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchTasks())
    },[dispatch]);

    const taskIds = useSelector(selectTaskById(route.params.filterBy))

    return (<Tasks data={taskIds}/>)
}

export default TasksContainer