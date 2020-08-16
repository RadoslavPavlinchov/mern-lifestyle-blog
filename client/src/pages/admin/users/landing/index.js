import React, { useState, useEffect, useCallback } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    const _getUsers = async () => {
        const promise = await fetch(`http://localhost:8080/api/user/all`);
        const users = await promise.json();
        return users;
    }

    const deleteArticle = (id) => {
        console.log('delete')
    }

    const getUsers = useCallback(async () => {
        const users = await _getUsers();
        setUsers(users);
    }, []);

    const renderUsers = () => {
        return users.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.role}</td>
                    <td><Link to='#' className={styles.edit}>Edit</Link></td>
                    <td><Link to='#' onClick={() => deleteArticle(user._id)} className={styles.delete}>Delete</Link></td>
                </tr>
            )
        })
    }

    useEffect(() => {
        getUsers();
    }, [getUsers])

    return (
        <div className={styles['admin-wrapper']}>

            <div className={styles['left-sidebar']}>
                <ul>
                    <li><Link to="/admin/articles" className={styles.brand}>Articles</Link></li>
                    <li><Link to="/admin/users" className={styles.brand}>Users</Link></li>
                    <li><Link to="/admin/categories" className={styles.brand}>Categories</Link></li>
                </ul>
            </div>

            <div className={styles['admin-content']}>

                <div className={styles['button-group']}>
                    <Link to="/admin/user/create" className={styles['btn-big']}>Create User</Link>
                </div>

                <div className={styles.content}>
                    <h2 className={styles['page-title']}>Manage Users</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>N</th>
                                <th>Username</th>
                                <th>Role</th>
                                <th colSpan="2">Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                renderUsers()
                            }

                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    )
}

export default ManageUsers;