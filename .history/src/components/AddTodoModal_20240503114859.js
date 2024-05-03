import Joi from 'joi';
import React from 'react';
import { Button, Form, FormField, Modal } from 'semantic-ui-react';



const schema = Joi.object({
    name: Joi.string().min(2).max(20).required().label("Title"),
    description: Joi.string().min(2).max(20).required().label("Description"),

});

const AddTodoModal = ({ open, onClose }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: joiResolver(schema) });
    //submit handler
    const onSubmit = (data) => {
        console.log("click")
        console.log(data);
        reset();
        alert("Registration Successfully done!")
    };


    return (
        <Modal open={open} onClose={onClose} size='tiny'>
            <Modal.Header>Add New Todo</Modal.Header>
            <Modal.Content>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormField>
                        <label>Name</label>
                        <input
                            placeholder="title"
                            {...register("name")}

                        />
                        {errors.name && (
                            <div className="ui pointing red basic label">
                                {errors.name.message}
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
