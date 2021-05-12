import React, { useCallback } from 'react';
import Tasks from './TasksView';

const TasksContainer = ({ navigation }) => {

    const showDetail = useCallback(
        (taskId) => {
            navigation.navigate("Details", { taskId })
        }
    )

    const data = [{ id: 1, title: "First tasks", date: "01/23/2020", tag: "A task tag" }]

    return (<Tasks showDetail={showDetail} data={data}/>)
}

export default TasksContainer