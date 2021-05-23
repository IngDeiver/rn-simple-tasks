import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { createTask, updateTask } from '../redux/reducers/task.slice'
import { useDispatch } from 'react-redux'

const useForm = (props) => {

    const dispatch = useDispatch()
    const { initialValues, validationSchema } = props
     useEffect(() => {
     }, [props]);

     const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: task => {
          const auxTask = {...task}
          auxTask.date = auxTask.date.toString()
          if(task.id) dispatch(updateTask({ task:  auxTask }))
          else dispatch(createTask({ task:  auxTask }))
        },
    });

    return formik
 }

 export default useForm