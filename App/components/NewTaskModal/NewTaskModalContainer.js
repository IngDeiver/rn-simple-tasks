import React from 'react';
import NewTaskModalView from './NewTaskModalView'

const NewTaskModalContainer = ({ theme, refRBSheet }) => {
    return (<NewTaskModalView theme={theme} refRBSheet={refRBSheet}/>)
}

export default React.memo(NewTaskModalContainer)