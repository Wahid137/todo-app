import React, { useState } from 'react';
import { Button, Container, Icon, Modal, Segment, Table } from 'semantic-ui-react';
import initialTodos from "../data/todos.json";

const TodoListPage = () => {
    const [todos, setTodos] = useState(initialTodos);
    const [deleteId, setDeleteId] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const handleDelete = (id) => {
        setDeleteId(id);
        setOpenModal(true);
    };

    const handleConfirmDelete = () => {
        setTodos(todos.filter(todo => todo.id !== deleteId));
        setOpenModal(false);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <Segment style={{ marginTop: '20px', margin: 'auto' }}>
                <h2 style={{ textAlign: 'center' }}>Todo App</h2>
            </Segment>
            <Container style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', padding: '50px', marginTop: '50px' }}>
                <div>
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
                                            <Button icon color='red' onClick={() => handleDelete(todo.id)}>
                                                <Icon name='trash' />
                                            </Button>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            </Container>

            <Modal
                size='tiny'
                open={openModal}
                onClose={handleCloseModal}
            >
                <Modal.Header>Confirm Deletion</Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete this todo?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={handleCloseModal}>Cancel</Button>
                    <Button positive onClick={handleConfirmDelete}>Confirm</Button>
                </Modal.Actions>
            </Modal>
        </div>
    );
};

export default TodoListPage;
