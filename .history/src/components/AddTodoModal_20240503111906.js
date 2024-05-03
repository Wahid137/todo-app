import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Modal } from 'semantic-ui-react';

const AddTodoModal = ({ open, onClose, onSubmit, newTodo, onInputChange }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Modal open={open} onClose={onClose} size='tiny'>
            <Modal.Header>Add New Todo</Modal.Header>
            <Modal.Content>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Input
                        label='Title'
                        name='title'
                        value={newTodo.title}
                        onChange={onInputChange}
                        {...register('title', { required: 'Title is required' })} // Register input with React Hook Form
                    />
                    {errors.title && <span style={{ color: 'red' }}>{errors.title.message}</span>} {/* Display validation error message */}
                    <Form.TextArea
                        label='Description'
                        name='description'
                        value={newTodo.description}
                        onChange={onInputChange}
                        {...register('description')} // Register input with React Hook Form
                    />
                    <Button color='green' type='submit'>Submit</Button>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={onClose}>Cancel</Button>

            </Modal.Actions>
        </Modal>
    );
};

export default AddTodoModal;
