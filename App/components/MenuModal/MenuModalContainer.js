import React from 'react';
import MenuModalView from './MenuModalView'

const MenuModalContainer = ({ taskId, refRBSheet }) => {
    return (<MenuModalView taskId={taskId} refRBSheet={refRBSheet}/>)
}

export default React.memo(MenuModalContainer)