import React from 'react';
import Detail from './DetailView';

const DetailContainer = ({ route }) => {
    return (<Detail taskId={route.params.taskId}/>)
}

export default DetailContainer