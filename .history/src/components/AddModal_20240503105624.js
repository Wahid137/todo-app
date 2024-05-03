import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';

const AddTodoModal = ({ open, onClose, onSubmit, newTodo, onInputChange }) => {
    return (
        <Modal open={open} onClose={onClose} size='tiny'>
            <Modal.Header>Add New Todo</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Input
                        label='Title'
                        name='title'
                        value={newTodo.title}
                        onChange={onInputChange}
                    />
                    <Form.TextArea
                        label='Description'
                        name='description'
                        value={newTodo.description}
                        onChange={onInputChange}
                    />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={onClose}>Cancel</Button>
                <Button color='green' onClick={onSubmit}>Submit</Button>
            </Modal.Actions>
        </Modal>
    );
};

export default AddTodoModal;
