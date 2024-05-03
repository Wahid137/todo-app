import React, { useState } from 'react';
import { Button, Container, Icon, Segment, Table } from 'semantic-ui-react';

const TodoListPage = () => {
    const initialTodos = [
        { id: 1, title: "todo1", description: "todo1 description" },
        { id: 2, title: "todo2", description: "todo2 description" }
    ];

    const [todos, setTodos] = useState(initialTodos);

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <Container style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', padding: '20px' }}>
            <Segment>
                <h2>Todo App</h2>
            </Segment>
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
                        {todos?.map((todo, index) => (
                            <Table.Row key={todo.id}>
                                <Table.Cell>{index + 1}</Table.Cell>
                                <Table.Cell>{todo.title}</Table.Cell>
                                <Table.Cell>{todo.description}</Table.Cell>
                                <Table.Cell>
                                    <Button icon color='blue'>
                                        <Icon name='edit' />
                                    </Button>
                                    <Button icon color='red' onClick={() => handleDelete(todo.id)}>
                                        <Icon name='trash' />
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </Container>
    );
};

export default TodoListPage;
