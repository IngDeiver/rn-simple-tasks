import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './reducers/task.slice'

const store = configureStore({
  reducer: {
    tasks: taskReducer
  },
})

export default store