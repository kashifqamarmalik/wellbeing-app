/* eslint-disable prettier/prettier */
import {URLSearchParams} from 'react-native/Libraries/Blob/URL';

let config = require('../config.js');

//const url = `https://${config.testing.ip}:${config.testing.port}/api`;
const url = config.cloud.uri;

const UserAPI = () => {
    const findUserByUsername = async (username) => {
        try {
            let res = await fetch(`${url}/find-user/?username=${username}`, {
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
            let res = await fetch(`${url}/find-id/?id=${id}`, {
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
        if (user === undefined || user.username === undefined || user.password === undefined || user.password === '') {
            throw new Error('No valid user passed to createNewUser().');
        }
        try {
            /*let form = new URLSearchParams();
            Object.keys(user).forEach(it => {
                form.append(it, user[it]);
            });
            console.log(form);*/
            let form = [];
            Object.entries(user).forEach((key) => {
                let encKey = encodeURIComponent(key[0]);
                let encVal = encodeURIComponent(key[1]);
                form.push(`${encKey}=${encVal}`);
            });
            form = form.join('&');
            let res = await fetch(`${url}/user`, {
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

