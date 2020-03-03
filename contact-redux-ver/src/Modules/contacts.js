const CHANGE_INPUT_NAME = 'CHANGE_INPUT_NAME';
const CHANGE_INPUT_PHONE = 'CHANGE_INPUT_PHONE';
const INSERT = 'INSERT';
const UPDATE = 'UPDATE';
const REMOVE = 'REMOVE';
const FAVORITE = 'FAVORITE';
const CHECK_ID = 'CHECK_ID';
const CHECKED = 'CHECKED';
const CHECKED_DELETE = 'CHECKED_DELETE';

export const changeInputName = inputName => ({
   type: CHANGE_INPUT_NAME,
   inputName,
});
export const changeInputPhone = inputPhone => ({
   type: CHANGE_INPUT_PHONE,
   inputPhone,
});
let id = 8;
export const insert = (inputName, inputPhone) => ({
   type: INSERT,
   contact: {
      id: id++,
      name: inputName,
      phone: inputPhone,
      favorite: false,
   },
});
export const update = (inputName, inputPhone) => ({
   type: UPDATE,
   inputName,
   inputPhone,
});
export const remove = id => ({ type: REMOVE, id });
export const favorite = id => ({ type: FAVORITE, id });
export const checkId = id => ({ type: CHECK_ID, id });
export const checked = id => ({ type: CHECKED, id });
export const checkedDelete = () => ({ type: CHECKED_DELETE });

const initialState = {
   inputName: '',
   inputPhone: '',
   checkId: -1,
   contacts: [
      {
         id: 1,
         name: '임성환',
         phone: '010-1234-5678',
         favorite: false,
         checked: false,
      },
      {
         id: 2,
         name: '김지훈',
         phone: '010-5698-5412',
         favorite: true,
         checked: false,
      },
      {
         id: 3,
         name: '홍길동',
         phone: '010-9874-0000',
         favorite: true,
         checked: false,
      },
      {
         id: 4,
         name: '장발장',
         phone: '010-8888-0203',
         favorite: true,
         checked: false,
      },
      {
         id: 5,
         name: '리액트',
         phone: '010-1658-1530',
         favorite: false,
         checked: false,
      },
      {
         id: 6,
         name: '리덕스',
         phone: '010-7896-0012',
         favorite: false,
         checked: false,
      },
      {
         id: 7,
         name: '이순신',
         phone: '010-1190-0015',
         favorite: true,
         checked: false,
      },
   ],
};

function contacts(state = initialState, action) {
   switch (action.type) {
      case CHANGE_INPUT_NAME:
         return {
            ...state,
            inputName: action.inputName,
         };
      case CHANGE_INPUT_PHONE:
         return {
            ...state,
            inputPhone: action.inputPhone,
         };
      case INSERT:
         return {
            ...state,
            contacts: state.contacts.concat(action.contact),
         };
      case UPDATE:
         return {
            ...state,
            contacts: state.contacts.map(contact =>
               contact.id === state.checkId
                  ? {
                       ...contact,
                       name: action.inputName,
                       phone: action.inputPhone,
                    }
                  : contact,
            ),
         };
      case REMOVE:
         return {
            ...state,
            contacts: state.contacts.filter(
               contact => contact.id !== action.id,
            ),
         };
      case FAVORITE:
         return {
            ...state,
            contacts: state.contacts.map(contact =>
               contact.id === action.id
                  ? { ...contact, favorite: !contact.favorite }
                  : contact,
            ),
         };
      case CHECK_ID:
         return {
            ...state,
            checkId: action.id,

            inputName: state.contacts.filter(
               contact => contact.id === action.id,
            )[0].name,
            inputPhone: state.contacts.filter(
               contact => contact.id === action.id,
            )[0].phone,
         };
      case CHECKED:
         return {
            ...state,
            contacts: state.contacts.map(contact =>
               contact.id === action.id
                  ? { ...contact, checked: !contact.checked }
                  : contact,
            ),
         };
      case CHECKED_DELETE:
         return {
            ...state,
            contacts: state.contacts.filter(
               contact => contact.checked === false,
            ),
         };
      default:
         return state;
   }
}

export default contacts;
