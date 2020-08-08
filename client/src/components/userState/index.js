import React, { useState, useEffect } from 'react';
import UserContext from '../../Context';
import getCookie from '../../utils/getCookie';

const UserState = (props) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (user) => {
        setUser({
            ...user,
            loggedIn: true
        })
    }

    const logout = () => {
        document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"

        setUser({
            loggedIn: false
        })
    }

    useEffect(() => {
        const token = getCookie('x-auth-token')

        if (!token) {
            logout();
            setLoading(false)
            return;
        }

        fetch('http://localhost:8080/api/user/verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then(promise => {
            return promise.json()
        }).then(res => {
            if (res.status) {
                login({
                    username: res.user.username,
                    id: res.user._id
                })
            } else {
                logout()
            }
            setLoading(false);
        })
    }, []);

    if (loading) {
        return (<div>Loading...</div>)
    }

    return (
        <UserContext.Provider value={{
            user,
            login,
            logout
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;