import { joiResolver } from "@hookform/resolvers/joi";
import Joi from 'joi';
import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Form, FormField, Modal } from 'semantic-ui-react';


const schema = Joi.object({
    email: Joi.string().min(5).max(200).required().label("Email"),
    password: Joi.string().min(8).max(1000).required().label("Password"),
    title: Joi.string().min(2).max(20).required().label("Title"),

});


const AddTodoModal = ({ open, onClose }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: joiResolver(schema) });




    return (
        <Modal open={open} onClose={onClose} size='tiny'>
            <Modal.Header>Add New Todo</Modal.Header>
            <Modal.Content>
                <Form onSubmit={handleSubmit((data) => console.log(data))}>
                    <FormField>
                        <label htmlFor="password">Password</label>
                        <input {...register("password")} type="password" />
                    </FormField>
                    {errors.password && (
                        <p className="text-danger"> {errors.password.message} </p>
                    )}

                    <FormField>
                        <label htmlFor="email">Email</label>
                        <input {...register("email")} type="email" />
                    </FormField>
                    {errors.email && (
                        <p className="text-danger"> {errors.email.message} </p>
                    )}

                    {/* <FormField>
                        <label htmlFor="title">Title</label>
                        <input {...register("title")} type="text" />
                        {errors.title && (
                            <div className="ui pointing red basic label">
                                {errors.title.message}
                            </div>
                        )}
                    </FormField> */}


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
