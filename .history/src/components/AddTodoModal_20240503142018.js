import React from 'react';
import { Button, Form, FormField, Modal } from 'semantic-ui-react';





const AddTodoModal = ({ open, onClose, onSubmit, handleSubmit, register, errors }) => {


    return (
        <Modal open={open} onClose={onClose} size='tiny'>
            <Modal.Header>Add New Todo</Modal.Header>
            <Modal.Content>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <FormField>
                        <label htmlFor="title">Title</label>
                        <input {...register("title")} type="text" />
                        {errors.title && (
                            <div className="ui pointing red basic label">
                                {errors.title.message}
                            </div>
                        )}
                    </FormField>

                    <FormField>
                        <label htmlFor="description">Description</label>
                        <textarea {...register("description")} />
                        {errors.description && (
                            <div className="ui pointing red basic label">
                                {errors.description.message}
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
