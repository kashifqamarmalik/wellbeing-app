/* eslint-disable prettier/prettier */
//import axios from 'axios';
let config = require('../config.js');

//const baseURL = 'http://localhost:8066/api';
//const baseURL = `http://${ config.testing.ip }:${ config.testing.port }/api`;
const baseURL = config.cloud.uri;

const getAllRequest = async () => {
  try {
    const requests = await fetch(baseURL + '/requests');
    const json = await requests.json();
    return json;
  } catch (e) {
    throw new Error(e);
  }
};

const postRequest = async (newRequest) => {
  var formBody = [];
  for (var key in newRequest) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(newRequest[key]);
    formBody.push(encodedKey + '=' + encodedValue);
 }
 formBody = formBody.join('&');
  try {
    const res = await fetch(baseURL + '/requests', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBody,
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

const putRequest = async (updateRequest) => {
  var formBody = [];
  for (var key in updateRequest) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(updateRequest[key]);
    formBody.push(encodedKey + '=' + encodedValue);
 }
 formBody = formBody.join('&');
  try {
    const res = await fetch(baseURL + '/requests', {
      method: 'PUT',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBody,
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

const deleteRequest = async (id) => {
  try {
    const res = await fetch(baseURL + '/requests/' + id, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('fetchdelete error' + res.status);
    }
    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
  
};

const getSpecificRequest = async (id) => {
  try {
    const requests = await fetch(baseURL + '/requests/' + id);
    const json = await requests.json();
    return json;
  } catch (e) {
    throw new Error(e);
  }
};

export { getAllRequest, getSpecificRequest, putRequest, postRequest, deleteRequest };
