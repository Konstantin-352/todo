import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import s from './AddTodo.module.css'
import {connect} from "react-redux";
import {addTodoAC} from "../../redux/todoReducer";

const AddTodo = ({addTodo}) => {
    return (
        <div>
            <h1 className={s.title}>Add Todo</h1>
            <Formik
                initialValues={{text: ''}}
                validate={values => {
                    const errors = {};

                    if (!values.text.trim()) {
                        errors.text = 'Required';
                    }

                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    addTodo({id: Date.now(), title: values.text, completed: false});
                    values.text = '';
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                <Form>
                    <Field type='text' name='text'/>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    <ErrorMessage name='text' component='div'/>
                </Form>
                    )}
            </Formik>
        </div>
    );
};

const mapDispatchToProps = dispatch =>({
    addTodo: payload => dispatch(addTodoAC(payload)),
});

export default connect(null, mapDispatchToProps)(AddTodo);