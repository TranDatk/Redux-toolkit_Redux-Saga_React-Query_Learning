import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useAppDispatch } from '../redux/hooks';
import { fetchListUser } from '../redux/user/user.slice';

interface IUser {
    id: string;
    name: string;
    email: string;
}

function UsersTable() {
    const [users, setUsers] = useState<IUser[]>();

    // const fetchUsers = async () => {
    //     const res = await fetch("http://localhost:8000/users");
    //     const data = await res.json();
    //     setUsers(data);
    // }

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchListUser())
    }, [])

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users?.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}

export default UsersTable;