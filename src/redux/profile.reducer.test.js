import profileReducer, { addPostActionCreator } from './profile.reducer';

it('new post should be added', () => {
  let action = addPostActionCreator('programming');

  let state = {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It is my first post!', likesCount: 11},
    ],
    profile: null,
    status: '',
  };

  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(3);
});

