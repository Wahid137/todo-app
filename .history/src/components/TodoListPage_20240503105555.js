import React, { useState } from 'react';
import { Button, Container, Icon, Message, Segment, Table } from 'semantic-ui-react';
import initialTodos from "../data/todos.json";
import AddTodoModal from './AddTodoModal';
import ConfirmationModal from './ConfirmationModal';

const TodoListPage = () => {
    const [todos, setTodos] = useState(initialTodos);
    const [deleteId, setDeleteId] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [todoToDelete, setTodoToDelete] = useState(null);
    const [newTodo, setNewTodo] = useState({ title: "", description: "" });

    const handleDelete = (id, title) => {
        setDeleteId(id);
        setTodoToDelete(title);
        setOpenModal(true);
    };

    const handleConfirmDelete = () => {
        setTodos(todos.filter(todo => todo.id !== deleteId));
        setOpenModal(false);
        setShowMessage(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleDismissMessage = () => {
        setShowMessage(false);
    };

    const handleCreateNew = () => {
        setOpenModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTodo((prevTodo) => ({
            ...prevTodo,
            [name]: value,
        }));
    };

    const handleCreateSubmit = () => {
        // Add logic to handle the submission of the new todo
        console.log("New Todo:", newTodo);
        setOpenModal(false);
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
                        content='Todo deleted successfully.'
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
                                                <Button icon color='blue'>
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
                open={openModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
                todoTitle={todoToDelete}
            />

            <AddTodoModal
                open={openModal}
                onClose={handleCloseModal}
                onSubmit={handleCreateSubmit}
                newTodo={newTodo}
                onInputChange={handleInputChange}
            />
        </div>
    );
};

export default TodoListPage;
