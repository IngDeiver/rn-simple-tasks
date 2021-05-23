import React from 'react';
import MenuModalView from './MenuModalView'

const MenuModalContainer = ({ task, refRBSheet }) => {
    return (<MenuModalView task={task} refRBSheet={refRBSheet}/>)
}

export default React.memo(MenuModalContainer)