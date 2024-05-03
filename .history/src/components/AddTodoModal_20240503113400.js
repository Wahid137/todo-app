import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal } from 'semantic-ui-react';

const AddTodoModal = ({ open, onClose, onSubmit, newTodo, onInputChange }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onSubmit", revalidateMode: "onChange" });

    return (
        <Modal open={open} onClose={onClose} size='tiny'>
            <Modal.Header>Add New Todo</Modal.Header>
            <Modal.Content>

            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={onClose}>Cancel</Button>

            </Modal.Actions>
        </Modal >
    );
};

export default AddTodoModal;
