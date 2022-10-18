import {createStore} from 'redux'; 

const initialState = {
  users: [], 
  loggedInUser: null,
  recipies: [{
    id: 1,
    name: 'omelette',
    kcal: 100
  }, {
    id: 2,
    name: 'pasta',
    kcal: 300
  }, {
    id: 3,
    name: 'pizza',
    kcal: 500
  }]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        users: [...state.users, action.payload]
      }
  
    default:
      return state; 
  }
}

export default createStore(reducer)