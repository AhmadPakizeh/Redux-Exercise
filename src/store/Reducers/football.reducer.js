import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM } from '../Actions/type';

const initialState = [
  {
    id: 0,
    number: '10',
    name: 'Messi',
    nation: 'Argentina',
    post: 'Forward',
  },
  {
    id: 1,
    number: '7',
    name: 'Cristiano Ronaldo',
    nation: 'Portugal',
    post: 'Forward',
  },
  {
    id: 2,
    number: '10',
    name: 'Naymar',
    nation: 'Brazil',
    post: 'Forward',

  },
  {
    id: 3,
    number: '9',
    name: 'Taremi',
    nation: 'Iran',
    post: 'Forward'
  }
];

export const footballReducer = (state = initialState, action) => {

  switch (action.type) { // It cheks the type and does the right action!
    case ADD_ITEM:
      return [
        ...state, //Bring everything with yourself! 
        {
          ...action.payload,//Puts items in payload
        },
      ];

    case EDIT_ITEM:
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index] = action.payload;
      return [...state];

    case REMOVE_ITEM:
      const filteredItems = state.filter((item) => item.id !== action.payload);
      return filteredItems;
    default:
      return state;
  }
};
