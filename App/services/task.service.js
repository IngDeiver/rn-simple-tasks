import AsyncStorage from '@react-native-async-storage/async-storage';
const TASK_DATA_KEY = 'simple-tasks-data'

export const fetch  = async () => {
    const jsonValue = await AsyncStorage.getItem(TASK_DATA_KEY)
    return jsonValue != null ? JSON.parse(jsonValue) : [];
}

export const create  = async (task) => {
    const data = await fetch()
    data.push(task)
    return AsyncStorage.setItem(TASK_DATA_KEY, JSON.stringify(data))
}

export const remove  = async (taskId) => {
    const data = await fetch()
    const newData = data.filter(task => task.id !== taskId)
    return AsyncStorage.setItem(TASK_DATA_KEY, JSON.stringify(newData))
}

export const update  = async (taskUpdated) => {
    const data = await fetch()
    const task = data.find(tk => tk.id === taskUpdated.id)
    task.title = taskUpdated.title
    task.date = taskUpdated.date
    task.description = taskUpdated.description
    task.tag = taskUpdated.tag
    return AsyncStorage.setItem(TASK_DATA_KEY, JSON.stringify(data))
}


export const toggle  = async (taskId) => {
    const data = await fetch()
    const task = data.find(tk => tk.id === taskId)
    task.state = task.state === 'pending' ? 'done' : 'pending'
    return AsyncStorage.setItem(TASK_DATA_KEY, JSON.stringify(data))
}