import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import styles from './AddTodo.module.css'
import {connect} from "react-redux";
import {addTodoAC} from "../../redux/todoReducer";

const AddTodo = ({addTodo}) => {
    const initialValues = {text: ''};
    const validate = values => {
        const errors = {};

        if (!values.text.trim()) {
            errors.text = 'Required';
        }

        return errors;
    };
    const onSubmit = (values, {setSubmitting}) => {
        addTodo(values.text);
        values.text = '';
        setSubmitting(false);
    };

    return (
        <div>
            <h1 className={styles.title}>Add Todo</h1>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="text"/>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    <ErrorMessage name="text" component="div"/>
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