import { joiResolver } from "@hookform/resolvers/joi";
import Joi from 'joi';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal } from 'semantic-ui-react';



const schema = Joi.object({
    title: Joi.string().min(2).max(20).required().label("Title"),
    description: Joi.string().min(2).max(20).required().label("Description"),

});

const AddTodoModal = ({ open, onClose, onSubmit, newTodo, onInputChange }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: joiResolver(schema), mode: "onSubmit", revalidateMode: "onChange" });


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
                    <div className="form-field">
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
                    </div>

                    <div className="form-field">
                        <FormField>
                            <label>Birth Date</label>
                            <input
                                type="date"
                                name="birthDate"
                                {...register("birthDate")}

                            />
                            {errors.birthDate && (
                                <div className="ui pointing red basic label">
                                    {errors.birthDate.message}
                                </div>
                            )}
                        </FormField>
                    </div>

                    <div className="form-field">
                        <FormField>
                            <label>Gender</label>
                            <div className="gender-field">
                                <div className="gender-option">
                                    <input type="radio" id="male" {...register("gender")} value="male" />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div className="gender-option">
                                    <input type="radio" id="female" {...register("gender")} value="female" />
                                    <label htmlFor="female">Female</label>
                                </div>
                                <div className="gender-option">
                                    <input type="radio" id="other" {...register("gender")} value="other" />
                                    <label htmlFor="other">Other</label>
                                </div>
                            </div>
                            {errors.gender && (
                                <div className="ui pointing red basic label">
                                    {errors.gender.message}
                                </div>
                            )}
                        </FormField>
                    </div>

                    <div className="form-field">
                        <FormField>
                            <label>Phone Number</label>
                            <input
                                placeholder="Phone Number"
                                {...register("phoneNumber")}

                            />
                            {errors.phoneNumber && (
                                <div className="ui pointing red basic label">
                                    {errors.phoneNumber.message}
                                </div>
                            )}
                        </FormField>
                    </div>
                    <div className="form-field">
                        <FormField>
                            <label>Country</label>
                            <select {...register("country")} className="ui search dropdown">
                                <option value="">Select your country</option>
                                {
                                    countryOptions?.map((country) => <option key={country?.key} value={country?.value}>{country?.text}</option>)
                                }
                            </select>
                            {errors.country && (
                                <div className="ui pointing red basic label">
                                    {errors.country.message}
                                </div>
                            )}
                        </FormField>
                    </div>
                    <div className="form-field">
                        <FormField>
                            <label>Email</label>
                            <input
                                placeholder="Email"
                                {...register("email")}

                            />
                            {errors.email && (
                                <div className="ui pointing red basic label">
                                    {errors.email.message}
                                </div>
                            )}
                        </FormField>
                    </div>
                    <div className="form-field">
                        <FormField>
                            <label>Password</label>
                            <div className="ui input">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    {...register("password")}

                                />
                                <Icon
                                    name={showPassword ? "eye slash" : "eye"}
                                    link
                                    onClick={togglePasswordVisibility}
                                    style={{ cursor: "pointer", position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}
                                />
                            </div>
                            {errors.password && (
                                <div className="ui pointing red basic label">
                                    {errors.password.message}
                                </div>
                            )}
                        </FormField>
                    </div>
                    <div className="form-field">
                        <FormField>
                            <label>Confirm Password</label>
                            <div className="ui input">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    {...register("confirmPassword")}

                                />
                                <Icon
                                    name={showConfirmPassword ? "eye slash" : "eye"}
                                    link
                                    onClick={toggleConfirmPasswordVisibility}
                                    style={{ cursor: "pointer", position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}
                                />
                            </div>
                            {errors.confirmPassword && (
                                <div className="ui pointing red basic label">
                                    {errors.confirmPassword.message}
                                </div>
                            )}
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
        </Modal >
    );
};

export default AddTodoModal;
