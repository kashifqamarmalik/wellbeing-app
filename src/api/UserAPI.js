/* eslint-disable prettier/prettier */
import {URLSearchParams} from 'react-native/Libraries/Blob/URL';

let config = require('../config.js');

const url = `http://${config.testing.ip}:${config.testing.port}/api`;

const UserAPI = () => {
    const findUserByUsername = async (username) => {
        try {
            let res = await fetch(url + '/find-user/?username=' + username, {
                method: 'GET',
            });
            if (res.ok) {
                return await res.json();
            } else {
                return res;
            }
        } catch (e) {
            throw new Error(e);
        }
    };

    const findUserByID = async (id) => {
        try {
            let res = await fetch(url + '/find-id/?id=' + id, {
                method: 'GET',
            });

            if (res.ok) {
                return await res.json();
            } else {
                return res;
            }
        } catch (e) {
            throw new Error(e);
        }
    };

    const createNewUser = async (user) => {
        if (user === undefined || user.username === undefined || user.user_id === '') {
            throw new Error('No valid user passed to createNewUser().');
        }
        try {
            let form = new URLSearchParams();
            Object.keys(user).forEach(it => {
                form.append(it, user[it]);
            });
            let res = await fetch(url + '/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: form,
            });
            if (res.ok) {
                return await res.json();
            } else {
                return res;
            }
        } catch (e) {
            throw new Error(e);
        }
    };

    const testCall = async () => {
        try {
            let res = await fetch(url + '/', {
               method: 'GET',
            });
            if (res.ok) {
                return await res.json();
            } else {
                return res;
            }
        } catch (e) {
            throw new Error(e);
        }

    };

    return {
        findUserByUsername,
        findUserByID,
        createNewUser,
        testCall,
    };
};

export default UserAPI;

