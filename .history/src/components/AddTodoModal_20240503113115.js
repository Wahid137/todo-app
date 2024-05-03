import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormField, Modal } from 'semantic-ui-react';

const AddTodoModal = ({ open, onClose, onSubmit, newTodo, onInputChange }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onSubmit", revalidateMode: "onChange" });

    return (
        <Modal open={open} onClose={onClose} size='tiny'>
            <Modal.Header>Add New Todo</Modal.Header>
            <Modal.Content>
                <Form style={{ width: "70%" }} onSubmit={handleSubmit(onSubmit)}>
                    <FormField>
                        <label>Last Name</label>
                        <input
                            placeholder="Last Name"
                            {...register("title")}

                        />
                        {errors.middleName && (
                            <div className="ui pointing red basic label">
                                {errors.middleName.message}
                            </div>
                        )}
                    </FormField>
                    <Button type="submit" color="blue">
                        Submit
                    </Button>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={onClose}>Cancel</Button>

            </Modal.Actions>
        </Modal >
    );
};

export default AddTodoModal;
