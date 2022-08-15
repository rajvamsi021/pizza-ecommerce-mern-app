import React, { useEffect } from 'react';
import {Table, Button} from 'react-bootstrap';
import {AiFillDelete} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, deleteUserFromDB, changeUserAdminStatus } from '../../actions/userAction';
import Spinner from '../Spinner';

const UsersList = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(state => state.getAllUsersReducer);
  const {loading, users, error} = usersData;

  const userDeleteHandler = (user) => {
    dispatch(deleteUserFromDB(user._id));

    // fetch users after deleting an user.
    dispatch(getAllUsers());
  }

  const removeAdminHandler = (user) => {
    dispatch(changeUserAdminStatus(user._id));
  }

  const makeAdminHandler = (user) => {
    dispatch(changeUserAdminStatus(user._id));
  }

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
      {loading ? <Spinner />
                 : error ? <h1>Error while fetching data.</h1>
                 : (
                    <>
                    <Table striped bordered hover className='text-center'>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                                <th>Admin Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                      <AiFillDelete
                                        className='ms-2'
                                        style={{cursor: 'pointer'}}
                                        onClick={() => userDeleteHandler(user)}
                                      />
                                    </td>
                                    {user.isAdmin ? (
                                      <>
                                        <td>
                                          <Button
                                            style={{width: '160px'}}
                                            onClick={() => removeAdminHandler(user)}
                                            className='bg-danger'
                                          >
                                            Remove as Admin
                                          </Button>
                                        </td>
                                      </>
                                    ) : (
                                      <>
                                        <td>
                                          <Button
                                            style={{width: '160px'}}
                                            type='submit'
                                            onClick={() => makeAdminHandler(user)}
                                            className='bg-success'
                                          >
                                            Make as Admin
                                          </Button>
                                        </td>
                                      </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                   </Table>
                   </>
        )}
    </>
  )
}

export default UsersList;