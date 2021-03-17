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
              throw new Error('HTTP status: ' +  res.status);
            }
        } catch (e) {
            throw new Error('HTTP status: ' +  e);
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
                throw new Error('HTTP status: ' +  res.status);
            }
        } catch (e) {
            throw new Error('HTTP status: ' +  e);
        }
    };

    const createNewUser = async (user) => {
        try {
            let form = new URLSearchParams();
            user.forEach(it => form.append(it, user[it]));
            let res = await fetch(url + '/user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: {
                    form,
                },
            });
            if (res.ok) {
                return await res.json();
            } else {
                throw new Error('HTTP status: ' +  res.status);
            }
        } catch (e) {
            throw new Error('HTTP status: ' +  e);
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
                throw new Error('HTTP status: ' +  res.status);
            }
        } catch (e) {
            throw new Error('HTTP status: ' +  e);
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

