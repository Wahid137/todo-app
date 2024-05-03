import { joiResolver } from "@hookform/resolvers/joi";
import Joi from 'joi';
import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Form, FormField, Modal } from 'semantic-ui-react';

const schema = Joi.object({
    title: Joi.string().min(2).max(8).required().label("Title"),
    description: Joi.string().min(2).max(5).required().label("Description"),
});

const EditTodoModal = ({ open, onClose, onSubmit, todo }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(schema),
        defaultValues: {
            title: todo ? todo.title : '', // Set default values only if todo is not null
            description: todo ? todo.description : ''
        }
    });

    return (
        <Modal open={open} onClose={onClose} size='tiny'>
            <Modal.Header>Edit Todo</Modal.Header>
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
        </Modal>
    );
};

export default EditTodoModal;
