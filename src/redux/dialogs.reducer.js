const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Maksym'},
    {id: 2, name: 'Oleksandra'},
    {id: 3, name: 'Nadiia'},
    {id: 4, name: 'Uliana'},
    {id: 5, name: 'Svitlana'},
    {id: 6, name: 'Viktor'},
  ],

  messages: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are your skills?'},
    {id: 3, message: 'Thank you!'},
  ],
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      };

    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, });

export default dialogsReducer;