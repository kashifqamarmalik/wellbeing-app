import UserAPI from '../src/api/UserAPI';
import 'isomorphic-fetch';
import {User} from '../src/data/User';

//Testing for UserAPI without mocking the fetches or backend.
//Idea is to test using a locally run backend.

it('testCall() returns welcoming message', async () => {
  let res = await UserAPI().testCall();
  expect(res.message).toBe('Welcome to the Wellbeing API.');
});

it('findUserById() using invalid ID should return status 400 and error(s)', async () => {
  let res = await UserAPI().findUserByID('');
  expect(res.status).toBe(400);
  expect(res.statusText).toBe('Bad Request');
});

it('findUserByID() using valid ID should return status 200 and user', async () => {
  let id = '603545c86a1d7a4e903d54e4';
  let res = await UserAPI().findUserByID(id);
  expect(res._id).toBe(id);
});

it('findUserByUsername() using invalid username should return status 400 and error(s)', async () => {
  let res = await UserAPI().findUserByUsername(123);
  expect(res.status).toBe(400);
  expect(res.statusText).toBe('Bad Request');
});

it('findUserByUsername() using valid and existing username should return status 200 and user', async () => {
  let username = 'Test1';
  let res = await UserAPI().findUserByUsername(username);
  expect(res.username).toBe(username);
});

it('createNewUser() without valid parameters', async () => {
  await expect(async () => {
    await UserAPI().createNewUser();
  }).rejects.toThrow('No valid user passed to createNewUser().');
});

it('createNewUser() duplicate user should return status 400 and message', async () => {
  let user = new User('Test1', '12312412', 0, 'Helsinki');
  let res = await UserAPI().createNewUser(user);
  expect(res.status).toBe(400);
  let json = await res.json();
  expect(json.errors).toBe('Username already exists.');
});
