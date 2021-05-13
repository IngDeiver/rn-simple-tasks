import React, { useEffect } from 'react';
import { useFormik } from 'formik';

const useForm = (props) => {

    const { initialValues, validationSchema } = props
     useEffect(() => {
     }, [props]);

     const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {
          console.log("FORMIK: ", values);
        },
    });

    return formik
 }

 export default useForm