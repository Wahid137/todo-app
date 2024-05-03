import { joiResolver } from "@hookform/resolvers/joi";
import Joi from 'joi';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, FormField, Modal } from 'semantic-ui-react';



const schema = Joi.object({
    title: Joi.string().min(2).max(20).required().label("Title"),
    description: Joi.string().min(2).max(20).required().label("Description"),

});

const AddTodoModal = ({ open, onClose, newTodo, onInputChange }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: joiResolver(schema), mode: "onSubmit", revalidateMode: "onChange" });
    //submit handler
    const onSubmit = (data) => {
        console.log(data);
        reset();
        alert("Registration Successfully done!")
    };


    return (
        <Modal open={open} onClose={onClose} size='tiny'>
            <Modal.Header>Add New Todo</Modal.Header>
            <Modal.Content>
                <Form style={{ width: "70%" }} onSubmit={handleSubmit(onSubmit)}>

                    <FormField>
                        <label>Last Name</label>
                        <input
                            placeholder="Title"
                            {...register("title")}

                        />
                        {errors.title && (
                            <div className="ui pointing red basic label">
                                {errors.title.message}
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
