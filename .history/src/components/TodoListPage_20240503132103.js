import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container, Icon, Message, Segment, Table } from 'semantic-ui-react';
import initialTodos from "../data/todos.json";
import AddTodoModal from './AddTodoModal';
import ConfirmationModal from './ConfirmationModal';
import EditTodoModal from './EditTodoModal';


const schema = Joi.object({
    title: Joi.string().min(2).max(30).required().label("Title"),
    description: Joi.string().min(2).max(500).required().label("Description"),
});

const TodoListPage = () => {
    const [todos, setTodos] = useState(initialTodos);
    const [deleteId, setDeleteId] = useState(null);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState(''); // State for message content
    const [todoToDelete, setTodoToDelete] = useState(null);
    const [editTodo, setEditTodo] = useState(null);
    const [openEditModal, setOpenEditModal] = useState(false);


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: joiResolver(schema) });


    const handleDelete = (id, title) => {
        setDeleteId(id);
        setTodoToDelete(title);
        setOpenDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        setTodos(todos.filter(todo => todo.id !== deleteId));
        setOpenDeleteModal(false);
        setShowMessage(true);
        setMessage('Todo deleted successfully.');
    };

    const handleCloseDeleteModal = () => {
        setOpenDeleteModal(false);
    };

    const handleCloseAddModal = () => {
        setOpenAddModal(false);
    };

    const handleCloseEditModal = () => {
        setOpenEditModal(false);
    };

    const handleDismissMessage = () => {
        setShowMessage(false);
    };

    const handleCreateNew = () => {
        setOpenAddModal(true);
    };

    const handleCreateTodo = (data) => {
        const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
        const newTodo = {
            id: newId,
            title: data.title,
            description: data.description
        };
        setTodos([...todos, newTodo]);
        setOpenAddModal(false);
        setShowMessage(true);
        setMessage('Todo added successfully.');
        reset();
    };

    const handleEdit = (todo) => {
        setEditTodo(todo);
        setOpenEditModal(true);
    };

    const handleEditSubmit = (data) => {
        const updatedTodos = todos.map(todo =>
            todo.id === editTodo.id ? { ...todo, title: data.title, description: data.description } : todo
        );
        setTodos(updatedTodos);
        setOpenEditModal(false);
        setShowMessage(true);
        setMessage('Todo edited successfully.');
    };

    return (
        <div>
            <Segment style={{ marginTop: '20px', margin: 'auto' }}>
                <h2 style={{ textAlign: 'center' }}>Todo App</h2>
            </Segment>
            <Container style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', padding: '50px', marginTop: '100px', position: 'relative' }}>
                <Button icon color='green' onClick={handleCreateNew} style={{ position: 'absolute', right: '45px', top: '10px', zIndex: '1' }}>
                    <Icon name='add' /> Create New
                </Button>
                {showMessage &&
                    <Message
                        success
                        onDismiss={handleDismissMessage}
                        header='Success!'
                        content={message}
                        style={{ position: 'absolute', top: '-70px', left: 0, right: 0, margin: 'auto', width: '100%', marginBottom: '20px' }}
                    />
                }
                <div>
                    {todos.length === 0 ? (
                        <Message
                            info
                            header='No Todos'
                            content='There are no todos to display.'
                        />
                    ) : (
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Index</Table.HeaderCell>
                                    <Table.HeaderCell>Title</Table.HeaderCell>
                                    <Table.HeaderCell>Description</Table.HeaderCell>
                                    <Table.HeaderCell>Action</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {todos.map((todo, index) => (
                                    <Table.Row key={todo.id}>
                                        <Table.Cell>{index + 1}</Table.Cell>
                                        <Table.Cell>{todo.title}</Table.Cell>
                                        <Table.Cell>{todo.description}</Table.Cell>
                                        <Table.Cell>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Button icon color='blue' onClick={() => handleEdit(todo)}>
                                                    <Icon name='edit' />
                                                </Button>
                                                <Button icon color='red' onClick={() => handleDelete(todo.id, todo.title)}>
                                                    <Icon name='trash' />
                                                </Button>
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    )}
                </div>
            </Container>

            <ConfirmationModal
                open={openDeleteModal}
                onClose={handleCloseDeleteModal}
                onConfirm={handleConfirmDelete}
                todoTitle={todoToDelete}
            />

            <AddTodoModal
                open={openAddModal}
                onClose={handleCloseAddModal}
                onSubmit={handleCreateTodo}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
            />

            <EditTodoModal
                open={openEditModal}
                onClose={handleCloseEditModal}
                onSubmit={handleEditSubmit}
                todo={editTodo}
            />
        </div>
    );
};

export default TodoListPage;
