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
                    <FormField>
                        <label>Last Name</label>
                        <input
                            placeholder="Last Name"
                            {...register("middleName")}

                        />
                        {errors.middleName && (
                            <div className="ui pointing red basic label">
                                {errors.middleName.message}
                            </div>
                        )}
                    </FormField>
                    {/* <Form.TextArea
                        label='Description'
                        name='description'
                        value={newTodo.description}
                        onChange={onInputChange}
                        {...register('description')}
                    /> */}
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
