import { joiResolver } from "@hookform/resolvers/joi";
import Joi from 'joi';
import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Form, Modal } from 'semantic-ui-react';


const schema = Joi.object({
    email: Joi.string().min(5).max(200).required().label("Email"),
    password: Joi.string().min(8).max(1000).required().label("Password"),
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
                    <div>
                        <label htmlFor="password">Password</label>
                        <input {...register("password")} type="password" />
                    </div>
                    {errors.password && (
                        <p className="text-danger"> {errors.password.message} </p>
                    )}

                    <div>
                        <label htmlFor="email">Email</label>
                        <input {...register("email")} type="email" />
                    </div>
                    {errors.email && (
                        <p className="text-danger"> {errors.email.message} </p>
                    )}

                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={onClose}>Cancel</Button>
                <Button type="submit" color="blue">
                    Submit
                </Button>
            </Modal.Actions>
        </Modal >
    );
};

export default AddTodoModal;
