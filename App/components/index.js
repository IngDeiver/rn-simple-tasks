/*All the components should be registered and exported from /index.js 
for a single access point.*/
import Menu from './MenuModal/MenuModalContainer'
import NewTaskModal from './NewTaskModal/NewTaskModalContainer'
import Task from './Task/TaskContainer'

export {
    Menu,
    NewTaskModal,
    Task
}