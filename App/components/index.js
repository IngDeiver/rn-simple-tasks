/*All the components should be registered and exported from /index.js 
for a single access point.*/
import Menu from './Menu'
import NewTaskModal from './NewTaskModal'
import Task from './Task/TaskContainer'
import CloseSwipeModalArea from './closeSwipeModalArea'

export {
    Menu,
    NewTaskModal,
    Task,
    CloseSwipeModalArea
}