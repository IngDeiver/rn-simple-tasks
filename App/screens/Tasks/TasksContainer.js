import React from 'react';
import Tasks from './TasksView';

const TasksContainer = ( ) => {

    const data = [{ id: 1, title: "First task", date: "01/23/2020", tag: "A task tag" },
    { id: 2, title: "Second task" }]

    return (<Tasks data={data}/>)
}

export default TasksContainer