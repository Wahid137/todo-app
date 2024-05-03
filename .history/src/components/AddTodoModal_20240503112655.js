import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormField, Modal } from 'semantic-ui-react';

const AddTodoModal = ({ open, onClose, onSubmit, newTodo, onInputChange }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Modal open={open} onClose={onClose} size='tiny'>
            <Modal.Header>Add New Todo</Modal.Header>
            <Modal.Content>
                <Form style={{ width: "70%" }} onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-field">
                        <FormField>
                            <label>First Name</label>
                            <FormInput
                                placeholder="First Name"
                                {...register("firstName")}
                                error={errors.firstName && { content: errors.firstName.message, pointing: 'below' }}
                            />
                        </FormField>
                    </div>


                    <Button type="submit" color="blue">
                        Submit
                    </Button>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={onClose}>Cancel</Button>
            </Modal.Actions>
        </Modal>
    );
};

export default AddTodoModal;
