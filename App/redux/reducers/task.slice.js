import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import TaskService from '../../services/task.service'
import Toast from 'react-native-toast-message';
import uuid from 'react-native-uuid';

// Thunks functions
export const fetchTasks = createAsyncThunk(
  'tasks/fetch',
  async (arg = null, thunkAPI) => {
    // const data = await TaskService.fetch()
    const data = await [
      { id: 1, title: "First task", date: "2020-01-23T05:00:00.000Z", description:"a descripdc fnjffff", tag: "A task tag", state: 'pending' },
      { id: 2, title: "Second task", state: 'done', description:"a descripdc fnjffff", }
    ]
    return data
  }
)

export const createTask = createAsyncThunk(
  'tasks/create',
  async ({ task }, thunkAPI) => {
    task.state = 'pending'
    task.id =  uuid.v4();
    // const data = await TaskService.create(task)
    return task
  }
)

export const updateTask = createAsyncThunk(
  'tasks/update',
  async ({ task }, thunkAPI) => {
    // const data = await TaskService.update(task)
    return task
  }
)

export const toggleStateTask = createAsyncThunk(
  'tasks/toggle',
  async ( taskId , thunkAPI) => {
    // const data = await TaskService.toggle(taskId)
    return taskId
  }
)

export const deleteTask = createAsyncThunk(
  'tasks/delete',
  async ( taskId , thunkAPI) => {
    // const data = await TaskService.delete(taskId)
    return taskId
  }
)

// Slice
const taskSLice = createSlice({
  name: 'tasks',
  initialState: {
    data: [],
    state: 'idle'
  },
  extraReducers: {
    [fetchTasks.pending]: (state, _) => {
      state.state = 'loading'
      return state
    },

    [fetchTasks.fulfilled]: (state, action) => {
      state.state = 'loaded'
      state.data = action.payload
      return state
    },

    [fetchTasks.rejected]: (state, _) => {
      state.state = 'error'
      Toast.show({
        text1: 'Get task',
        text2: 'Failed to get tasks',
        type: 'error'
      });
      return state
    },

    [createTask.pending]: (state, _) => {
      state.state = 'saving'
      return state
    },
    [createTask.fulfilled]: (state, action) => {
      state.state = 'created'
      state.data.push(action.payload)

      Toast.show({
        text1: 'New task',
        text2: 'Task successfully created'
      });

      return state
    },
    [createTask.rejected]: (state, _) => {
      state.state = 'error'
      Toast.show({
        text1: 'New tasks',
        text2: 'Failed to create task',
        type: 'error'
      });
      return state
    },

    [updateTask.pending]: (state, _) => {
      state.state = 'updating'
      return state
    },
    [updateTask.fulfilled]: (state, action) => {
      state.state = 'updated'

      const task = state.data.find(tk => tk.id === action.payload.id)
      task.title = action.payload.title
      task.date = action.payload.date
      task.description = action.payload.description
      task.tag = action.payload.tag

      Toast.show({
        text1: 'Update task',
        text2: 'Task successfully updated'
      });

      return state
    },
    [updateTask.rejected]: (state, _) => {
      state.state = 'error'
      Toast.show({
        text1: 'Update tasks',
        text2: 'Failed to update task',
        type: 'error'
      });
      return state
    },

    [deleteTask.pending]: (state, _) => {
      state.state = 'removing'
      return state
    },
    [deleteTask.fulfilled]: (state, action) => {
      state.state = 'removed'
      
      const index = state.data.findIndex(todo => todo.id === action.payload)
      if (index !== -1) state.data.splice(index, 1)

      Toast.show({
        text1: 'Delete task',
        text2: 'Task successfully deleted'
      });

      return state
    },
    [deleteTask.rejected]: (state, _) => {
      state.state = 'error'
      Toast.show({
        text1: 'Delete task',
        text2: 'Failed to delete task',
        type: 'error'
      });
      return state
    },

    [toggleStateTask.pending]: (state, _) => {
      state.state = 'updating'
      return state
    },
    [toggleStateTask.fulfilled]: (state, action) => {
      state.state = 'updated'

      const task = state.data.find(tk => tk.id === action.payload)
      if(task.state === 'pending'){
        task.state = 'done'
      }else{
        task.state  = 'pending'
      }

      Toast.show({
        text1: 'Update task',
        text2: `Task ${task.tag === 'done' ? 'completed' : 'peding'}`
      });

      return state
    },
    [toggleStateTask.rejected]: (state, _) => {
      state.state = 'error'
      Toast.show({
        text1: 'Update task',
        text2: 'Failed to update task',
        type: 'error'
      });
      return state
    },
  }
})

// Memorize selectors
const selectTaskByState = (filterBy) => createSelector(
  state => state.tasks.data,
  (tasks) => {
    if (filterBy !== "all") {
      return tasks.filter(task => task.state === filterBy)
    }
    return tasks
  })

export const selectTaskById = (filterBy) => createSelector(
  selectTaskByState(filterBy),
  (filterTasks) => filterTasks.map(task => task.id))

export const selectState = createSelector(
  state => state.tasks,
  tasks => tasks.state)

export const getTaskByIdSelector = (taskId) => createSelector(
  state => state.tasks.data,
  tasks => tasks.find(task => task.id === taskId)
) 

const { reducer } = taskSLice
export default reducer



